### Api for get Itunes artists albums filtred and manage interaction with user
This is a Nodejs API using Express Framework, it interacts with Itunes API, for get 
data about music artists, albums etc.
The goal of this api es to provide to client the albums data of an artist. The main client is a Vue 3 app that is
in this repo:


## Endpoints:
For default the api base url is: http://localhost:4000/api/ 

Get itune artists data endpoint: artist-data/get-albums-by-artist-name  (http://localhost:4000/api/artist-data/get-albums-by-artist-name)

Login request endpoint: user/login  (http://localhost:4000/api/user/login)

## execute tests
npm run test

## run project
npm start

## project structure
The project has a basic folder structure:

tests -> this folder contain all test of app

api-features -> this folder contains all features, all feature has the following files:
                feature.router -> handle all routes only of this feature, manage endpoints middlewares (validations etc.) and redirect request to feature controller
                feature.controller -> handle the request and response, call feature.service for handle business logic
                feature.service -> handle bussiness logic of the feature
                feature.validators -> handle req.body validations (avoid invalid data and malisious data atacks)


common -> contains resources used by multiples features

middleware -> contains functions inyected in middleware

routes -> handle all feature child routers