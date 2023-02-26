import { faker } from "@faker-js/faker";
import {makeArray, SUBJECT_INSERT, replaceApostrophe} from './util'

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

export const createStudentSubject: (studentId: number, subjectId: number) => string = (studentId: number, subjectId: number) => {
    return `INSERT INTO student_subject (student_id, subject_id, created) VALUES ('${studentId}', '${subjectId}', '${faker.date.recent().toISOString()}');`
}

export function toSubjectInsert(p: Subject): string {
    return `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('${p.id}', '${p.name}', '${replaceApostrophe(p.tutor)}', '${p.created.toISOString()}', '${p.updated.toISOString()}');`;
}

export function getPreMadeSubjects(): string[] {
    return[
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('1', 'PE', 'Glenn Torphy', '2022-12-18T07:11:47.780Z', '2023-02-24T20:38:17.909Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('2', 'science', 'Maria Runolfsdottir', '2022-02-26T21:53:50.008Z', '2023-02-24T13:28:46.193Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('3', 'math', 'Claude Giancarlo', '2022-02-26T21:13:50.008Z', '2023-02-24T13:28:36.193Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('4', 'art', 'Claire Parisian', '2022-07-27T18:04:23.092Z', '2023-02-24T19:50:47.770Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('5', 'science', 'Theresa Purdy', '2022-03-22T07:35:31.048Z', '2023-02-25T11:06:37.630Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('6', 'history', 'Candace Kuhlman', '2022-12-24T00:50:56.142Z', '2023-02-25T03:15:03.861Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('7', 'geography', 'Ira Kuhn', '2023-01-18T15:13:46.931Z', '2023-02-24T15:42:50.809Z');`,
        `INSERT INTO subjects (id, name, tutor, created, updated) VALUES ('8', 'english', 'Joel Lindgren', '2022-06-23T13:38:53.973Z', '2023-02-25T12:12:12.527Z');`
    ];
}