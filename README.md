<h1 align="center">Simple Restaurant App</h1>

This application is build with <b>[NestJS](https://nestjs.com/)</b> with <b>[TypeScript](https://www.typescriptlang.org/)</b>

## API Documentation

You can access API Documentation of this application by importing this <b>[Restaurant App API Collection](./restaurant_app.postman_collection)</b> to your <b>[Postman](https://www.postman.com/downloads/)</b>

## How to Run

### 1. Setup / Run Docker

This application must be run on <b>Docker</b>, please make sure <b>Docker</b> already installed on your device and it's already running.

If it's not installed yet, you can download it based on your device OS: <b>[Here](https://www.docker.com/get-started/)</b>, then follow the installation steps: <b>[Here](https://docs.docker.com/engine/install/)</b> or <b>[Here](https://docs.docker.com/desktop/?_gl=1*1kyz2v1*_ga*MTUwMzIxODczOS4xNzA3NjMzMjEy*_ga_XJWPQMJYHQ*MTcwNzkxOTQ5Mi4xNS4xLjE3MDc5MjA0MDAuNTguMC4w)</b>. After the installation, please make sure <b>Docker Engine / Docker Desktop</b> already running.

### 2. Clone the Repo

Open terminal on your device, clone this repository to your device using <b>[Git](https://git-scm.com/downloads)</b>, after that enter the project directory using the following command:

```sh
git clone https://github.com/andriabakti/restaurant-app.git
cd ./restaurant-app
```

### 3. Setup Environment for Order Service

Create <b>.env</b> file on <b>[Order Service Directory's Root](./apps/order-service/)</b> then set <b>all the variables</b> below, or you can just copy paste from <b>[Example ENV for Order Service](./apps/order-service/.env.example)</b>

```sh
# Base
BASE_PORT="3939"
# MySQL
MYSQL_ROOT_PASSWORD="root"
MYSQL_PASSWORD="root"
MYSQL_HOST="mysql"
MYSQL_PORT="3306"
MYSQL_DATABASE="restaurant_app"
# Prisma
DATABASE_URL="mysql://${MYSQL_ROOT_PASSWORD}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}"
# RabbitMQ
RMQ_URL="amqp://rabbitmq:5672"
# JWT
JWT_KEY="ESIRNUS"
JWT_TTL="1h"
```

### 4. Setup Environment for Notif Service

Create <b>.env</b> file on <b>[Notif Service Directory's Root](./apps/notif-service)</b> then set the variable below inside it, or copy paste from <b>[Example ENV for Notif Service](./apps/notif-service/.env.example)</b>

```sh
# Base
BASE_PORT="3838"
# RabbitMQ
RMQ_URL="amqp://rabbitmq:5672"
# Mailer
MAIL_HOST="smtp.gmail.com"
MAIL_PORT="587"
MAIL_USERNAME="andriabaktimahendra@gmail.com"
MAIL_PASSWORD="gpqqaxiykfpwgmjc"
```

### 5. Setup Environment for Kitchen Service

Create <b>.env</b> file on <b>[Kitchen Service Directory's Root](./apps/kitchen-service)</b> then set the variable below inside it, or copy paste from <b>[Example ENV for Kitchen Service](./apps/kitchen-service/.env.example)</b>

```sh
# Base
BASE_PORT="3737"
# MySQL
MYSQL_ROOT_PASSWORD="root"
MYSQL_PASSWORD="root"
MYSQL_HOST="mysql"
MYSQL_PORT="3306"
MYSQL_DATABASE="restaurant_app"
# Prisma
DATABASE_URL="mysql://${MYSQL_ROOT_PASSWORD}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}"
# RabbitMQ
RMQ_URL="amqp://rabbitmq:5672"
```

### 6. Run `docker compose`

Run <b>[docker compose](./docker-compose.yaml)</b> by the following command on the root directory of the project

```sh
docker compose up -d
```

### 7. Try the APIs

After <b>docker compose</b> finished, you can try all the <b>[APIs](./restaurant_app.postman_collection)</b> by <b>[Postman](https://www.postman.com/downloads/)</b>
