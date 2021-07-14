const API_URL = 'https://opentdb.com/api.php'

const getApiUrl = (numQuestion, category, difficulty, type) => {
  return (
    `${API_URL}?amount=${numQuestion}` +
    `&category=${category}` +
    `&difficulty=${difficulty}` +
    `&type=${type}`
  )
}

export default getApiUrl
