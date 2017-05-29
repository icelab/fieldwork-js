# Fieldwork JS

A JavaScript API client for Fieldwork.

## Installation

```
npm install --save icelab/fieldwork-js
```

## Usage

```js
import fieldwork from 'fieldwork-js'

const client = fieldwork({
  projectId: 'your_project_id',
  projectPublicKey: 'your_project_public_key',
})

client.trackEvent('order_created', {
  amount: 34.95,
  gst: 3.18,
  customer_id: 675,
  express_shipping: true,
})

client.addEntity('product', {
  id: 232,
  name: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  retail_price_cents: 2995,
  categories: ['fiction', 'classics'],
})
```

If you want to use a custom API endpoint you can override it at initialisation
time:

```js
import fieldwork from 'fieldwork-js'

const client = fieldwork({
  projectId: 'your_project_id',
  projectPublicKey: 'your_project_public_key',
  apiBaseUrl: 'https://custom-base-url.goes/here'
})
```

## Development

We’re using [yarn](https://yarnpkg.com/) for development:

```
yarn
yarn run build
yarn run watch
```

Tests are run through [jest](https://facebook.github.io/jest/):

```
yarn run test
```
