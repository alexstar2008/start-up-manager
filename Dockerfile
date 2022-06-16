FROM node:16.15-alpine

LABEL maintainer="alexey.starovoytenko@gmail.com"

RUN mkdir /start-up-manager
WORKDIR /start-up-manager

COPY ./package*.json ./
RUN npm install

COPY . .

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

EXPOSE 3000
CMD ["npm", "start"]
