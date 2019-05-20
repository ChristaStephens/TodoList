var todoList={
   todos: [],
   displayTodos: function(){
      //checks to see if todos are empty is not shows todos.
      if (this.todos.length ===0){
        console.log('Your todo list is empty');
      }
      else{
       console.log('My Todos:');
       //cycles through all the todos
       for (var i =0; i<this.todos.length; i++){
       console.log(this.todos[i].todoText);
      }

      }
   },
   //needs param so that we know the name of todo being
   //todos aren't defined in this object below, we need
   //to access it by using `this`
   addTodo: function(todoText){
     //allows for an empty array so the user can add their own content.
      this.todos.push({
        todoText:todoText,
        completed: false
      });
      this.displayTodos();
   },
   changeTodo: function(position, todoText){
     //so the whole object won't change, just the line item
     this.todos[position].todoText = todoText;
     this.displayTodos();
   },
   deleteTodo: function(position){
     this.todos.splice(position, 1);
     this.displayTodos();
   },
   toggleCompleted: function(position){
     var todo = this.todos[position];
     todo.completed = !todo.completed;
     this.displayTodos();
   }

  };
