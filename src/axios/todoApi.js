import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTodo = async (newTodo) => {
    const response = await axios.post(API_URL, newTodo);
    return response.data;
};

export const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};