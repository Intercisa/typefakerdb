import { buildStudentInserts} from './student';
import { createStudentSubject, buildSubjectInserts} from './subject';
import { examArray, buildExamInserts, ExamResult } from './examresult';
import { randomIntFromInterval, asyncWriteFile, STUDENT_INSERT, SUBJECT_INSERT} from './util'

let studentSubjectInserts: string[] = [];

for (let i = 0; i < STUDENT_INSERT; i++) {
    studentSubjectInserts.push(createStudentSubject(randomIntFromInterval(1, STUDENT_INSERT), randomIntFromInterval(1, SUBJECT_INSERT)));
}

 const exams: ExamResult[] = examArray.map(exam => {
    return {
         ...exam,
         studentId: randomIntFromInterval(1, STUDENT_INSERT),
         subjectId: randomIntFromInterval(1, SUBJECT_INSERT)
     }
 });

const arrayToWrite: string[] = [buildSubjectInserts(), buildStudentInserts(), ...studentSubjectInserts, buildExamInserts(exams)];
asyncWriteFile('./inserts.sql', arrayToWrite.join('\n'));
