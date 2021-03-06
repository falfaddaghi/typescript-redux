/* */ 
"format cjs";
import baseIteratee from './_baseIteratee';
import baseSortedUniqBy from './_baseSortedUniqBy';

/**
 * This method is like `_.uniqBy` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
 * // => [1.1, 2.3]
 */
function sortedUniqBy(array, iteratee) {
  return (array && array.length)
    ? baseSortedUniqBy(array, baseIteratee(iteratee))
    : [];
}

export default sortedUniqBy;
