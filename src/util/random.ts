/**
 * Returns a number between zero and max
 *
 * @export
 * @param {number} max
 */
export function randrange(max: number): number {
  return Math.floor(Math.random() * max);
}

/**
 * Shuffles array.
 * @param {Array} a items An array containing the items.
 */
export function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Returns an array of incrementing numbers from 0 to length.
 *
 * @export
 * @param {number} length
 * @returns {number[]}
 */
export function indexArray(length: number): number[] {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
}

/**
 * Returns N random elements from an array
 *
 * @export
 * @template T
 * @param {T[]} array
 * @param {number} [length=1]
 * @returns {T[]}
 */
export function selectRandom<T>(array: T[], length: number = 1): T[] {
  var shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(array.length, length));
}
