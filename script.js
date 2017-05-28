var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todos is empty");
    }
    else {
      console.log('MyTodos: ');
      for (var i = 0; i < this.todos.length; i++) {
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        }else {
          console.log('()', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    debugger;
    this.todos.push({
      todoText: todoText, // first todoText is property of addTodo
      completed: false
      
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function(){
    //initializing the new variable before they use
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true){ // comparing 
        completedTodos++;
      }
    }
    
    //Case 1: if everything is true, make them false
    if (completedTodos === totalTodos) {
      //make everything false
      for ( var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false; // = assigning
      }//this.displayTodos(); we don't need diplay for every case - just at the end
    }else {
      //case 2: if some are true, make them all true;
      for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
  };

//accessing to HTML document by creating variable and document.getElementById method
var displayTodosButton = document.getElementById('displayTodosButton');
//toggleAllButton
var toggleAllButton = document.getElementById('toggleAllButton');
//adding addEventListener so that when click happens we can run the function
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});
//adding addEventListner for toggleAllButton
toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});































































