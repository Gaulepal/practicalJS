var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText, // first todoText is property of addTodo
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      //Case 1: if everything is true, make them false
      if (completedTodos === totalTodos) {
        todo.completed = false;
      //Case 2: if everything is false, make them true
      }else {
        todo.completed = true;
      }


    });
  }
};

//old replace by handlers object
//accessing to HTML document by creating variable and document.getElementById method
//var displayTodosButton = document.getElementById('displayTodosButton');
//toggleAllButton
//var toggleAllButton = document.getElementById('toggleAllButton');
//adding addEventListener so that when click happens we can run the function
//displayTodosButton.addEventListener('click', function(){
//  todoList.displayTodos();
//});
//adding addEventListner for toggleAllButton
//toggleAllButton.addEventListener('click', function(){
//  todoList.toggleAll();
//});

var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = ''; //that make clear the placeholder that typed last time
    view.displayTodos(); // for display the function everytime on code completion
  },
  changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }

};

var view = {  // creating a view area for user output
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ''; //clearing the the last ul list
    // for (var i = 0; i < todoList.todos.length; i++) {
    //   var todoLi = document.createElement('li');
    //   var todo = todoList.todos[i];
    //     var todoTextWithCompletion = '';
    //
    //
    //     if (todo.completed === true){
    //       todoTextWithCompletion = '(x) ' + todo.todoText;
    //     } else {
    //         todoTextWithCompletion = '( ) ' + todo.todoText;
    //     }
    //
    //     todoLi.id = i; //giving a unique id so that it can modify or delete
    //     todoLi.textContent = todoTextWithCompletion;
    //     todoLi.appendChild(this.createDeleteButton());
    //     todosUl.appendChild(todoLi);
    // }

    todoList.todos.forEach(function (todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';


      if (todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
      }
        todoLi.id = position; //giving a unique id so that it can modify or delete
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      }, this);
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function () {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function (event) {
        //get the element that was clicked on.
        var elementClicked = event.target;
        //cjecl of e;ementclicked is a delete button.
        if (elementClicked.className === 'deleteButton') {
            //run handlers.deleteTodo(position).
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    });
  }
};

view.setUpEventListeners();


















































