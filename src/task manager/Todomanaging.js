
// todo task for testing
let todos = [
    { id: 1, task: 'Do the beds', completed: false },
    { id: 2, task: 'Take out the dog', completed: true },
  ];
  
  // Get all Todos with error handling
  const getAllTodos = (req, res) => {
    tryCatch((req, res) => {
    res.json(todos);
    return res.status(200).json(json);
    })
  };
  
  // Create a new Todo
  const createTodo = (req, res) => {
    tryCatch((req,res)=>{
    const { task } = req.body; 
  
    if (!task) {
      return res.status(400).json({ message: 'U must add a task' });
    }
  
    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
  
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
  };
  
  // Update a Todo
  const updateTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
  
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
  
    todo.task = task !== undefined ? task : todo.task;
    todo.completed = completed !== undefined ? completed : todo.completed;
  
    res.json(todo);
  };
  
  // Delete a Todo
  const deleteTodo = (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id !== parseInt(id));
    res.status(204).send();
  };
  
  module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };

 