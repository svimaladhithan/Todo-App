import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchTodos = async () => {
    const response = await axios.get(API_URL);  // Make a GET request to the API
    return response.data;
};

export const addTodo = async (newTodo) => {
    const response = await axios.post(API_URL, newTodo);   // Make a POST request with the new todo
    return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);  // Make a PUT request with the updated todo
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);   // Make a DELETE request to remove the todo
};