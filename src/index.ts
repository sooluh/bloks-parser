import { ParseType } from "./types";

const parse = (entries: ParseType): ParseType => {
  if (typeof entries !== "object") {
    return entries;
  }

  if (Array.isArray(entries)) {
    return entries.map((item) => parse(item));
  }

  const parsed: { [key: string]: any } = {};

  for (const key in entries) {
    if (key in entries) {
      const value = entries[key];

      if (typeof value === "string") {
        try {
          parsed[key] = JSON.parse(value);
        } catch {
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
  bloks = bloks.replace(/\(/g, "[").replace(/\)/g, "]");
  bloks = bloks.replace(/"(\s+)?(\[.*])"/g, (match) =>
    JSON.stringify(match[2]),
  );
  bloks = bloks.replace(/((bk|ig)\.[\d.A-Za-z]+)/g, '"$1"');
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

  const object = isTwoFactor ? twoFactorObject : successObject;

  return { isFailed, isTwoFactor, isSuccess, object };
};
