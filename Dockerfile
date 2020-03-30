FROM node:13

# Create app directory
WORKDIR /home/eureka/document/Node/docker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "nodemon", "app.js" ]

