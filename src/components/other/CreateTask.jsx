import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {
    const {userData, setUserData} = useContext(AuthContext)
    

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setTask({
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            assignedTo: assignedTo,
            category: category,
            active: false,
            newTask: true,
            failed: true,
            completed: false
        });
const data= JSON.parse(localStorage.getItem('employees'))
console.log(userData.employees);

data.forEach(function(elem){
if(assignedTo === elem.firstName){
    elem.tasks.push(newTask)
    elem.taskCounts.newTask = elem.taskCounts.newTask + 1
}
})
setUserData(data)

setTaskTitle('')
setTaskDescription('')
setTaskDate('')
setAssignedTo('')
setCategory('')
    }

    const inputClass =
        'w-full bg-[#121212] border border-gray-600 rounded-md placeholder:text-gray-500 text-white px-3 py-2.5 outline-none focus:border-gray-400 transition-colors'

    return (
        <div className='mt-10 bg-[#1C1C1C] rounded-lg p-8'>
            <form onSubmit={submitHandler} className='admin-form grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h3 className='text-sm mb-1.5 text-gray-300'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                            type='text'
                            placeholder='Make a UI design'
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm mb-1.5 text-gray-300'>Date</h3>
                        <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
                            type='date'
                            placeholder='dd/mm/yyyy'
                            className={`${inputClass} [color-scheme:dark]`}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm mb-1.5 text-gray-300'>Assign to</h3>
                        <input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}
                            type='text'
                            placeholder='employee name'
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <h3 className='text-sm mb-1.5 text-gray-300'>Category</h3>
                        <input
                            value={category} onChange={(e) => setCategory(e.target.value)}
                            type='text'
                            placeholder='design, dev, etc'
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col flex-1'>
                        <h3 className='text-sm mb-1.5 text-gray-300'>Description</h3>
                        <textarea
                            rows={12}
                            className={`${inputClass} resize-none flex-1 min-h-[220px] lg:min-h-[280px]`}
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-[#52b788] text-white text-sm font-medium py-3 rounded-md hover:opacity-90 transition-opacity'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask