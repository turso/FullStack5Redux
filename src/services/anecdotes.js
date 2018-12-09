import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async content => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const addVote = async (id, content) => {
  const response = await axios.put(`${url}/${id}`, content)
  return response.data
}

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { getAll, createNew, addVote }
