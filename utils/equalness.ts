/**
 * Check for equalness between two related object
 */
export interface Equalness<T> {
  isEqual(other: Equalness<T>): boolean;
}
