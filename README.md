# README #

Steps to get your Angular application up and running as a Docker Image using Nginx.

### CLI TO RUN ###

Make sure you have your dist/ folder else you need to build your app using:
* >ng build --prod 

Once /dist folder generated for you build & run your docker image:
* >docker build -t dockerized-food .
* >docker images
* >docker run -p 80:80 dockerized-food

Finally you can enjoy your app on localhost:80/