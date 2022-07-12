
# Challenge nginx how proxy reverse
The goal of challenge is to use Nginx as proxy reverse, when a request arrives on port 8080 of Nginx, it's going to be sent to port 3000 of the application node that is going to access the MySQL database, to read one table and return a list simple of people.

## How to use
```sh
### Run Containers
docker docker-compose up -d
```
### Type the address on browser:
[http://localhost:8080/](http://localhost:8080/)

## Technologies used:
 - Myql
 - Node
 - Nginx
 - Docker

