/*
    Partial<T>
    Typeのすべてのプロパティがオプションに設定された型を構築する
    指定された型の全てのサブセットを表す型を返す
 */

interface Todo {
    title: string
    description: string
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return {
        ...todo,
        ...fieldsToUpdate
    }
}

const todo1: Todo = {
    title: "organize desk",
    description: "clear clutter"
}

const todo2 = updateTodo(todo1, {
    description: "throw out trash"
})

// Partial<T>のT部分がoptionalになる
console.log(todo2)
// {
//     "title": "organize desk",
//     "description": "throw out trash"
// }