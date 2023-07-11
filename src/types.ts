export type ParseType =
  | string
  | number
  | (string | number)[]
  | { [key: string | number]: any };
