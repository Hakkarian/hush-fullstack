FROM docker/compose

WORKDIR /app
COPY . ./
EXPOSE 5000
CMD docker-compose -f /app/docker-compose.yml up