const api = (url, onSuccess, onError) => {
  return fetch(url)
    .then(res => res.json())
    .then(data => onSuccess(data))
    .catch(err => onError(err))
}

export default api