import connection from "./connection";
import * as publicMethods from "./methods";

export default function init({ projectId, projectPublicKey, apiBaseUrl }) {
  // Throw error if not configured
  if (projectId == null || projectPublicKey == null) {
    throw new Error("Project ID and public key must be passed.");
  }

  // Configure fetch
  const request = connection(projectId, projectPublicKey, apiBaseUrl);

  // Curry all the public methods so pass in our pre-configured fetcher
  let curried = {};
  Object.keys(publicMethods).forEach(methodName => {
    curried[methodName] = function() {
      return publicMethods[methodName](request, ...arguments);
    };
  });
  return curried;
}
