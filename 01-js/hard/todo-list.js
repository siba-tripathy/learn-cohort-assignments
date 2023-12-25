/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
	todoList = [];
	last = -1;

	add(todo) {
		this.todoList.push(todo);
		this.last++;
	}

	remove(indexOfTodo) {
		if (indexOfTodo > this.last) {
			console.log("ERROR: trying to remove todo for invalid index");
			return null;
		}
		for (let x = indexOfTodo; x<this.last; x++) {
			this.todoList[x] = this.todoList[x+1];
		}
		this.last--;
		this.todoList.pop();
	}

	update(index, updatedTodo) {
		if (index > this.last) {
			console.log("ERROR: trying to update invalid index todo");
			return null;
		}
		this.todoList[index] = updatedTodo;
	}

	getAll() {
		return this.todoList;
	}

	get(indexOfTodo) {
		if (indexOfTodo > this.last) {
			return null;
		}
		return this.todoList[indexOfTodo];
	}

	clear() {
		this.todoList = [];
		this.last = -1;
	}
}

module.exports = Todo;
