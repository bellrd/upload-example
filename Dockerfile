FROM node:latest

WORKDIR /backend

COPY . /backend

RUN npm install
RUN npm install pm2 -g

#CMD ["node", "./build/index.js"]
CMD ["pm2-runtime", "./index.js"]