import { promises as fsPromises } from 'fs';
import { join } from 'path';


export  const STUDENT_INSERT:number = 100;
export  const SUBJECT_INSERT:number = 100;
export  const MARK_INSERT:number = 100;

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
