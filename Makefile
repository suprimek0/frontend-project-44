.PHONY: install brain-games

 install:
     npm ci

 brain-games:
     node bin/brain-games.js
