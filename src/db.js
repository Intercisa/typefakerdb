"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var student_1 = require("./student");
var subject_1 = require("./subject");
var examresult_1 = require("./examresult");
var util_1 = require("./util");
var subjects = subject_1.subjectArray.map(function (subject) { return (0, subject_1.toSubjectInsert)(subject); });
var studentInserts = student_1.studentArray.map(function (student) { return (0, student_1.toStudentInsert)(student); });
var studentSubjectInserts = [];
for (var i = 0; i < util_1.STUDENT_INSERT; i++) {
    studentSubjectInserts.push((0, subject_1.createStudentSubject)((0, util_1.randomIntFromInterval)(1, util_1.STUDENT_INSERT), (0, util_1.randomIntFromInterval)(1, util_1.SUBJECT_INSERT)));
}
var examInserts = examresult_1.examArray.map(function (exam) {
    return __assign(__assign({}, exam), { studentId: (0, util_1.randomIntFromInterval)(1, util_1.STUDENT_INSERT), subjectId: (0, util_1.randomIntFromInterval)(1, util_1.SUBJECT_INSERT) });
}).map(function (exam) { return (0, examresult_1.toExamInsert)(exam); });
var exams = examresult_1.examArray.map(function (exam) {
    return __assign(__assign({}, exam), { studentId: (0, util_1.randomIntFromInterval)(1, util_1.STUDENT_INSERT), subjectId: (0, util_1.randomIntFromInterval)(1, util_1.SUBJECT_INSERT) });
});
// const arrayToWrite: string[] = [...subjects, ...studentInserts, ...studentSubjectInserts, ...examInserts];
var arrayToWrite = __spreadArray(__spreadArray([(0, subject_1.buildSubjectInserts)(), (0, student_1.buildStudentInserts)()], studentSubjectInserts, true), [(0, examresult_1.buildExamInserts)(exams)], false);
(0, util_1.asyncWriteFile)('./inserts.sql', arrayToWrite.join('\n'));
