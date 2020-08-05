import { Equalness } from './equalness';
import { CheckUtils } from './check-utils';

class UniqueListException {
  constructor(public message: string) {}
}

/**
 * Store a unique list of items. All items must implement the
 * Equalness interface.
 */
export class UniqueList<T extends Equalness<T>> {

  elements: T[] = [];

  constructor() {}

  /**
   * Add a new item to this list.
   * 
   * If the item being added already exists, the resolveConflictsFn is used
   * to resolve the conflicts between the two items and the result is
   * stored in the list.
   * 
   * If the item being added already exists and resolveConflictsFn is not
   * provided, an exception will be thrown.
   * 
   * @throws exception if the argument is null or already exists
   */
  add(newElement: T, resolveConflictsFn?: (newElement: T, existingElement: T) => T): void {
    if (CheckUtils.isNull(newElement)) {
      throw new UniqueListException('You cannot add a null element to this list.');
    }
    if (this.contains(newElement)) {
      if (!CheckUtils.exists(resolveConflictsFn)) {
        throw new UniqueListException('The element you are trying to add already exists.');
      }
      const elementIndex = this.getIndex(newElement);
      const result = resolveConflictsFn!(newElement, this.elements[elementIndex]);
      if (CheckUtils.isNull(result)) {
        throw new UniqueListException('The result of resolveConflictsFn cannot be null.');
      }
      this.elements[elementIndex] = result;
    } else {
      this.elements.push(newElement)
    }
  }

  /**
   * Remove an item from this list.
   * @throws exception if the argument is null
   */
  remove(element: T): void {
    if (CheckUtils.isNull(element)) {
      throw new UniqueListException('Argument must not be null.');
    }
    this.elements = this.elements.filter((currentElement: T) =>
      !currentElement.isEqual(element));
  }

  /**
   * @returns the number of elements (length) in this list
   */
  length(): number {
    return this.elements.length;
  }

  /**
   * Iterates through the list of elements, calling the provided
   * callback for each one.
   */
  forEach(fn: (currentElement: T, index: number) => void): void {
    this.elements.forEach(fn);
  }

  /**
   * @returns true if this list contains the element, false otherwise.
   */
  contains(element: T): boolean {
    return CheckUtils.exists(this.elements.find((currentElement: T) =>
      currentElement.isEqual(element)));
  }

  // Internal
  private getIndex(element: T): number {
    return this.elements.findIndex((currentElement: T) => currentElement.isEqual(element));
  }
}
