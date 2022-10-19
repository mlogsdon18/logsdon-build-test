FROM node:17

WORKDIR /app
COPY app/html /app/html
COPY app/index.js /app
COPY package.json /app
COPY node_modules /app/node_modules

CMD ["npm", "start"]
