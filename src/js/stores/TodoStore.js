import {EventEmitter} from "events";

class TodoStore extends EventEmitter{
  constructor(){
    super();
    console.log("TodoStore");
    console.log(this);
    this.todos =
    [
      {
        id: 1134654812,
        text: 'Go Shopping',
        complete: false
      },
      {
        id: 1134655112,
        text: 'Pay Bills',
        complete: false
      }
    ];
  }
  getAll(){
    console.log("getAll");
    return this.todos;
  }
}
const todoStore = new TodoStore;
export default todoStore;
