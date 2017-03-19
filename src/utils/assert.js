require('better-assert/better-assert-browser');

export function assertType(type, val) {
  if (typeof type === "string") {
    window.assert(typeof val === type);
  } else {
    window.assert(val instanceof type);
  }

  return val;
}
