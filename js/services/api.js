const api = async (url, onSuccess, onError) => {
  await fetch(url)
    .then(res => res.json())
    .then(data => onSuccess(data))
    .catch(err => onError(err))
}

export default api