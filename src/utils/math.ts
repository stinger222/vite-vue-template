/**
 * @fileoverview Math-related utils.
 */

export const randInt = (min: number, max: number, step: number = 1): number => {
  const range = Math.floor((max - min) / step) + 1
  return min + step * Math.floor(Math.random() * range)
}
