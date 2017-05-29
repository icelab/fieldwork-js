import fieldwork from "./index";

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  });
};

beforeEach(() => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve(mockResponse(200, null, '{"status":"ok"}'));
  });
});

const config = {
  projectId: "example_id",
  projectPublicKey: "example_key"
};

const client = fieldwork(config);

test("It requires configuration", () => {
  expect(() => {
    fieldwork({});
  }).toThrow("Project ID and public key must be passed.");
});

test("It should track an event", () => {
  client.trackEvent("order_created_by_js_client", {
    amount: 34.95,
    gst: 3.18,
    customer_id: 675,
    express_shipping: true
  });
  expect(window.fetch).toBeCalled();
});

test("It should add an entity", () => {
  client.addEntity("product_by_js_client", {
    id: 232,
    name: "The Great Gatsby",
    author: "F Scott Fitzgerald",
    retail_price_cents: 2995,
    categories: ["fiction", "classics"]
  });
  expect(window.fetch).toBeCalled();
});
