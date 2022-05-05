# Envoy test

## Getting Started

install [func-e](https://func-e.io/)

```console
curl https://func-e.io/install.sh | bash -s -- -b /usr/local/bin
```

install dependencies

```console
npm install
```

## Running the servers

start envoy server

```console
func-e run -c example-config.yaml
```

start express server

```console
npm start
```

## Envoy in action

make request to envoy

```console
curl --request GET 'localhost:10000/'
```

The envoy server will be listening on port `10000` while the express server is listening on port `3000`.  Envoy will forward the request to the express server and receive the response.  You should see the `Hello World!` response.
