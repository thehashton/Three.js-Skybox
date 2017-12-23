#Three.js Sky-box
A 3D WebGL project using the Three.js javascript framework to create a 3D environment within a sky-box.
 
 ####What's under the hood:
    1. Gulp
    2. Browser-sync
    3. Gulp-sass
    4. Three.js
    
####Why Gulp/Browser-sync/Gulp-sass?
Due to the 'same origin' policy (which is a Javascript security feature) I needed to run a local web server to enable the loading of external resources. That is why I'm using Gulp to run a local web server simply to bypass that.

I've added in Browser-sync and Gulp-sass because I a) love browser-sync and can't be bothered to refresh constantly b) these are my standard tools on most front end projects and will improve my quality of life in my work-flow on this project (first world problems). 

####Why Three.js?
Mostly because I'm not creating a game engine from scratch I enjoy the idea of a little bit of abstraction. Everyones likes a bit abstraction every now and then right? Of course so Three.js is my standard go to for WebGL abstraction to make my building of this Skybox for all intensive purposes....a 'breeze' (famous last words.)