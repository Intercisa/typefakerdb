import { promises as fsPromises } from 'fs';
import { join } from 'path';


export  const STUDENT_INSERT:number = 10;
export  const SUBJECT_INSERT:number = 10;
export  const MARK_INSERT:number = 10;

export function makeArray<T>(length: number, generator: () => T): T[] {
    return Array.from({ length }, generator)
}

export function replaceApostrophe(input: string): string {
  return input.replace("'", "''");
}

export function formatArray<T>(inputArr: T[]): string {
    return inputArr.map(i => `'${i}'`).join(',');
}


export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export async function asyncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );

    return contents;
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
}

export function buildValues<T>(obj: T){
  let key: keyof T;
  let middle: string = '';
  const lastPart = ');';
  for(key in obj){

    const value = obj[key];
    // console.log(typeof value);
    middle += `${checkValOInstace(value)} ,`
  }
   console.log(`${middle}${lastPart}`)
}

function checkValOInstace(value: any){
  if(value instanceof Date) return value.toISOString();
  if(value instanceof Array) return `ARRAY[${formatArray(value)}]`;
  return value;
}

export function buildInsertsInto<T>(obj: T, tableName: string){
  const firstPart = `INSERT INTO ${tableName} (`;
  const lastPart = ') VALUES (';
  let middlePart: string = '';

  let key: keyof T;
  for(key in obj){
    middlePart += `${formatColumnName(key.toString())}, `
  }

  console.log(`${firstPart}${middlePart.substring(0, middlePart.length - 2)}${lastPart}${buildValues(obj)}`);
  ;
}

function formatColumnName(column: string){
  let col = column;
  for (let i = 0; i < col.length; i++) {
    let ch = col[i];
    if (ch == ch.toUpperCase()) {
      col = col.replace(ch, `_${ch.toLowerCase()}`)
     }
  }
  return col;
}
