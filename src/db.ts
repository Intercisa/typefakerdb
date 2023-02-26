import { buildStudentInserts} from './student';
import { buildSubjectInserts, buildStudentSubjectInserts} from './subject';
import { buildExamInserts } from './examresult';
import { asyncWriteFile } from './util';

const arrayToWrite: string[] = [buildSubjectInserts(), buildStudentInserts(), buildStudentSubjectInserts(), buildExamInserts()];
asyncWriteFile('./inserts.sql', arrayToWrite.join('\n'));
