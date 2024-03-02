FROM node:lts-alpine AS builder

WORKDIR /app/notif-service

COPY . .

RUN npm install

RUN npm run build