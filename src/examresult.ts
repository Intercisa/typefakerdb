import { faker } from "@faker-js/faker";
import {makeArray, STUDENT_INSERT, SUBJECT_INSERT, randomIntFromInterval, MARK_INSERT} from './util';

type Mark = 'A' | 'B' | 'C'| 'D' | 'E' | 'F'; 
let ID: number = 1; 

export interface ExamResult {
    id:number;
    studentId: number;
    subjectId: number; 
    mark: Mark;
    created: Date
}

export const createExamResult: () => ExamResult = () => {
    return {
        id: ID++,
        studentId: randomIntFromInterval(1, STUDENT_INSERT),
        subjectId: randomIntFromInterval(1, SUBJECT_INSERT),
        mark: faker.helpers.arrayElement(['A','B' , 'C', 'D' , 'E' , 'F']),
        created: faker.date.past()
    }
}

export const examArray = makeArray(MARK_INSERT, createExamResult);

export function buildExamInserts(){
    const values = examArray.map(s => toExamValues(s)).join(',\n ');
    return `INSERT INTO exam_result (id, student_id, subject_id, mark, created) VALUES \n${values};`
}

function toExamValues(exam: ExamResult): string {
    return `('${exam.id}', '${exam.studentId}', '${exam.subjectId}', '${exam.mark}', '${exam.created.toISOString()}')`;
}
