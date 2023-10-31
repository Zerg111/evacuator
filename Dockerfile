FROM node:18 as client

WORKDIR /app/client

COPY client/package.json /app/client

RUN npm install

COPY client /app/client

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]