const getData = (str) => {
  return fetch(
    `https://test-6a7bc-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
      return response.json()
    })
}

export default getData