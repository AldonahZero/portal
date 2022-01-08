FROM nginx:latest 
ADD build/ /usr/share/nginx/html/ 
ADD nginx.conf /etc/nginx/ 
EXPOSE 80