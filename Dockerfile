FROM node:18-alpine

WORKDIR /app

RUN npm i -g @angular/cli

COPY package.json .
COPY yarn.lock* .

RUN yarn

COPY . .

EXPOSE 4200/tcp

CMD ["ng","serve","--host", "0.0.0.0"]
