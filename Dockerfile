FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/dashboard /usr/share/nginx/html

# Expose port 4103
EXPOSE 4103