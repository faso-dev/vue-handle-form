export default {

    /**
     *
     * @param {string} value
     * @returns {boolean|boolean}
     */
    validateEmail(value) {
        return !this.empty(value) &&
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    },

    /**
     *
     * @param {string} value
     * @param {Number} length
     * @returns {boolean|boolean}
     */
    validatePassword(value, length){
        return this.empty(value) &&
            value >= length
    },

    /**
     *
     * @param {string} value
     * @returns {boolean}
     */
    empty(value) {
        return value <= 0
    }
}