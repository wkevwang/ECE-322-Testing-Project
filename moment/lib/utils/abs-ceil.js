"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = absCeil;
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}