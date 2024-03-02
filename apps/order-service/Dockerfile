FROM node:lts-alpine AS builder

WORKDIR /app/order-service

RUN npm install

COPY . .

RUN npm install

RUN npm run build