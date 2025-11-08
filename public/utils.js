export function clamp(min, desire, max) {
  return Math.min(Math.max(min, desire), max);
}