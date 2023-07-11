import { describe, it, expect } from "vitest";
import { bloks } from "../src";

const wrongUsername = Buffer.from(
  "IChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5jb3JlLlRha2VMYXN0LCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJBbm5vdGF0ZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImxvZ2luX3R5cGUiLCAibG9naW5fc291cmNlIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgIlBhc3N3b3JkIiwgIkxvZ2luIikpKSwgKGJrLmFjdGlvbi5xcGwuTWFya2VyQW5ub3RhdGUsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJlbmRfcG9pbnQiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZ2VuZXJpY19lcnJvcl9kaWFsb2ciKSkpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJFbmRWMiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA4NyksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM3MDQpKSkpLCBudWxsLCAoYmsuYWN0aW9uLmNvcmUuVGFrZUxhc3QsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxKSwgKGlnLmFjdGlvbi5jZHNkaWFsb2cuT3BlbkRpYWxvZywgKGJrLmFjdGlvbi50cmVlLk1ha2UsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxMzc5OSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA0MCksICJDYW4ndCBmaW5kIGFjY291bnQiLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMzUpLCAiV2UgY2FuJ3QgZmluZCBhbiBhY2NvdW50IHdpdGggcGFwaXB1cGVwb3BhcGlwdXBlcG8uIFRyeSBhbm90aGVyIHBob25lIG51bWJlciBvciBlbWFpbC4iLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMzYpLCAoYmsuYWN0aW9uLnRyZWUuTWFrZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEzODAwKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM2KSwgIlRyeSBBZ2FpbiIsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAzNSksIChiay5hY3Rpb24uY29yZS5GdW5jQ29uc3QsIChiay5hY3Rpb24ubG9nZ2luZy5Mb2dFdmVudCwgImNhYV9sb2dpbl9jbGllbnRfZXZlbnRzX2lnIiwgIiIsIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImNvcmUiLCAibG9naW5fcGFyYW1zIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZXZlbnQiLCAiZXZlbnRfY2F0ZWdvcnkiLCAiZXZlbnRfZmxvdyIsICJldmVudF9yZXF1ZXN0X2lkIiwgImV2ZW50X3N0ZXAiLCAiaXNfZGFya19tb2RlIiwgImV4Y2VwdGlvbl9jb2RlIiwgImV4Y2VwdGlvbl9tZXNzYWdlIiwgImV4Y2VwdGlvbl90eXBlIiwgImV4dHJhX2NsaWVudF9kYXRhIiwgImxvZ2dlZF9vdXRfaWRlbnRpZmllciIsICJsb2dnZWRfaW5faWRlbnRpZmllciIsICJ3YXRlcmZhbGxfaWQiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAibG9naW5fZXJyb3JfZGlhbG9nX29rX2NsaWNrZWQiLCAibG9naW5faG9tZV9wYWdlX2ludGVyYWN0aW9uIiwgImxvZ2luX21hbnVhbCIsICJjODkxMTlhMS05ZGQ3LTQzZWUtYTM1Yi1mOTk5NTQ0ZDhmZTMiLCAiaG9tZV9wYWdlIiwgKGlnLmFjdGlvbi5Jc0RhcmtNb2RlRW5hYmxlZCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgIiIsICIiLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UpKSwgIiIsICIiLCAiZTFiMGRhZGEtMGUxOS00YzZmLWE3YTUtZThjYjViZDYwYmY4IikpLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UpKSkpKSkpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgNDIpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCkpLCAoYmsuYWN0aW9uLnRyZWUuTWFrZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEzODA4KSkpLCAoYmsuYWN0aW9uLmNvcmUuVGFrZUxhc3QsIChiay5hY3Rpb24ucXBsLk1hcmtlckFubm90YXRlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMjI5Mzc4NSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAibG9naW5fdHlwZSIsICJsb2dpbl9zb3VyY2UiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiUGFzc3dvcmQiLCAiTG9naW4iKSkpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJBbm5vdGF0ZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImVuZF9wb2ludCIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJnZW5lcmljX2Vycm9yX2RpYWxvZyIpKSksIChiay5hY3Rpb24ucXBsLk1hcmtlckVuZFYyLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMjI5Mzc4NSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDg3KSwgKGJrLmFjdGlvbi50cmVlLk1ha2UsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxMzcwNCkpKSksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgInNob3VsZF9kaXNtaXNzX2xvYWRpbmciKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAoYmsuYWN0aW9uLmJvb2wuQ29uc3QsIGZhbHNlKSkpKSk=",
  "base64",
).toString("ascii");

