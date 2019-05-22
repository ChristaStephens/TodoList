var todoList = {
   todos: [],
   //needs param so that we know the name of todo being
   //todos aren't defined in this object below, we need
   //to access it by using `this`
   addTodo: function (todoText) {
      //allows for an empty array so the user can add their own content.
      this.todos.push({
         todoText: todoText,
         completed: false
      });
   },
   changeTodo: function (position, todoText) {
      //so the whole object won't change, just the line item
      this.todos[position].todoText = todoText;
   },
   deleteTodo: function (position) {
      this.todos.splice(position, 1);
   },
   toggleCompleted: function (position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
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
      } else {
         for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = true;
         }
      }
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
var displayTodosButtons = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');


/*
display todos - using a var to grab the information to
listen for a user to do something - then telling the
event listener to do an action when user does something
needs to have two params.
*/
//  displayTodosButtons.addEventListener('click', function(){
//     todoList.displayTodos();
//  });

//  toggleAllButton.addEventListener('click', function(){
//     todoList.toggleAll();
//  })


//handles different events
//all the methods that handle
//diff events go here
var handlers = {
   addTodo: function () {
      var addTodoTextInput = document.getElementById("addTodoTextInput");
      todoList.addTodo(addTodoTextInput.value);
      //helps to clear input
      addTodoTextInput.value = "";
      view.displayTodos();
   },

   changeTodo: function () {
      var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");
      //value as number to return a number and not a string
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = "";
      changeTodoTextInput.value = "";
      view.displayTodos();
   },

   deleteTodo: function () {
      var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput.value = "";
      view.displayTodos();
   },

   toggleCompleted: function () {
      var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = "";
      view.displayTodos();
   },

   toggleAll: function () {
      todoList.toggleAll();
      view.displayTodos();
   }

};
/*
Responsible for what the user sees
 */
var view = {
   displayTodos: function(){
      //grabs ul from html
      var todosUl = document.querySelector("ul");
      //clear the ul after a new item is added.
      todosUl.innerHTML ="";

      //loops through each list item and creates a new element
      //while adding a li item to the ul
      for (var i =0; i<todoList.todos.length;i++){
         var todoLi = document.createElement("li");
         var todo = todoList.todos[i];
         var todoTextWithCompletion ="";

         if(todo.completed ===true){
            todoTextWithCompletion = "(x) " + todo.todoText;
         }else{
            todoTextWithCompletion = "( ) " + todo.todoText;
         }

         todoLi.textContent =todoTextWithCompletion;
         todosUl.appendChild(todoLi);
      }
   }

};
