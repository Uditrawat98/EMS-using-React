import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const {userData, setUserData} = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] h-48 p-5 mt-5 rounded'>
            <div className='bg-red-400 mb-2 py-3 px-4 flex justify-between rounded-lg'>
                <h2 className='w-1/5 text-lg font-semibold'>Employee Name</h2>
                <h3 className='w-1/5 text-xl font-bold mt-2'>New Task</h3>
                <h5 className='w-1/5 mt-2'>Active Task</h5>
                <h5 className='w-1/5 mt-2'>Completed</h5>
                <h5 className='w-1/5 mt-2'>Failed</h5>
            </div>

            <div className='h-[80%] overflow-y-auto'>
                {userData?.employees?.map((elem, idx) => {
                    const displayName = elem.firstName || elem.email?.split('@')[0] || `Employee ${idx + 1}`
                    const tasks = elem.tasks || []
                    const newCount = elem.taskCount?.new ?? tasks.filter(t => t.newTask).length
                    const activeCount = elem.taskCount?.active ?? tasks.filter(t => t.active).length
                    const completedCount = elem.taskCount?.completed ?? tasks.filter(t => t.completed).length
                    const failedCount = elem.taskCount?.failed ?? tasks.filter(t => t.failed).length

                    return (
                        <div key={idx} className='mb-2 py-3 px-4 flex justify-between rounded-lg border border-green-500 bg-[#111]'>
                            <h2 className='w-1/5 text-lg font-semibold text-white'>{displayName}</h2>
                            <h3 className='w-1/5 text-blue-500 text-xl font-bold mt-2'>{newCount} new</h3>
                            <h5 className='w-1/5 text-yellow-500 mt-2'>{activeCount} active</h5>
                            <h5 className='w-1/5 text-white mt-2'>{completedCount} done</h5>
                            <h5 className='w-1/5 text-red-500 mt-2'>{failedCount} failed</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask