FROM node:17

WORKDIR /app
# COPY public /app/public
COPY . .
COPY package.json /app
COPY node_modules /app/node_modules

CMD ["npm", "start"]