const wrongPassword = Buffer.from(
  "IChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5jb3JlLlRha2VMYXN0LCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJBbm5vdGF0ZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImxvZ2luX3R5cGUiLCAibG9naW5fc291cmNlIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgIlBhc3N3b3JkIiwgIkxvZ2luIikpKSwgKGJrLmFjdGlvbi5xcGwuTWFya2VyQW5ub3RhdGUsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJlbmRfcG9pbnQiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZ2VuZXJpY19lcnJvcl9kaWFsb2ciKSkpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJFbmRWMiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA4NyksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM3MDQpKSkpLCBudWxsLCAoYmsuYWN0aW9uLmNvcmUuVGFrZUxhc3QsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxKSwgKGlnLmFjdGlvbi5jZHNkaWFsb2cuT3BlbkRpYWxvZywgKGJrLmFjdGlvbi50cmVlLk1ha2UsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxMzc5OSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA0MCksICJJbmNvcnJlY3QgUGFzc3dvcmQiLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMzUpLCAiVGhlIHBhc3N3b3JkIHlvdSBlbnRlcmVkIGlzIGluY29ycmVjdC4gUGxlYXNlIHRyeSBhZ2Fpbi4iLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMzYpLCAoYmsuYWN0aW9uLnRyZWUuTWFrZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEzODAwKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM2KSwgIk9LIiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM1KSwgKGJrLmFjdGlvbi5jb3JlLkZ1bmNDb25zdCwgKGJrLmFjdGlvbi5sb2dnaW5nLkxvZ0V2ZW50LCAiY2FhX2xvZ2luX2NsaWVudF9ldmVudHNfaWciLCAiIiwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiY29yZSIsICJsb2dpbl9wYXJhbXMiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJldmVudCIsICJldmVudF9jYXRlZ29yeSIsICJldmVudF9mbG93IiwgImV2ZW50X3JlcXVlc3RfaWQiLCAiZXZlbnRfc3RlcCIsICJpc19kYXJrX21vZGUiLCAiZXhjZXB0aW9uX2NvZGUiLCAiZXhjZXB0aW9uX21lc3NhZ2UiLCAiZXhjZXB0aW9uX3R5cGUiLCAiZXh0cmFfY2xpZW50X2RhdGEiLCAibG9nZ2VkX291dF9pZGVudGlmaWVyIiwgImxvZ2dlZF9pbl9pZGVudGlmaWVyIiwgIndhdGVyZmFsbF9pZCIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJsb2dpbl9lcnJvcl9kaWFsb2dfb2tfY2xpY2tlZCIsICJsb2dpbl9ob21lX3BhZ2VfaW50ZXJhY3Rpb24iLCAibG9naW5fbWFudWFsIiwgIjE1ZTY3NGY1LTExM2QtNGU3OC05NGRlLWI0YjVmZWE0NjY0MiIsICJob21lX3BhZ2UiLCAoaWcuYWN0aW9uLklzRGFya01vZGVFbmFibGVkKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAiIiwgIiIsIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSksIChiay5hY3Rpb24uYXJyYXkuTWFrZSkpLCAiIiwgIiIsICJmNDI4ZDZhMi1jZjI0LTQ1NDUtOTkwMi02MmNkZWU1MGMxNDciKSksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSksIChiay5hY3Rpb24uYXJyYXkuTWFrZSkpKSkpKSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA0MiksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM4MDgpKSksIChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5xcGwuTWFya2VyQW5ub3RhdGUsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJsb2dpbl90eXBlIiwgImxvZ2luX3NvdXJjZSIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJQYXNzd29yZCIsICJMb2dpbiIpKSksIChiay5hY3Rpb24ucXBsLk1hcmtlckFubm90YXRlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMjI5Mzc4NSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZW5kX3BvaW50IiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImdlbmVyaWNfZXJyb3JfZGlhbG9nIikpKSwgKGJrLmFjdGlvbi5xcGwuTWFya2VyRW5kVjIsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgODcpLCAoYmsuYWN0aW9uLnRyZWUuTWFrZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEzNzA0KSkpKSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAic2hvdWxkX2Rpc21pc3NfbG9hZGluZyIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsIChiay5hY3Rpb24uYm9vbC5Db25zdCwgZmFsc2UpKSkpKQ==",
  "base64",
).toString("ascii");

