"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookieResponse = exports.expriresAT = exports.oneWeek = exports.omit = void 0;
const omit = (object, fields) => {
    const newObj = { ...object };
    for (let index = 0; index < fields.length; index++) {
        if (fields[index] in object) {
            delete newObj[fields[index]];
        }
    }
    return newObj;
};
exports.omit = omit;
exports.oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 ngày tính bằng miligiây
exports.expriresAT = new Date(Date.now() + exports.oneWeek);
const setCookieResponse = (res, 
// expires: number = oneWeek,
name, value, options) => {
    const expiryDate = new Date(Date.now() + exports.oneWeek);
    const maxAge = 24 * 60 * 60 * 7;
    res.cookie(name, value, {
        ...options,
        maxAge: exports.oneWeek,
        path: '/',
        sameSite: 'none',
        secure: true,
        httpOnly: false
    });
    return expiryDate;
};
exports.setCookieResponse = setCookieResponse;
