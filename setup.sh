docker-compose run web npm install -g yarn 
docker-compose run web rm -rf node_modules
docker-compose run web yarn install
docker-compose down