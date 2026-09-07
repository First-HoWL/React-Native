import { createContext, ReactNode, useContext, useState } from 'react';

export type Todo = {
    id: string;
    title: string;
    description: string;
    deadline?: string;
    image?: string;
    createdAt: string;
};

type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
    editTodo: (id: string, updates: Partial<Todo>) => void;
    deleteTodo: (id: string) => void;
    getTodo: (id: string) => Todo | undefined;
};

const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: '1',
            title: 'Design Logo',
            description: 'Make logo for the mini project',
            createdAt: '1 Sept 2021',
        },
        {
            id: '2',
            title: 'Make UI Design',
            description: 'Make UI design for the mini project post figma link to the trello using view only link.',
            createdAt: '1 Sept 2021',
        },
    ]);

    const addTodo: TodoContextType['addTodo'] = (todo) => {
        setTodos(prev => [
            ...prev,
            { ...todo, id: Date.now().toString(), createdAt: new Date().toDateString() },
        ]);
    };

    const editTodo: TodoContextType['editTodo'] = (id, updates) => {
        setTodos(prev => prev.map(t => (t.id === id ? { ...t, ...updates } : t)));
    };

    const deleteTodo: TodoContextType['deleteTodo'] = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    const getTodo = (id: string) => todos.find(t => t.id === id);

    return (
        <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo, getTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    const ctx = useContext(TodoContext);
    if (!ctx) throw new Error('useTodos must be used within TodoProvider');
    return ctx;
}