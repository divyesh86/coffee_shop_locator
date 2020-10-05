## Coffee Shop locator
---

Welcome to the CoffeeShop Locator Demo!

make sure npm node js installed
(this code was tested on node version 8.4.0)

## Installation Instructions

1) Clone this branch on your local (git clone https://github.com/divyesh86/coffee_shop_locator.git)
2) cd into the directory where it was saved
2) run command `npm install --save`
3) run command `npm run start-dev`
4) This should start the server on port 3001


## Workflow (Use a different tab)

First Initialize (To load the data from locations.csv to memory)
1) curl http://localhost:3001/api/init


## Commands to test (Use a different tab)
1) Insert a new coffee shop
curl -H "Content-Type: application/json" -X POST -d  '{"name": "New Coffee Shop", "address":"990 Market St","latitude":"37.782394430549445", "longitude": "-122.40997343121123"}' http://localhost:3001/api/create

2) Read particular id
curl http://localhost:3001/api/read/2

3) Update a coffee shop
curl -H "Content-Type: application/json" -X POST -d  '{"name": "New Coffee in SF", "address":"986 Market St","latitude":"37.782394430549445", "longitude": "-122.40997343121123"}' http://localhost:3001/api/update/3

4) Delete particular id
curl -X POST http://localhost:3001/api/delete/3

5) Find the nearest coffee shop
curl -H "Content-Type: application/json" -X POST -d  '{"address":"990 Market St, San Francisco, CA, USA"}' http://localhost:3001/api/findNearest

## Run tests
npm test






