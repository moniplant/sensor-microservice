FROM node:latest

WORKDIR /usr/src/app/sensors

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]