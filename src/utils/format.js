export function duration(value) {
  let hrs = Math.floor(value / 60);
  let mins = value % 60;

  let shrs = hrs ? `${hrs}h` : '';
  let smins = mins ? `${mins}min` : '';

  return shrs + ((!!shrs&&!!mins) ? ' ' : '') + smins;
}
