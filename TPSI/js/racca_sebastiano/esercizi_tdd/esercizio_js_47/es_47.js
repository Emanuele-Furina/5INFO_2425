/** @param {any[]} l @param {number} n */
export const sub_arr = (l, n) => {
    return n < 0 ? [] : l.slice(0, n);
};