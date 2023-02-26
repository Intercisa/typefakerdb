CREATE TABLE IF NOT EXISTS students (
	id serial primary key, 
	name VARCHAR ( 50 )  NOT NULL,
	surname VARCHAR ( 50 ) NOT NULL,
	date_of_birth TIMESTAMP NOT null,
	phone_numbers text[],
	primary_skill VARCHAR ( 50 ) NOT NULL,
	created TIMESTAMP NOT NULL,
    updated TIMESTAMP 
);

CREATE TABLE IF NOT EXISTS subjects (
	id serial primary key, 
	name VARCHAR ( 50 )  NOT NULL,
    tutor VARCHAR ( 100 )  NOT NULL,
	created TIMESTAMP NOT NULL,
    updated TIMESTAMP 
);

create TABLE IF NOT EXISTS student_subject (
	student_id int not null,
	subject_id int not null,
	created TIMESTAMP NOT NULL,
	CONSTRAINT student_subject_pk PRIMARY KEY (student_id, subject_id),
 	CONSTRAINT FK_student
  	FOREIGN KEY (student_id) REFERENCES students  (id),
 	CONSTRAINT FK_subject
  	FOREIGN KEY (subject_id) REFERENCES subjects (id)
);

create TABLE IF NOT EXISTS exam_result (
	id serial primary key, 
	student_id int not null,
	subject_id int not null,
	mark VARCHAR ( 50 ) NOT NULL,
	created TIMESTAMP NOT NULL,
	CONSTRAINT FK_student
  	FOREIGN KEY (student_id) REFERENCES students  (id),
 	CONSTRAINT FK_subject
  	FOREIGN KEY (subject_id) REFERENCES subjects (id)
);
