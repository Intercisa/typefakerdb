INSERT INTO subjects (id, name, tutor, created, updated) VALUES 
('1', 'art', 'Johnathan Witting', '2022-08-24T21:30:56.513Z', '2023-02-26T03:03:19.272Z'),
 ('2', 'english', 'Russell Kovacek', '2023-02-13T21:50:38.858Z', '2023-02-26T04:17:18.835Z'),
 ('3', 'science', 'Johnnie Schuster', '2022-07-31T20:14:21.279Z', '2023-02-26T07:38:31.855Z'),
 ('4', 'science', 'Jenny Schmitt', '2022-03-19T13:15:09.458Z', '2023-02-26T02:46:35.844Z'),
 ('5', 'history', 'Dr. Bobby Collins', '2022-12-17T04:59:48.440Z', '2023-02-25T14:55:48.600Z'),
 ('6', 'english', 'Christopher Block', '2022-03-01T04:37:57.528Z', '2023-02-25T19:08:06.482Z'),
 ('7', 'english', 'Dr. Kelli Bernier', '2022-06-04T10:01:31.584Z', '2023-02-25T17:21:39.904Z'),
 ('8', 'history', 'Bernard Bosco', '2022-05-26T17:57:03.117Z', '2023-02-25T13:15:30.618Z'),
 ('9', 'music', 'Mrs. Roderick Cassin', '2022-04-20T15:24:56.832Z', '2023-02-25T12:33:08.130Z'),
 ('10', 'art', 'Joan Koch', '2023-01-01T08:25:15.924Z', '2023-02-25T18:38:22.366Z');
INSERT INTO students (id, name, surname, date_of_birth, phone_numbers, primary_skill, created, updated) VALUES 
('1', 'Alana', 'Kessler', '1982-07-26T17:34:37.665Z', ARRAY['(561) 929-1173 x395','568.847.1867'], 'Math', '2022-09-18T07:00:36.254Z', '2023-02-26T02:00:51.670Z'),
 ('2', 'Georgette', 'Bogisich', '1960-07-16T05:28:25.222Z', ARRAY['662-992-1792 x814'], 'PE', '2022-09-20T05:47:01.151Z', '2023-02-25T16:31:52.460Z'),
 ('3', 'Beulah', 'Hackett', '1943-12-28T12:30:30.642Z', ARRAY['494.941.6048 x55584'], 'Math', '2023-02-06T11:43:38.592Z', '2023-02-25T19:11:53.038Z'),
 ('4', 'Denis', 'Mante', '1984-09-02T01:31:09.190Z', ARRAY['1-731-618-9114 x34713'], 'PE', '2022-07-24T07:56:56.098Z', '2023-02-25T10:11:24.392Z'),
 ('5', 'Victoria', 'Breitenberg', '1986-12-29T22:01:08.200Z', ARRAY['1-454-328-0381 x928'], 'PE', '2023-01-20T21:04:01.407Z', '2023-02-25T16:00:56.026Z'),
 ('6', 'Electa', 'Macejkovic', '1988-08-03T12:04:21.783Z', ARRAY['1-592-964-1786','1-961-970-9563 x352','(888) 935-6914 x2903'], 'Math', '2022-07-19T10:26:03.948Z', '2023-02-26T01:55:52.747Z'),
 ('7', 'Hank', 'Olson', '1984-03-11T09:29:45.897Z', ARRAY['972-726-6697 x4974','(918) 640-9480'], 'PE', '2022-03-12T08:33:33.959Z', '2023-02-25T14:48:36.203Z'),
 ('8', 'Aisha', 'Dicki', '2003-01-15T08:15:30.271Z', ARRAY['405.866.9702','218.852.7971 x3181','1-222-263-2059 x051'], 'PE', '2022-03-01T21:51:29.044Z', '2023-02-26T03:42:14.473Z'),
 ('9', 'Virgie', 'Keebler', '1960-04-27T11:40:03.703Z', ARRAY['377.349.3001 x6301'], 'PE', '2022-05-01T11:10:33.617Z', '2023-02-26T05:33:51.422Z'),
 ('10', 'Mireille', 'Corwin', '1957-07-24T01:30:32.285Z', ARRAY['918.367.9145 x485'], 'PE', '2022-04-13T19:53:21.550Z', '2023-02-25T08:39:46.447Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('10', '2', '2023-02-26T05:03:32.010Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('6', '1', '2023-02-26T07:35:19.248Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('9', '6', '2023-02-25T11:18:40.664Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('3', '7', '2023-02-25T16:53:38.082Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('4', '4', '2023-02-26T01:31:42.396Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('9', '2', '2023-02-25T14:27:37.844Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('4', '9', '2023-02-26T01:19:37.345Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('3', '10', '2023-02-25T19:11:56.161Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('1', '9', '2023-02-25T20:00:55.980Z');
INSERT INTO student_subject (student_id, subject_id, created) VALUES ('6', '8', '2023-02-25T20:33:54.343Z');
INSERT INTO exam_result (id, student_id, subject_id, mark, created) VALUES 
('1', '6', '2', 'B', '2022-07-30T23:51:48.487Z'),
 ('2', '9', '8', 'A', '2023-01-14T03:17:04.955Z'),
 ('3', '9', '3', 'E', '2022-03-04T23:45:28.906Z'),
 ('4', '8', '8', 'F', '2022-10-16T01:14:49.012Z'),
 ('5', '9', '10', 'D', '2022-07-28T13:15:34.461Z'),
 ('6', '5', '4', 'D', '2022-11-06T15:35:31.779Z'),
 ('7', '4', '5', 'F', '2022-03-12T23:01:32.238Z'),
 ('8', '6', '5', 'F', '2022-11-25T09:29:13.589Z'),
 ('9', '2', '9', 'D', '2022-06-27T05:39:33.590Z'),
 ('10', '10', '3', 'F', '2022-11-11T01:08:43.922Z');