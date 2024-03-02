FROM node:lts-alpine AS builder

WORKDIR /app/order-service

COPY . .

RUN npm install

RUN npm run build