import fieldwork from './index'

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json',
    },
  })
}

beforeEach(() => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve(
      mockResponse(200, null, '{"status":"ok"}')
    )
  })
})

const config = {
  projectId: '8bce381e-afb0-421b-8d25-60410b6a9110',
  projectPublicKey: 'JfXPMWxjo4669wiMrD_NIg',
}

const client = fieldwork(config)

test('It should track an event', () => {
  client.trackEvent('order_created_by_js_client', {
    amount: 34.95,
    gst: 3.18,
    customer_id: 675,
    express_shipping: true,
  })
  expect(window.fetch).toBeCalled()
})

test('It should add an entity', () => {
  client.addEntity('product_by_js_client', {
    id: 232,
    name: 'The Great Gatsby',
    author: 'F Scott Fitzgerald',
    retail_price_cents: 2995,
    categories: ['fiction', 'classics'],
  })
  expect(window.fetch).toBeCalled()
})
