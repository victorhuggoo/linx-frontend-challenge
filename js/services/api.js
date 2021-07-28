/**
 * This function is responsible for call api
 * 
 * @param {String} url
 * @param {Function} onSuccess
 * @param {Function} onError
 * @returns {Promise}
 */

const api = (url, onSuccess, onError) => {
  return fetch(url)
    .then(res => res.json())
    .then(data => onSuccess(data))
    .catch(err => onError(err))
}

export default api