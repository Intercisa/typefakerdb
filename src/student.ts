import { faker } from "@faker-js/faker";
import {makeArray, STUDENT_INSERT, formatArray, randomIntFromInterval, replaceApostrophe} from './util';

type Skills = 'Math' | 'Grammar' | 'PE';
let ID: number = 1; 

export interface Student {
    id: number;
    name: string;
    surname:string;
    dateOfBirth: Date;
    phoneNumbers: string[];
    primarySkill: Skills;
    created: Date;
    updated: Date;
}

export const createRandomStudent: () => Student = () => {
    return {
        id: ID++,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        dateOfBirth: faker.date.birthdate(),
        phoneNumbers: makeArray(randomIntFromInterval(1, 3), faker.phone.number),
        primarySkill: faker.helpers.arrayElement(['Math', 'Grammar','PE']),
        created: faker.date.past(),
        updated: faker.date.recent(),
    }
}

export const studentArray = makeArray(STUDENT_INSERT, createRandomStudent);

export function toStudentInsert(student: Student): string {
    return `INSERT INTO students (id, name, surname, date_of_birth, phone_numbers, primary_skill, created, updated) VALUES ('${student.id}', '${replaceApostrophe(student.name)}', '${replaceApostrophe(student.surname)}', '${student.dateOfBirth.toISOString()}', ARRAY[${formatArray(student.phoneNumbers)}], '${student.primarySkill}', '${student.created.toISOString()}', '${student.updated.toISOString()}');`;
}
