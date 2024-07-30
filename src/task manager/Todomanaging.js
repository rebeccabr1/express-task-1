
// todo task for testing

  
  // Get all Todos with error handling
  const getAllTodos = (req, res) => {
    tryCatch((req, res) => {
    
    const getquery = 'SELECT * FROM TodoList';
    const gettodos = db.prepare(getquery).all();
    res.json(gettodos);
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
 
    const newquery = 'INSERT INTO TodoList (task ) VALUES (?)';
    const newtodos = db.prepare(newquery).run(task);
    const newTodoid = { id: info.lastInsertRowid, task};

    res.status(201).json(newTodos);
  });
  };
  
  // Update a Todo
  const updateTodo = (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
  
    const updatequery = 'SELECT * FROM TodoList WHERE id = ?';

    const updatetodo= db.prepare(updatequery).get(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
  
    
    const updatedTask = task !== undefined ? task : todo.task;
    const updatedquery='UPDATE TodoList SET task = ?, WHERE id = ?';
    const updatedtodo= db.prepare(updatedquery).run(updatedTask,id);
  
    res.json(updatedtodo);
  };
  
  // Delete a Todo
  const deleteTodo = (req, res) => {
    const { id } = req.params;
   
    const deletequery = 'DELETE FROM TodoList WHERE id = ?';

   const deletetodo= db.prepare(deletequery).run(id);
    res.status(204).send();
  };
  
  module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };

