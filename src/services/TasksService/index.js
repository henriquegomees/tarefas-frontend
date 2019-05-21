
import axios from 'axios'

const fetchAllTasks = async () => {
    const request = await axios.get(process.env.REACT_APP_API_URL)
    return request.data
}

const add = async ({title}) => {
    const request = await axios.post(process.env.REACT_APP_API_URL, { title })
    return request.data
}

const remove = async ({id}) => {
    const request = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
    return request.data
}

const complete = async ({id}) => {
    const request = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`)
    return request.data
}

export default {
    fetchAllTasks,
    add,
    remove,
    complete
}
