export default function trackEvent (request, name, properties) {
  return request('/events', {
    name,
    properties,
  })
}
