# docker-compose


```yml
version: 3
networks:
  laravel:

services:
  site:
    build:
      context: .
      dockerfile: Dockerfile
    image: nginx
    container_name: contname
    ports:
      - 80:80 # host:container
    env:
      -
    volumes:
      -
    entrypoint: 
      -
    depends_on:
      redis
    networks:
      laravel
```
