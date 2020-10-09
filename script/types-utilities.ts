// Utilitarios de tipos
type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

// Readonly: Só pode ler
const todo: Readonly<Todo> = {
    title: "Assitir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
}

// Patial: Definie props como optional
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>)
{
    return {...todo, ...fieldsToUpdate};
}

const todo2: Todo = updateTodo(todo, {completed: true});

// Pick: Pega algumas props
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};

// Omit: Omite o que informar
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};