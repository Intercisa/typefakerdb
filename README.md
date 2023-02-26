d run --name cdp -p 2345:5432 -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -e POSTGRES_DB=cdp_db -d postgres:latest
npm run dev 
docker container cp createtables.sql cdp:/   
docker container cp inserts.sql cdp:/
docker container cp queries.sql cdp:/          
docker container exec -it cdp psql --dbname=cdp_db --username=admin  -f createtables.sql
docker container exec -it cdp psql --dbname=cdp_db --username=admin  -f inserts.sql
docker container exec -it cdp psql --dbname=cdp_db --username=admin  -f queries.sql    