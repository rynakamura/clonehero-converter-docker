#instalação geral
FROM node:21-alpine
RUN apk update
RUN apk upgrade
RUN apk add --no-cache ffmpeg

RUN mkdir /converter
RUN echo 'for d in /files/*; do  if [ -d "$d" ]; then ( cd "$d" && for f in *.MP4 ; do ffmpeg -threads 16 -i "$f" -c:v libvpx -b:v 10M -c:a libvorbis video.webm -y; done && rm "$f")  fi done' > /converter/convert.sh