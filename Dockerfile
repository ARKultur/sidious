FROM node:16-alpine3.17

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]
