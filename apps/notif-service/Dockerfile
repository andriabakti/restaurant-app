FROM node:lts-alpine AS builder

WORKDIR /app/notif-service

RUN npm install

COPY . .

RUN npm install

RUN npm run build