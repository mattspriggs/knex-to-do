import * as db from './db.js'

export async function list() {
  try {
    const todos = await db.getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function done(id) {
  try {
    console.log(id)
    await db.deleteTask(id)
  } catch (error) {
    console.log(error.message)
  } finally {
    db.close()
  }
}

export async function add(task) {
  try {
    await db.addTask(task)
  } catch (error) {
    console.log(error.message)
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
