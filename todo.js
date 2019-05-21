var todoList = {
   todos: [],
   displayTodos: function () {
      //checks to see if todos are empty is not shows todos.
      if (this.todos.length === 0) {
         console.log('Your todo list is empty');
      }
      else {
         console.log('My Todos:');
         //cycles through all the todos
         for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);

            //gives an x or empyt () if todo is completed.
            if (this.todos[i].completed === true) {
               console.log('(x)', this.todos[i].todoText);
            } else {
               console.log('( )', this.todos[i].todoText);
            }
         }
      }
   },
   //needs param so that we know the name of todo being
   //todos aren't defined in this object below, we need
   //to access it by using `this`
   addTodo: function (todoText) {
      //allows for an empty array so the user can add their own content.
      this.todos.push({
         todoText: todoText,
         completed: false
      });
      this.displayTodos();
   },
   changeTodo: function (position, todoText) {
      //so the whole object won't change, just the line item
      this.todos[position].todoText = todoText;
      this.displayTodos();
   },
   deleteTodo: function (position) {
      this.todos.splice(position, 1);
      this.displayTodos();
   },
   toggleCompleted: function (position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
   },
   toggleAll: function () {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      //Checks for the number of Todos
      for (var i = 0; i < totalTodos; i++) {
         if (this.todos[i].completed === true) {
            completedTodos++;
         }
      }
      //If all todos are checked, uncheck them.
      if (completedTodos === totalTodos) {
         for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
         }
         //making everything checked
      } else{
         for (var i = 0; i< totalTodos; i++){
            this.todos[i].completed = true;
         }
      }
      this.displayTodos();
   }

};

/*
shift+alt+a
   1. We want to get access to the display todos buttons
   2. We want to run displayTodos method,
   when someone clicks the display todos button
 */

 /*
 accesses the dom with javascript. using the name that we
 give it "the id" we are able to make changes to the html
 remeber 'get elmeent by id' helps to grab the button from
 html
 1. pull info from html then alter it with a function->
 document.getElement then addEventListner
 */
var displayTodosButtons= document.getElementById('displayTodosButton');
var toggleAllButton= document.getElementById('toggleAllButton');


/*
display todos - using a var to grab the information to
listen for a user to do something - then telling the
event listener to do an action when user does something
needs to have two params.
*/

 displayTodosButtons.addEventListener('click', function(){
    todoList.displayTodos();
 });

 toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
 })
