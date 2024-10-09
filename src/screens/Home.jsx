import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import { toast } from 'react-toastify';
import { addTodo, updateTodo, deleteTodo, fetchTodos } from '../axios/todoApi';
import Loader from '../components/Loader';

const Home = () => {
    const [todoList, setTodoList] = useState([]);   // State to hold the list of todos
    const [isModalOpen, setIsModalOpen] = useState(false);   // State to control modal visibility
    const [editingTodoId, setEditingTodoId] = useState(null);   // State to track which todo is being edited
    const [title, setTitle] = useState('');   // State for the todo title
    const [description, setDescription] = useState('');   // State for the todo description
    const [loading, setLoading] = useState(false);   // State to control loading indicator

    const getTodos = async () => {       // Function to fetch todos from the API
        setLoading(true);
        try {
            const fetchedTodos = await fetchTodos();
            setTodoList(fetchedTodos);    // Update state with fetched todos
        } catch (error) {
            toast.error('Error fetching todos.', error);
        } finally {
            setLoading(false);
        }
    };

     // useEffect to fetch todos on component mount
    useEffect(() => {
        getTodos();
    }, []);

    const addOrUpdateTodo = async () => {
        if (!title || !description) return;   

        const newTodo = {
            title,               // Create new todo object
            description,
        };

        setLoading(true);
        setIsModalOpen(false);

        try {
            if (editingTodoId) {
                await updateTodo(editingTodoId, newTodo);     // Update existing todo
                toast.info('Todo updated successfully!');
            } else {
                await addTodo(newTodo);
                toast.success('Todo added successfully!');
            }
            await getTodos();
        } catch (error) {
            if (editingTodoId) {
                toast.error('Error occurred while updating todo.');
            } else {
                toast.error('Error occurred while creating todo.');
            }
        } finally {
            clearInputs();
            setLoading(false);
        }
    };

        // Function to handle todo deletion
    const handleDeleteTodo = async (id) => {
        setLoading(true);
        try {
            await deleteTodo(id);
            toast.warn('Todo deleted successfully!');
            await getTodos();
        } catch (error) {
            toast.error('Error occurred while deleting todo.');
        } finally {
            setLoading(false);
        }
    };

        // Function to clear input fields and reset editing state
    const clearInputs = () => {
        setTitle('');
        setDescription('');
        setEditingTodoId(null);
    };

        // Function to open the edit modal with the selected todo's details
    const openEditModal = (todo) => {
        setEditingTodoId(todo.id);
        setTitle(todo.title);
        setDescription(todo.description);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Toast />
            {loading && <Loader />}
            <div className="flex flex-wrap items-center justify-center gap-4">
                {todoList.map((todo) => (
                    <Card
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                        onDelete={() => handleDeleteTodo(todo.id)}
                        onEdit={() => openEditModal(todo)}
                    />
                ))}
                {<Card isAddCard={true} onClick={() => setIsModalOpen(true)} />}
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false); clearInputs(); }}
                onSubmit={addOrUpdateTodo}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                isEditing={!!editingTodoId}
            />
        </div>
    );
};

export default Home;