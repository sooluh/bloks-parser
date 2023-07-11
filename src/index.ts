import { ParseType } from "./types";

const parse = (entries: ParseType): ParseType => {
  // return entries if it's not of object data type
  if (typeof entries !== "object") {
    return entries;
  }

  // return entries with each of its values parsed
  // again when they are of array data type
  if (Array.isArray(entries)) {
    return entries.map((item) => parse(item));
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
        parsed[key] = parse(value);
      } else {
        parsed[key] = value;
      }
    }
  }

  return parsed;
};

const array = (bloks: string) => {
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
  return parse(entries);
};

export const bloks = (string: string) => {
  const entries = array(string.trim());

  // username & password error string: [3][2][1][3]
  // 2fa: [3][4][2] <== username & password error: result array with bk.action boolean false
  // success: [5][3][1][1][1][3]

  const failedObject = Object.values(entries)?.[3]?.[2]?.[1]?.[3];
  const twoFactorObject = Object.values(entries)?.[3]?.[4]?.[2];
  const successObject = Object.values(entries)?.[5]?.[3]?.[1]?.[1]?.[1]?.[3];

  const isFailed = typeof failedObject === "string";
  const isTwoFactor =
    typeof twoFactorObject === "object" && !Array.isArray(twoFactorObject);
  const isSuccess = !isFailed && !isTwoFactor;

  return {
    isFailed,
    isTwoFactor,
    isSuccess,
    data: isTwoFactor ? twoFactorObject : successObject,
  };
};
