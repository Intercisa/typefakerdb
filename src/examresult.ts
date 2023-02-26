import { faker } from "@faker-js/faker";
import {makeArray, MARK_INSERT} from './util'

type Mark = 'A' | 'B' | 'C'| 'D' | 'E' | 'F'; 
let ID: number = 1; 

export interface ExamResult {
    id:number;
    studentId?: number;
    subjectId?: number; 
    mark: Mark;
    created: Date
}

export const createExamResult: () => ExamResult = () => {
    return {
        id: ID++,
        mark: faker.helpers.arrayElement(['A','B' , 'C', 'D' , 'E' , 'F']),
        created: faker.date.past()
    }
}

export const examArray = makeArray(MARK_INSERT, createExamResult);

export function toExamInsert(p: ExamResult): string {
    return `INSERT INTO exam_result (id, student_id, subject_id, mark, created) VALUES ('${p.id}', '${p.studentId}', '${p.subjectId}', '${p.mark}', '${p.created.toISOString()}')`;
}


export function buildExamInserts(exams: ExamResult[]){
    const values = exams.map(s => toExamValues(s)).join(',\n ');
    return `INSERT INTO exam_result (id, student_id, subject_id, mark, created) VALUES \n${values};`
}

export function toExamValues(exam: ExamResult): string {
    return `('${exam.id}', '${exam.studentId}', '${exam.subjectId}', '${exam.mark}', '${exam.created.toISOString()}')`;
}
