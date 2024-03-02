FROM node:lts-alpine AS builder

WORKDIR /app/kitchen-service

RUN npm install

COPY . .

RUN npm install

RUN npm run build