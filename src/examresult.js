"use strict";
exports.__esModule = true;
exports.toExamInsert = exports.examArray = exports.createExamResult = void 0;
var faker_1 = require("@faker-js/faker");
var util_1 = require("./util");
var ID = 1;
var createExamResult = function () {
    return {
        id: ID++,
        mark: faker_1.faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']),
        created: faker_1.faker.date.past()
    };
};
exports.createExamResult = createExamResult;
exports.examArray = (0, util_1.makeArray)(util_1.MARK_INSERT, exports.createExamResult);
function toExamInsert(p) {
    return "INSERT INTO exam_result (id, student_id, subject_id, mark, created) VALUES ('".concat(p.id, "', '").concat(p.studentId, "', '").concat(p.subjectId, "', '").concat(p.mark, "', '").concat(p.created.toISOString(), "');");
}
exports.toExamInsert = toExamInsert;
