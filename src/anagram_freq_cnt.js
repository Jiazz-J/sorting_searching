/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const charAndCount = new Map();

    for (let ch of s) {


        const val = charAndCount.get(ch)

        charAndCount.set(ch, (val || 0) + 1);

    }

    for (let ch of t) {

        const val = charAndCount.get(ch);

        if (!val) {
            return false;
        } else {
            charAndCount.set(ch, val - 1);
        }




    }




    return true;


};