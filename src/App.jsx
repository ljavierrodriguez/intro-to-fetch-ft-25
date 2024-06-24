import React, { useEffect, useState } from 'react'

const App = () => {

    const [users, setUsers] = useState(null)
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        getUsers()
        getTodos()
    }, [])

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'GET', // GET, POST, PUT, DELETE
            // body: JSON.stringify(data), // POST, PUT
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                //console.log(response)
                if (response.status === 404) {
                    throw new Error('Recurso no encontrado (users)')
                }
                return response.json()
            })
            .then((data) => {
                //console.log(data)

                setUsers(data)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getTodos = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status === 404) {
                throw new Error('Recurso no encontrado (todos)')
            }

            const data = await response.json()

            setTodos(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div>App</div>
        <button onClick={getUsers}>Buscar Usuarios</button>
        <ul>
            {
                !!users &&
                users.map((user) => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })
            }
        </ul>
        <ol>
            {
                !!todos &&
                todos.map((todo) => {
                    return (
                       <li key={todo.id}>{todo.title}</li>
                    )
                })
            }
        </ol>
        </>
    )
}

export default App