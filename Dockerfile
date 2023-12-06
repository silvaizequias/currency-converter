FROM node:18-alpine

WORKDIR /app

RUN npm i -g @angular/cli

COPY package.json .
COPY yarn.lock* .

RUN yarn

COPY . .

EXPOSE 4200/tcp

CMD [ "yarn", "start" ]
