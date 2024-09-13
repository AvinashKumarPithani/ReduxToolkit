import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todos() {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    return (
        <>
            <ul className='List-none'>
                {todos.map((todo) => (
                    <li
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d="M6 18.75a.75.75 0 01-.75-.75v-10.5a.75.75 0 01.75-.75h11.25a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6zm-2.25-13.5a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v.75h-17.5v-.75z"
                                />
                            </svg>
                        </button>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos