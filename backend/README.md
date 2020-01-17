# backend geolocation

## running

* use docker

```sh
docker run \
    --name mongodbd \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=secretpassadmin \
    -d \
    mongo:4
docker start mongodbd
docker exec -it mongodbd \
    mongo --host 192.168.99.100 -u admin -p secretpassadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('developers').createUser({user: 'paulotiago', pwd: 'secretpass', roles: [{role: 'readWrite', db: 'developers'}]})"
```

## todo
* create tests
* use service await axios.get(`https://geocode.xyz/${locationString}?json=1`)
