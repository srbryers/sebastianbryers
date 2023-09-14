# script for building dockerfile locally
# Usage: 
# - ensure docker is installed and running
# - run ./run_locally.sh in terminal

# build docker image
docker build -t frontend .

# run docker container with .env file
docker run -p 3000:8080 --env-file .env frontend