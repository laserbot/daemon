#! /bin/sh

youtube-dl -ci -o "%(title)s-%(id)s.%(ext)s" --write-info-json "https://www.youtube.com/watch?v=uwmeH6Rnj2E"

zenc 
