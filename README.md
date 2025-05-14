### This microservice receives via MQTT data streams from different sensors and stores them in a NoSQL database
```
Sensors themselves are stored in the plants microservice alongside the plants, this ease for an ease to have  relations/associations together with the plants: 
A plant can have multiple sensors. A sensor can only be in one plant.
```

This project runs through docker compose few servies:
### Docker
Made easy with docker compose, run: `docker compose up` for running all services at once.

- mongodb: That is the database choosen to store sensors data, listening under port: 27017 (.env defines DB_PORT)
- mongo-express: Web-based MongoDB admin interface, written with Node.js and express (Accessible through: http://localhost:8081/)
- sensors_app: Microservice core application, run on port: 5000

#### Devlopment environment:
`docker compose --profile dev up` to launch the services in dev mode (launches the microservice too)