export default function addEntity(request, name, properties) {
  return request("/entities", {
    name,
    properties
  });
}
