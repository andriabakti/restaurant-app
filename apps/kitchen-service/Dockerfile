FROM node:lts-alpine AS builder

WORKDIR /app/kitchen-service

COPY . .

RUN npm install

RUN npm run build