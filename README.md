### This microservice receives via MQTT data streams from different sensors and stores them in a NoSQL database
```
Sensors themselves are stored in the plants microservice alongside the plants, this ease for an ease to have  relations/associations together with the plants: 
A plant can have multiple sensors. A sensor can only be in one plant.
```