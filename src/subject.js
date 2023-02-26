"use strict";
exports.__esModule = true;
exports.getPreMadeSubjects = exports.toSubjectInsert = exports.createStudentSubject = exports.buildSubjectInserts = exports.subjectArray = void 0;
var faker_1 = require("@faker-js/faker");
var util_1 = require("./util");
var ID = 1;
var createRandomSubject = function () {
    return {
        id: ID++,
        name: faker_1.faker.helpers.arrayElement(['english', 'math', 'art', 'science', 'history', 'music', 'geography', 'PE']),
        tutor: faker_1.faker.name.fullName(),
        created: faker_1.faker.date.past(),
        updated: faker_1.faker.date.recent()
    };
};
exports.subjectArray = (0, util_1.makeArray)(util_1.SUBJECT_INSERT, createRandomSubject);
function buildSubjectInserts() {
    var values = exports.subjectArray.map(function (s) { return toSubjectValues(s); }).join(',\n ');
    return "INSERT INTO subjects (id, name, tutor, created, updated) VALUES \n".concat(values, ";");
}
exports.buildSubjectInserts = buildSubjectInserts;
function toSubjectValues(subject) {
    return "('".concat(subject.id, "', '").concat(subject.name, "', '").concat((0, util_1.replaceApostrophe)(subject.tutor), "', '").concat(subject.created.toISOString(), "', '").concat(subject.updated.toISOString(), "')");
}
var createStudentSubject = function (studentId, subjectId) {
    return "INSERT INTO student_subject (student_id, subject_id, created) VALUES ('".concat(studentId, "', '").concat(subjectId, "', '").concat(faker_1.faker.date.recent().toISOString(), "');");
};
exports.createStudentSubject = createStudentSubject;
function toSubjectInsert(p) {
    return "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('".concat(p.id, "', '").concat(p.name, "', '").concat((0, util_1.replaceApostrophe)(p.tutor), "', '").concat(p.created.toISOString(), "', '").concat(p.updated.toISOString(), "');");
}
exports.toSubjectInsert = toSubjectInsert;
function getPreMadeSubjects() {
    return [
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('1', 'PE', 'Glenn Torphy', '2022-12-18T07:11:47.780Z', '2023-02-24T20:38:17.909Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('2', 'science', 'Maria Runolfsdottir', '2022-02-26T21:53:50.008Z', '2023-02-24T13:28:46.193Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('3', 'math', 'Claude Giancarlo', '2022-02-26T21:13:50.008Z', '2023-02-24T13:28:36.193Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('4', 'art', 'Claire Parisian', '2022-07-27T18:04:23.092Z', '2023-02-24T19:50:47.770Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('5', 'science', 'Theresa Purdy', '2022-03-22T07:35:31.048Z', '2023-02-25T11:06:37.630Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('6', 'history', 'Candace Kuhlman', '2022-12-24T00:50:56.142Z', '2023-02-25T03:15:03.861Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('7', 'geography', 'Ira Kuhn', '2023-01-18T15:13:46.931Z', '2023-02-24T15:42:50.809Z');",
        "INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('8', 'english', 'Joel Lindgren', '2022-06-23T13:38:53.973Z', '2023-02-25T12:12:12.527Z');"
    ];
}
exports.getPreMadeSubjects = getPreMadeSubjects;
