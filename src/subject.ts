import { faker } from "@faker-js/faker";
import {makeArray, SUBJECT_INSERT, replaceApostrophe, STUDENT_INSERT, randomIntFromInterval} from './util';

export type SubjectName = 'english'| 'math' | 'art' | 'science' | 'history' | 'music' | 'geography'| 'PE';
let ID: number = 1; 

export interface Subject {
    id: number;
    name: string;
    tutor: string;
    created: Date;
    updated: Date;
}

const createRandomSubject: () => Subject = () => {
    return {
        id: ID++,
        name: faker.helpers.arrayElement(['english', 'math', 'art', 'science', 'history', 'music', 'geography', 'PE']),
        tutor: faker.name.fullName(),
        created: faker.date.past(),
        updated: faker.date.recent()
    }
}

export const subjectArray = makeArray(SUBJECT_INSERT, createRandomSubject);

export interface StudentSubject {
        studentId?: number;
        subjectId?: number; 
        created: Date
}

export function buildSubjectInserts(){
    const values = subjectArray.map(s => toSubjectValues(s)).join(',\n ');
    return `INSERT INTO subjects (id, name, tutor, created, updated) VALUES \n${values};`
}

function toSubjectValues(subject: Subject): string {
    return `('${subject.id}', '${subject.name}', '${replaceApostrophe(subject.tutor)}', '${subject.created.toISOString()}', '${subject.updated.toISOString()}')`;
}

const createStudentSubject: (studentId: number, subjectId: number) => string = (studentId: number, subjectId: number) => {
    return `('${studentId}', '${subjectId}', '${faker.date.recent().toISOString()}')`
}

export function buildStudentSubjectInserts(): string{
    let studentSubjectValues: string[] = [];
    
    for (let i = 0; i < STUDENT_INSERT; i++) {
        studentSubjectValues.push(createStudentSubject(randomIntFromInterval(1, STUDENT_INSERT), randomIntFromInterval(1, SUBJECT_INSERT)));
    }

    return `INSERT INTO student_subject (student_id, subject_id, created) VALUES \n${studentSubjectValues.join(',\n ')};`
}