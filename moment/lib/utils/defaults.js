"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = defaults;
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}