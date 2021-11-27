FROM node:10-alpine as build-step

RUN mkdir -p /src

WORKDIR /src

COPY package.json /src

RUN npm install

COPY . /src

RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /dist/dashboard /usr/share/nginx/html

# Expose port 4103

EXPOSE 4103