#instalação geral
FROM node:21-alpine
RUN apk update
RUN apk upgrade
RUN apk add --no-cache ffmpeg
RUN apk add --no-cache python3 py3-pip