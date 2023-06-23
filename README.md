# service orchestration sandbox

Sandbox for playing with trying to start services that may depend on other
services.

## server

 The folder server contains a very simple http server in the `server.js` file
 that listens to port 8080. The server simulates a long initialization my taking
 20s to start.

 ## client

 The client folder has a brittle sample client application in `client.js` that
 will only succeed if the server is up.  As long as the client is able to, it
 will connect to port 8080 and increment a counter for each success.  Upon
 failure, the client will exit. The client occasionally, every 10k successes,
 reports the count to the console.

## orchestration

Example docker compose files can be used to start the services.

The `compose.yml` file will start up services without dependencies and health
check.  We should see the client fail since the server takes 20s to start.

build and run via:

```
docker compose -f compose.yml build
docker compose -f compose.yml up
```

The `compose-dep.yml` file will start up services with dependencies and health
check.  We should see the client succeed as the client requires the server to be
healthy.

Build and run via:

```
docker compose -f compose-deps.yml build
docker compose -f compose-deps.yml up
```