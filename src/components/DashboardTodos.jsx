import { useState, useEffect } from "react"
import  useFetch  from "./useFetch"

const DashboardTodos = () => {
    const [todos, setTodos] = useState([])
    const {data:tds, loading, error, setError} = useFetch('https://jsonplaceholder.typicode.com/todos')
    const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users')

    useEffect(()=>{
      setTodos(tds)
    },[tds])

    if( loading) return <p>Loading todos...</p>
    if (error) return <p>Error: {error}</p>
    async function handleTodo(formData)
    {
        const tdo = formData.get('myTodo')
        if(!tdo.trim()) return
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/todos',
            {
              method: 'POST',
              headers:{
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(
                {
                  title: tdo,
                  completed: false,
                  userId: 1
                }
              )
            }

          )
          const newTodo = await response.json()
          setTodos(prev=>[...prev, newTodo])
        }
        catch(err){
          setError(err.message)
        }

    }

    function handleCompleted(id)
    {
        setTodos(prev=>prev.map(todo=>todo.id===id?{...todo, completed: !todo.completed}:todo))
    }

    function handleDelete(id)
    {
        setTodos(prev=>prev.filter(todo=>todo.id!==id))
    }
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Todos</h2>
        <p className='text-gray-600'>Manage and track your tasks</p>
      </div>

      <form action={handleTodo} className='mb-6 flex gap-4'>
        <input name="myTodo"
          type='text' 
          placeholder='Add a new todo...' 
          className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
        />
        <button className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition'>
          Add Todo
        </button>
      </form>

      <div className='space-y-3'>
        {todos.length === 0? (
          <p>No todos yet. Add one to get started</p>
        )
        :(todos.map((item) => (
          <div key={item.id} className='bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition'>
            <input type='checkbox' checked={item.completed} className='w-5 h-5 cursor-pointer' onChange={()=>handleCompleted(item.id)} />
            <div className='flex-1'>
              <p className={`text-gray-900 ${item.completed?'line-through': ''} font-medium`}>{item.title}</p>
              <p className='text-gray-500 text-sm'>User: {(users.find(u=>u.id===item.userId)?.username||'Unknown user')}</p>
            </div>
            <button onClick={()=>handleDelete(item.id)} className='px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition'>
              Delete
            </button>
          </div>
        ))
        )}
      </div>
    </div>
  )
}

export default DashboardTodos
