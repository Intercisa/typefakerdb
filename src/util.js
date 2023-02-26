"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.buildInsertsInto = exports.buildValues = exports.asyncWriteFile = exports.randomIntFromInterval = exports.formatArray = exports.replaceApostrophe = exports.makeArray = exports.MARK_INSERT = exports.SUBJECT_INSERT = exports.STUDENT_INSERT = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
exports.STUDENT_INSERT = 10;
exports.SUBJECT_INSERT = 10;
exports.MARK_INSERT = 10;
function makeArray(length, generator) {
    return Array.from({ length: length }, generator);
}
exports.makeArray = makeArray;
function replaceApostrophe(input) {
    return input.replace("'", "''");
}
exports.replaceApostrophe = replaceApostrophe;
function formatArray(inputArr) {
    return inputArr.map(function (i) { return "'".concat(i, "'"); }).join(',');
}
exports.formatArray = formatArray;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomIntFromInterval = randomIntFromInterval;
function asyncWriteFile(filename, data) {
    return __awaiter(this, void 0, void 0, function () {
        var contents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fs_1.promises.writeFile((0, path_1.join)(__dirname, filename), data, {
                            flag: 'w'
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fs_1.promises.readFile((0, path_1.join)(__dirname, filename), 'utf-8')];
                case 2:
                    contents = _a.sent();
                    return [2 /*return*/, contents];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, 'Something went wrong'];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.asyncWriteFile = asyncWriteFile;
function buildValues(obj) {
    var key;
    var middle = '';
    var lastPart = ');';
    for (key in obj) {
        var value = obj[key];
        // console.log(typeof value);
        middle += "".concat(checkValOInstace(value), " ,");
    }
    console.log("".concat(middle).concat(lastPart));
}
exports.buildValues = buildValues;
function checkValOInstace(value) {
    if (value instanceof Date)
        return value.toISOString();
    if (value instanceof Array)
        return "ARRAY[".concat(formatArray(value), "]");
    return value;
}
function buildInsertsInto(obj, tableName) {
    var firstPart = "INSERT INTO ".concat(tableName, " (");
    var lastPart = ') VALUES (';
    var middlePart = '';
    var key;
    for (key in obj) {
        middlePart += "".concat(formatColumnName(key.toString()), ", ");
    }
    console.log("".concat(firstPart).concat(middlePart.substring(0, middlePart.length - 2)).concat(lastPart).concat(buildValues(obj)));
    ;
}
exports.buildInsertsInto = buildInsertsInto;
function formatColumnName(column) {
    var col = column;
    for (var i = 0; i < col.length; i++) {
        var ch = col[i];
        if (ch == ch.toUpperCase()) {
            col = col.replace(ch, "_".concat(ch.toLowerCase()));
        }
    }
    return col;
}