const twoFactor = Buffer.from(
  "IChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5jb3JlLlRha2VMYXN0LCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJBbm5vdGF0ZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImxvZ2luX3R5cGUiLCAibG9naW5fc291cmNlIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgIlBhc3N3b3JkIiwgIkxvZ2luIikpKSwgKGJrLmFjdGlvbi5xcGwuTWFya2VyQW5ub3RhdGUsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJlbmRfcG9pbnQiKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZ2VuZXJpY19lcnJvcl9kaWFsb2ciKSkpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJFbmRWMiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA4NyksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM3MDQpKSkpLCBudWxsLCAoYmsuYWN0aW9uLmNvcmUuVGFrZUxhc3QsIChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5xcGwuTWFya2VyQW5ub3RhdGUsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJsb2dpbl90eXBlIiwgImxvZ2luX3NvdXJjZSIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJQYXNzd29yZCIsICJMb2dpbiIpKSksIChiay5hY3Rpb24ucXBsLk1hcmtlckFubm90YXRlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMjI5Mzc4NSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAiZW5kX3BvaW50IiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgInJlZGlyZWN0X3R3b19mYWMiKSkpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJFbmRWMiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCA4NyksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM3MDQpKSkpLCAoYmsuYWN0aW9uLmxvZ2dpbmcuTG9nRXZlbnQsICJjYWFfbG9naW5fY2xpZW50X2V2ZW50c19pZyIsICIiLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJjb3JlIiwgImxvZ2luX3BhcmFtcyIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImV2ZW50IiwgImV2ZW50X2NhdGVnb3J5IiwgImV2ZW50X2Zsb3ciLCAiZXZlbnRfcmVxdWVzdF9pZCIsICJldmVudF9zdGVwIiwgImlzX2RhcmtfbW9kZSIsICJleGNlcHRpb25fY29kZSIsICJleGNlcHRpb25fbWVzc2FnZSIsICJleGNlcHRpb25fdHlwZSIsICJleHRyYV9jbGllbnRfZGF0YSIsICJsb2dnZWRfb3V0X2lkZW50aWZpZXIiLCAibG9nZ2VkX2luX2lkZW50aWZpZXIiLCAid2F0ZXJmYWxsX2lkIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgInJlZGlyZWN0aW9uX3RvX3R3b19mYWMiLCAidHdvX2ZhYyIsICJ0d29fZmFjIiwgImMwMGRmMGE5LTljZWUtNDkwOS05ZDJiLWI4ZTA2YmIwYmQ3ZSIsICJ0d29fZmFjX3JlZGlyZWN0IiwgKGlnLmFjdGlvbi5Jc0RhcmtNb2RlRW5hYmxlZCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAwKSwgIiIsICIiLCAoYmsuYWN0aW9uLm1hcC5NYWtlLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJsb2dpbl9zb3VyY2UiLCAibG9naW5fY3JlZGVudGlhbF90eXBlIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgIkxvZ2luIiwgIlBhc3N3b3JkIikpLCAiIiwgIiIsICJhNTEzYmI4Zi1lODJiLTQ1YTgtODU1Yy0yODdlOTJiZjlhNmIiKSksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSksIChiay5hY3Rpb24uYXJyYXkuTWFrZSkpKSkpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMSksIChiay5hY3Rpb24uY2FhLlByZXNlbnRUd29GYWN0b3JBdXRoRmxvdywgKGJrLmFjdGlvbi5jb3JlLkdldEFyZywgMCksICJ7Im1lc3NhZ2UiOiIiLCJ0d29fZmFjdG9yX3JlcXVpcmVkIjp0cnVlLCJ0d29fZmFjdG9yX2luZm8iOnsicGsiOjQ5MjQ4NTQ0NDk5LCJ1c2VybmFtZSI6ImNla3VsYWhjb20iLCJzbXNfdHdvX2ZhY3Rvcl9vbiI6ZmFsc2UsIndoYXRzYXBwX3R3b19mYWN0b3Jfb24iOmZhbHNlLCJ0b3RwX3R3b19mYWN0b3Jfb24iOnRydWUsImVsaWdpYmxlX2Zvcl9tdWx0aXBsZV90b3RwIjp0cnVlLCJvYmZ1c2NhdGVkX3Bob25lX251bWJlciI6IiIsIm9iZnVzY2F0ZWRfcGhvbmVfbnVtYmVyXzIiOiIiLCJ0d29fZmFjdG9yX2lkZW50aWZpZXIiOiI1SEhHODBZWjdlb3k0R0VncjgySXN3cjBWZVNGdDJ0blB2UzV1c3Qzc1pWOWx6eExpeVlsYUNsY2ltcDV1ZXRmIiwic2hvd19tZXNzZW5nZXJfY29kZV9vcHRpb24iOmZhbHNlLCJzaG93X25ld19sb2dpbl9zY3JlZW4iOnRydWUsInNob3dfdHJ1c3RlZF9kZXZpY2Vfb3B0aW9uIjp0cnVlLCJzaG91bGRfb3B0X2luX3RydXN0ZWRfZGV2aWNlX29wdGlvbiI6dHJ1ZSwicGVuZGluZ190cnVzdGVkX25vdGlmaWNhdGlvbiI6dHJ1ZSwic21zX25vdF9hbGxvd2VkX3JlYXNvbiI6bnVsbCwidHJ1c3RlZF9ub3RpZmljYXRpb25fcG9sbGluZ19ub25jZSI6Ik1qR2F0Z0NKSld0ZGVnaXptZnlGOGpRY3hMRzB3Z0NxR2RHMnoxSDY0dFFaa0Z3bG54dlhDcGJYYTF6V3gzOHIiLCJpc190cnVzdGVkX2RldmljZSI6ZmFsc2UsImRldmljZV9pZCI6ImFuZHJvaWQtM3ZuOTJ6YjRtZGkwMDAwMCIsInBob25lX3ZlcmlmaWNhdGlvbl9zZXR0aW5ncyI6eyJtYXhfc21zX2NvdW50IjoyLCJyZXNlbmRfc21zX2RlbGF5X3NlYyI6NjAsInJvYm9jYWxsX2NvdW50X2Rvd25fdGltZV9zZWMiOjMwLCJyb2JvY2FsbF9hZnRlcl9tYXhfc21zIjp0cnVlfX0sInBob25lX3ZlcmlmaWNhdGlvbl9zZXR0aW5ncyI6eyJtYXhfc21zX2NvdW50IjoyLCJyZXNlbmRfc21zX2RlbGF5X3NlYyI6NjAsInJvYm9jYWxsX2NvdW50X2Rvd25fdGltZV9zZWMiOjMwLCJyb2JvY2FsbF9hZnRlcl9tYXhfc21zIjp0cnVlfSwic3RhdHVzIjoiZmFpbCIsImVycm9yX3R5cGUiOiJ0d29fZmFjdG9yX3JlcXVpcmVkIn0iKSwgKGJrLmFjdGlvbi5tYXAuTWFrZSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAic2hvdWxkX2Rpc21pc3NfbG9hZGluZyIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsIChiay5hY3Rpb24uYm9vbC5Db25zdCwgdHJ1ZSkpKSkp",
  "base64",
).toString("ascii");

