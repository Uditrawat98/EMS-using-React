const NewTask = ({ task }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
                    {task?.category || 'High'}
                </h3>
                <h4 className='text-sm'>{task?.taskDate || '20 Feb 2024'}</h4>
            </div>

            <h2 className='mt-5 text-xl font-semibold'>
                {task?.taskTitle || 'Make a youtube video'}
            </h2>

            <p className='text-sm mt-2'>
                {task?.taskDescription ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            </p>

            <div className='mt-4'>
                <button className='bg-green-600 text-white px-3 py-1 rounded text-sm'>
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask
