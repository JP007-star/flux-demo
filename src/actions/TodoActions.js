import dispatcher from "../dispatcher";

/* Create task function */
export function createTodo(text) {
dispatcher.dispatch({
	type: "CREATE_TODO",
	text,
});
}

/* Delete task function */
export function deleteTodo(id) {
dispatcher.dispatch({
	type: "DELETE_TODO",
	id,
});
}
