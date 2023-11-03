for d in /files/expert/*; do
    if [ -d "$d" ]; then
        ( cd "$d" && for f in *.MP4 ; do ffmpeg -threads 4 -i "$f" -c:v libvpx -b:v 10M -c:a libvorbis video.webm; done && rm "$f")
    fi
done

for d in /files/expert/*; do
    if [ -d "$d" ]; then
        ( cd "$d" && for f in *.mp4 ; do ffmpeg -threads 4 -i "$f" -c:v libvpx -b:v 10M -c:a libvorbis video.webm; done && rm "$f")
    fi
done

# for d in /files/*; do  if [ -d "$d" ]; then ( cd "$d" && for f in *.MP4 ; do ffmpeg -threads 16 -i "$f" -c:v libvpx -b:v 10M -c:a libvorbis video.webm -y; done && rm "$f")  fi done