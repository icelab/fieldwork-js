import 'whatwg-fetch'
import config from './config'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {
  return response.json()
}

export default function connection (projectId, projectPublicKey, baseUrl) {
  baseUrl = (baseUrl != null) ? baseUrl : config.FIELDWORK_API_BASE_URL
  const projectBaseUrl = `${baseUrl}/${projectId}`
  const authorization = window.btoa(`${projectPublicKey}:`)

  return (endpoint, data) => {
    const url = `${projectBaseUrl}${endpoint}`
    const encodedData = window.JSON.stringify(data)
    return window.fetch(url, {
      method: 'POST',
      body: encodedData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authorization}`,
      },
    })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      console.log('Request failed', error)
    })
  }
}
