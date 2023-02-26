select name || ' ' || surname as "full name" from students where name = 'Heloise';

select name || ' ' || surname as "full name" from students where surname like '%Laughlin';

select name || ' ' || surname as "full name" from students where '990.979.2152' = any (phone_numbers);

select s.name || ' ' || s.surname as "full name", er.mark from students s, exam_result er
    where er.student_id = s.id and s."name" = 'Heloise';