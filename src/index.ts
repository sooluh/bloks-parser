type ParseType =
  | string
  | number
  | (string | number)[]
  | { [key: string | number]: any };

type BloksType = {
  isError: boolean;
  isTwoFactor: boolean;
  isAuthenticated: boolean;
  data?: object;
  message?: string;
};

const parseObject = (entries: ParseType): ParseType => {
  // return entries if it's not of object data type
  if (typeof entries !== "object") {
    return entries;
  }

  // return entries with each of its values parsed
  // again when they are of array data type
  if (Array.isArray(entries)) {
    return entries.map((item) => parseObject(item));
  }

  const parsed: { [key: string]: any } = {};

  for (const key in entries) {
    if (key in entries) {
      const value = entries[key];

      if (typeof value === "string") {
        try {
          // parse json if possible
          parsed[key] = JSON.parse(value);
        } catch {
          // use value if it can't be parsed
          parsed[key] = value;
        }
      } else if (typeof value === "object") {
        parsed[key] = parseObject(value);
      } else {
        parsed[key] = value;
      }
    }
  }

  return parsed;
};

const parseBloks = (bloks: string) => {
  // sanitize unicode
  bloks = bloks.replace(/[^ -~]/g, "'");
  // replace parentheses with square brackets
  bloks = bloks.replace(/\(/g, "[").replace(/\)/g, "]");
  // fix structure of quoted array
  bloks = bloks.replace(/"(\s+)?(\[.*])"/g, (match) =>
    // "[bk.xxx, bk.xxx]" => "[\"bk.xxx\", \"bk.xxx\"]"
    JSON.stringify(match[2]),
  );
  // quote all strings that start with "bk." or "ig."
  bloks = bloks.replace(/((bk|ig)\.[\d.A-Za-z]+)/g, '"$1"');
  // fix structure of quoted object
  bloks = bloks.replace(/"({.*})"/g, "$1");

  const entries = JSON.parse(bloks);
  return parseObject(entries);
};

export const bloks = (bloksResponse: string): BloksType => {
  try {
    const entries = parseBloks(bloksResponse.trim());

    // username & password error string: [3][2][1][3]
    // 2fa: [3][4][2] <== username & password error: result array with bk.action boolean false
    // success: [5][3][1][1][1][3]

    const error = Object.values(entries)?.[3]?.[2]?.[1]?.[3];
    const twoFac = Object.values(entries)?.[3]?.[4]?.[2];
    const data = Object.values(entries)?.[5]?.[3]?.[1]?.[1]?.[1]?.[3];

    const isFailed = typeof error === "string";
    const isTwoFactor = typeof twoFac === "object" && !Array.isArray(twoFac);
    const isAuthenticated = !isFailed && !isTwoFactor;

    return {
      isError: false,
      isTwoFactor,
      isAuthenticated,
      data: isTwoFactor ? twoFac : data,
      message: error,
    };
  } catch (error) {
    return {
      isError: true,
      isTwoFactor: false,
      isAuthenticated: false,
      message: String(error),
    };
  }
};
