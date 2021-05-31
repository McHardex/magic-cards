## Project Name & Pitch

Magic Cards

React webpage that allows to get information on cards from Magic [Getting
Started](magicthegathering.io).

## Project Features

- [x] Select a set from all available sets
- [x] Show a list of the cards in that set with a bit of
      information about each card When I hit ‘Gather’.
- [x] Paginate result
- [x] Search through Sets dropdown filter

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm/yarn` installed globally on your machine.

Installation:

`yarn install`

Create a .env file and add the following variables:

`REACT_APP_API_BASE_URL="https://api.magicthegathering.io/v1"`

To Start Server:

`yarn start`

To Visit App:

`localhost:3000`

To Run unit test:

`yarn test`

To Run End2End test:

`yarn run cypress open`

## Deployment

This application is deployed with `Netlify` and it is live [here](https://magic-cards.netlify.app/)
