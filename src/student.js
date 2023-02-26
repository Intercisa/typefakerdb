"use strict";
exports.__esModule = true;
exports.toStudentInsert = exports.studentArray = exports.createRandomStudent = void 0;
var faker_1 = require("@faker-js/faker");
var util_1 = require("./util");
var ID = 1;
var createRandomStudent = function () {
    return {
        id: ID++,
        name: faker_1.faker.name.firstName(),
        surname: faker_1.faker.name.lastName(),
        dateOfBirth: faker_1.faker.date.birthdate(),
        phoneNumbers: (0, util_1.makeArray)((0, util_1.randomIntFromInterval)(1, 3), faker_1.faker.phone.number),
        primarySkill: faker_1.faker.helpers.arrayElement(['Math', 'Grammar', 'PE']),
        created: faker_1.faker.date.past(),
        updated: faker_1.faker.date.recent()
    };
};
exports.createRandomStudent = createRandomStudent;
exports.studentArray = (0, util_1.makeArray)(util_1.STUDENT_INSERT, exports.createRandomStudent);
function toStudentInsert(student) {
    return "INSERT INTO students (id, name, surname, date_of_birth, phone_numbers, primary_skill, created, updated) VALUES ('".concat(student.id, "', '").concat((0, util_1.replaceApostrophe)(student.name), "', '").concat((0, util_1.replaceApostrophe)(student.surname), "', '").concat(student.dateOfBirth.toISOString(), "', ARRAY[").concat((0, util_1.formatArray)(student.phoneNumbers), "], '").concat(student.primarySkill, "', '").concat(student.created.toISOString(), "', '").concat(student.updated.toISOString(), "');");
}
exports.toStudentInsert = toStudentInsert;
