# Build Pipeline Playground

## Step 1: Docker

Dockerfile exists and currently uses node:17

We're using Express.js to get us something to look at when Docker runs the project on port 8000

`docker-compose.yml` file exists and runs the image with persistent volume

- At least two Typescript files that are combined into one file that will be served via the browser
