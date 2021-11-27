FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/dashboard /usr/share/nginx/html

# Expose port 4103

EXPOSE 4103