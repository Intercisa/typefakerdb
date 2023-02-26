import { studentArray, toStudentInsert} from './student';
import { createStudentSubject, subjectArray, toSubjectInsert} from './subject';
import { examArray, toExamInsert } from './examresult';
import { randomIntFromInterval, asyncWriteFile, buildValues, buildInsertsInto, STUDENT_INSERT, SUBJECT_INSERT} from './util'


const subjects = subjectArray.map(subject => toSubjectInsert(subject));
const studentInserts = studentArray.map(student => toStudentInsert(student));
let studentSubjectInserts: string[] = [];

for (let i = 0; i < STUDENT_INSERT; i++) {
    studentSubjectInserts.push(createStudentSubject(randomIntFromInterval(1, STUDENT_INSERT), randomIntFromInterval(1, SUBJECT_INSERT)));
}

const examInserts: string[] = examArray.map(exam => {
    return {
         ...exam,
         studentId: randomIntFromInterval(1, STUDENT_INSERT),
         subjectId: randomIntFromInterval(1, SUBJECT_INSERT)
     }
 }).map(exam => toExamInsert(exam))


const arrayToWrite: string[] = [...subjects, ...studentInserts, ...studentSubjectInserts, ...examInserts];


studentArray.forEach(sub => buildInsertsInto(sub, 'Tablename'));

// asyncWriteFile('./inserts.sql', arrayToWrite.join('\n'));