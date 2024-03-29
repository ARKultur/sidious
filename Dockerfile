FROM node:16.17-alpine as builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]