const success = Buffer.from(
  "IChiay5hY3Rpb24uY29yZS5UYWtlTGFzdCwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEpLCAoYmsuYWN0aW9uLnFwbC5NYXJrZXJBbm5vdGF0ZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDIyOTM3ODUpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMCksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImxvZ2luX3R5cGUiLCAibG9naW5fc291cmNlIiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgIlBhc3N3b3JkIiwgIkxvZ2luIikpKSwgKGJrLmFjdGlvbi5xcGwuTWFya2VyUG9pbnQsIChiay5hY3Rpb24uaTMyLkNvbnN0LCAyMjkzNzg1KSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDApLCAic3VjY2Vzc19yZXNwb25zZSIsIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTM3NDcpKSksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAxKSwgKGJrLmFjdGlvbi5jb3JlLk1hdGNoLCAoYmsuYWN0aW9uLmNhYS5HZXRTUElFbGlnaWJpbGl0eSwgIjM2NzgwNzQ0ODI4IiksIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgKGJrLmFjdGlvbi5jb3JlLlBhdHRlcm4sIChiay5hY3Rpb24uYm9vbC5Db25zdCwgdHJ1ZSksIChiay5hY3Rpb24uY29yZS5GdW5jQ29uc3QsIChiay5hY3Rpb24uZnguUHVzaFN5bmNTY3JlZW4sIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTYyMzcpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMzUpLCAiIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgImFwcF9pZCIpLCAoYmsuYWN0aW9uLmFycmF5Lk1ha2UsICJjb20uYmxva3Mud3d3LmNhYS5sb2dpbi5zYXZlLWNyZWRlbnRpYWxzIikpIiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDQwKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDcxOTk4MzIwMCksIChiay5hY3Rpb24uaTMyLkNvbnN0LCAzOCksICI0N3BqenQ6MiIsIChiay5hY3Rpb24uaTMyLkNvbnN0LCA0MSksICJjb20uYmxva3Mud3d3LmNhYS5sb2dpbi5zYXZlLWNyZWRlbnRpYWxzIiksIChiay5hY3Rpb24uYmxva3MuUGFyc2VIb2lzdGVkUGF5bG9hZCwgIjI1NDgxNDMyOTAwMDA0IiksIChiay5hY3Rpb24udHJlZS5NYWtlLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMTYwODcpKSkpKSksIChiay5hY3Rpb24uY29yZS5EZWZhdWx0LCAoYmsuYWN0aW9uLmNvcmUuRnVuY0NvbnN0LCAoYmsuYWN0aW9uLmNhYS5IYW5kbGVMb2dpblJlc3BvbnNlLCAoYmsuYWN0aW9uLnRyZWUuTWFrZSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDE1OTQyKSwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM1KSwgInsibG9naW5fcmVzcG9uc2UiOiJ7XCJsb2dnZWRfaW5fdXNlclwiOntcImhhc19hbm9ueW1vdXNfcHJvZmlsZV9waWN0dXJlXCI6dHJ1ZSxcInN1cGVydmlzaW9uX2luZm9cIjp7XCJpc19lbGlnaWJsZV9mb3Jfc3VwZXJ2aXNpb25cIjpmYWxzZSxcImlzX3N1cGVydmlzZWRfdXNlclwiOmZhbHNlLFwiaXNfc3VwZXJ2aXNlZF9vcl9pbl9jb29sZG93blwiOmZhbHNlLFwiaGFzX2d1YXJkaWFuXCI6ZmFsc2UsXCJpc19ndWFyZGlhbl91c2VyXCI6ZmFsc2UsXCJpc19zdXBlcnZpc2VkX2J5X3ZpZXdlclwiOmZhbHNlLFwiaXNfZ3VhcmRpYW5fb2Zfdmlld2VyXCI6ZmFsc2UsXCJoYXNfc3RhdGVkX2FnZVwiOnRydWUsXCJzY3JlZW5fdGltZV9kYWlseV9saW1pdF9zZWNvbmRzXCI6bnVsbCxcInNjcmVlbl90aW1lX2RhaWx5X2xpbWl0X2Rlc2NyaXB0aW9uXCI6bnVsbCxcImZjX3VybFwiOlwiaHR0cHM6XC9cL2ZhbWlseWNlbnRlci5pbnN0YWdyYW0uY29tXC9kYXNoYm9hcmRcL1wiLFwicXVpZXRfdGltZV9pbnRlcnZhbHNcIjpudWxsLFwiaXNfcXVpZXRfdGltZV9mZWF0dXJlX2VuYWJsZWRcIjpmYWxzZSxcImRhaWx5X3RpbWVfbGltaXRfd2l0aG91dF9leHRlbnNpb25zX3NlY29uZHNcIjpudWxsLFwibGF0ZXN0X3ZhbGlkX3RpbWVfbGltaXRfZXh0ZW5zaW9uX3JlcXVlc3RcIjpudWxsfSxcImlzX3N1cGVydmlzaW9uX2ZlYXR1cmVzX2VuYWJsZWRcIjp0cnVlLFwibGlrZWRfY2xpcHNfY291bnRcIjoxLFwiZmJpZF92MlwiOjE3ODQxNDM2NzQ0ODQ3NTkzLFwidGV4dF9wb3N0X2FwcF90YWtlX2FfYnJlYWtfc2V0dGluZ1wiOjAsXCJpbnRlcm9wX21lc3NhZ2luZ191c2VyX2ZiaWRcIjoxNzg0MjE1MDY4NTIyNDgyOSxcImlzX3VzaW5nX3VuaWZpZWRfaW5ib3hfZm9yX2RpcmVjdFwiOmZhbHNlLFwiYml6X3VzZXJfaW5ib3hfc3RhdGVcIjowLFwic2hvd19pbnNpZ2h0c190ZXJtc1wiOmZhbHNlLFwibmFtZXRhZ1wiOntcIm1vZGVcIjowLFwiZ3JhZGllbnRcIjowLFwiZW1vamlfY29sb3JcIjotMTY3NzcyMTYsXCJzZWxmaWVfc3RpY2tlclwiOjAsXCJlbW9qaVwiOlwiXHVkODNkXHVkZTAwXCJ9LFwiYWxsb3dlZF9jb21tZW50ZXJfdHlwZVwiOlwiZm9sbG93ZXJcIixcImhhc19wbGFjZWRfb3JkZXJzXCI6ZmFsc2UsXCJyZWVsX2F1dG9fYXJjaGl2ZVwiOlwib25cIixcInRvdGFsX2lndHZfdmlkZW9zXCI6MCxcImNhbl9ib29zdF9wb3N0XCI6dHJ1ZSxcImNhbl9zZWVfb3JnYW5pY19pbnNpZ2h0c1wiOnRydWUsXCJ3YV9hZGRyZXNzYWJsZVwiOmZhbHNlLFwid2FfZWxpZ2liaWxpdHlcIjowLFwiY2FuX2hpZGVfY2F0ZWdvcnlcIjp0cnVlLFwiY2FuX2hpZGVfcHVibGljX2NvbnRhY3RzXCI6dHJ1ZSxcInNob3VsZF9zaG93X2NhdGVnb3J5XCI6dHJ1ZSxcImNhdGVnb3J5X2lkXCI6MTg3NzE0NTU3OTI1ODc0LFwiaXNfY2F0ZWdvcnlfdGFwcGFibGVcIjp0cnVlLFwic2hvdWxkX3Nob3dfcHVibGljX2NvbnRhY3RzXCI6dHJ1ZSxcImlzX2J1c2luZXNzXCI6ZmFsc2UsXCJwcm9mZXNzaW9uYWxfY29udmVyc2lvbl9zdWdnZXN0ZWRfYWNjb3VudF90eXBlXCI6MixcImFjY291bnRfdHlwZVwiOjMsXCJoYXNfb25ib2FyZGVkX3RvX3RleHRfcG9zdF9hcHBcIjp0cnVlLFwidGV4dF9wb3N0X2FwcF9qb2luZXJfbnVtYmVyXCI6OTEwNTIyODksXCJwa1wiOjM2NzgwNzQ0ODI4LFwicGtfaWRcIjpcIjM2NzgwNzQ0ODI4XCIsXCJ1c2VybmFtZVwiOlwib25lYXlhaC5pZFwiLFwiZnVsbF9uYW1lXCI6XCJPbmUgRGF5IE9uZSBBeWFoXCIsXCJpc19wcml2YXRlXCI6ZmFsc2UsXCJpc192ZXJpZmllZFwiOmZhbHNlLFwicHJvZmlsZV9waWNfdXJsXCI6XCJodHRwczpcL1wvaW5zdGFncmFtLmZjZ2s2LTIuZm5hLmZiY2RuLm5ldFwvdlwvdDUxLjI4ODUtMTlcLzQ0ODg0MjE4XzM0NTcwNzEwMjg4MjUxOV8yNDQ2MDY5NTg5NzM0MzI2MjcyX24uanBnP19uY19odD1pbnN0YWdyYW0uZmNnazYtMi5mbmEuZmJjZG4ubmV0XFx1MDAyNl9uY19jYXQ9MVxcdTAwMjZfbmNfb2hjPXM3WE80YmNZY2VZQVhfVWFPcE9cXHUwMDI2ZWRtPUFBQUFBQUFCQUFBQVxcdTAwMjZjY2I9Ny01XFx1MDAyNmlnX2NhY2hlX2tleT1ZVzV2Ym5sdGIzVnpYM0J5YjJacGJHVmZjR2xqLjItY2NiNy01XFx1MDAyNm9oPTAwX0FmRFNEdU9KTWtvWGluYXFKVHVmMkxRNUNLX2FwY3VKRFZaWUZueUtOQ1VxRHdcXHUwMDI2b2U9NjRCMTU4NEZcIixcImlzX2NhbGxfdG9fYWN0aW9uX2VuYWJsZWRcIjpmYWxzZSxcImNhdGVnb3J5XCI6XCJSZWxpZ2lvdXMgb3JnYW5pemF0aW9uXCIsXCJhY2NvdW50X2JhZGdlc1wiOltdLFwidGhpcmRfcGFydHlfZG93bmxvYWRzX2VuYWJsZWRcIjowLFwiYWxsb3dfY29udGFjdHNfc3luY1wiOnRydWUsXCJwaG9uZV9udW1iZXJcIjpcIlwifSxcInNlc3Npb25fZmx1c2hfbm9uY2VcIjpudWxsLFwic3RhdHVzXCI6XCJva1wifSIsImhlYWRlcnMiOiJ7XCJJRy1TZXQtQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBJR1Q6MjpJRVVUT0tFTlwiLCBcIklHLVNldC1QYXNzd29yZC1FbmNyeXB0aW9uLUtleS1JZFwiOiBcIjY1XCIsIFwiSUctU2V0LVBhc3N3b3JkLUVuY3J5cHRpb24tUHViLUtleVwiOiBcIkxTMHRMUzFDUlVkSlRpQlFWVUpNU1VNZ1MwVlpMUzB0TFMwS1RVbEpRa2xxUVU1Q1oydHhhR3RwUnpsM01FSkJVVVZHUVVGUFEwRlJPRUZOU1VsQ1EyZExRMEZSUlVFM1RsSTRWbnBCVEZveWNEaDZRbGxTTVdKWmRnb3pkbUoxTVdkSGJHTXpjV3d5YVdWRk5GbHBTU3RSVVZWeGRXbFJSRFZXTTJKeVZ5OWFjRVU0VVhwcE1XWnFNV3AyYlZNMVlWTTRabkpQUTA5cVEwMTBDbGRqZERWcGJGZHFXV1p2TTJsWk0ybG1iVVZuTlN0b01GaG1PVWxSY0d0V1YwTnRSbmRWVjNwMVNFZzFjMkZwWjNSalFuWkZOVlpGVTFRMVUzRm1lR3NLZDNGS1ZUUmtRbWd5ZUROeVYzbEhaQ3N5Y1ZCTVREVlpWVFpuYzNOck5UTXJhV2RaWW1weFUzbFVTRmx2ZVZKSWFUWlhZMFV5T0VWclVrRmlLelY2T0FwUVMxWjNVVGxwZVVOSE0yOURka1YzUjFnMVZWZDZWVVZQVEZrd2VXcFdVR3RHUzNGdWJXaGFXVlZHZVhNdlJXVmhURTVQZGl0dE9FVlBPV1k0VDJGT0NtOUdOa1p4UjFvNU5YQlpja3hVUlhCall6aEJSa2RvVkdVeWIwVkJaRUZvVW5kUGVuWnFjMGM1WmtSNE1VZ3phak56VDFsMlR6aFBSVVpqYWk5eFZFNEtlRkZKUkVGUlFVSUtMUzB0TFMxRlRrUWdVRlZDVEVsRElFdEZXUzB0TFMwdENnPT1cIiwgXCJBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVyc1wiOiBcIlgtSUctU2V0LVdXVy1DbGFpbVwiLCBcIklHLVNldC1YLU1JRFwiOiBcIlpLdzZoQUFCQUFFeldhUlZPMzlYaU4xV1MwYjlcIiwgXCJYLUlHLVJlbG9hZC1Qcm94eS1SZXF1ZXN0LUluZm9cIjogXCJ7XFxcInJlcXVlc3RfaW5kZXhcXFwiOiAxNTcsIFxcXCJ2aWV3X25hbWVcXFwiOiBcXFwiTm9uZS5Ob25lXFxcIiwgXFxcInV1aWRcXFwiOiBcXFwiNDk1NDZjMmQ0Y2M1NGM2Y2IwZDdmZjYwYjg4OTdkN2RcXFwiLCBcXFwic2FuaXRpemVkX3BhdGhcXFwiOiBcXFwiXC9hY2NvdW50c1wvY2FhX2lnX2F1dGhlbnRpY2F0aW9uX3RocmlmdF9zZXJ2ZXJcL1xcXCJ9XCIsIFwiQ3Jvc3MtT3JpZ2luLU9wZW5lci1Qb2xpY3lcIjogXCJzYW1lLW9yaWdpbi1hbGxvdy1wb3B1cHM7cmVwb3J0LXRvPVxcXCJjb29wXFxcIlwiLCBcIngtZmItZW5kcG9pbnRcIjogXCJcIiwgXCJYLUZyYW1lLU9wdGlvbnNcIjogXCJTQU1FT1JJR0lOXCIsIFwiQ2FjaGUtQ29udHJvbFwiOiBcInByaXZhdGUsIG5vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlXCIsIFwiUHJhZ21hXCI6IFwibm8tY2FjaGVcIiwgXCJFeHBpcmVzXCI6IFwiU2F0LCAwMSBKYW4gMjAwMCAwMDowMDowMCBHTVRcIiwgXCJTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5XCI6IFwibWF4LWFnZT0zMTUzNjAwMFwiLCBcIlgtQ29udGVudC1UeXBlLU9wdGlvbnNcIjogXCJub3NuaWZmXCIsIFwiWC1Yc3MtUHJvdGVjdGlvblwiOiBcIjBcIiwgXCJpZy1zZXQtaWctdS1kcy11c2VyLWlkXCI6IDM2NzgwNzQ0ODI4LCBcImlnLXNldC1pZy11LXJ1clwiOiBcIlZMTFwiLCBcIkNyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3ktUmVwb3J0LU9ubHlcIjogXCJyZXF1aXJlLWNvcnA7cmVwb3J0LXRvPVxcXCJjb2VwXFxcIlwifSIsImNvb2tpZXMiOm51bGx9IiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM2KSwgIlBhc3N3b3JkIiwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDM4KSwgIkxvZ2luIiksIG51bGwsIChiay5hY3Rpb24uY29yZS5HZXRBcmcsIDApKSkpKSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgKGJrLmFjdGlvbi5pMzIuQ29uc3QsIDEpLCAoYmsuYWN0aW9uLmkzMi5Db25zdCwgMSksIChiay5hY3Rpb24ubWFwLk1ha2UsIChiay5hY3Rpb24uYXJyYXkuTWFrZSwgInNob3VsZF9kaXNtaXNzX2xvYWRpbmciKSwgKGJrLmFjdGlvbi5hcnJheS5NYWtlLCAoYmsuYWN0aW9uLmJvb2wuQ29uc3QsIGZhbHNlKSkpKQ==",
  "base64",
).toString("ascii");

describe("bloks", () => {
  it("is wrong username", () => {
    expect(bloks(wrongUsername).isFailed).to.equal(true);
  });

  it("is wrong password", () => {
    expect(bloks(wrongPassword).isFailed).to.equal(true);
  });

  it("is two factor", () => {
    expect(bloks(twoFactor).isTwoFactor).to.equal(true);
  });

  it("is success", () => {
    expect(bloks(success).isSuccess).to.equal(true);
  });
});
