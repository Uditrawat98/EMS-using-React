const FailedTask = ({ task }) => {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[300px] bg-yellow-300 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
                    {task?.category || 'High'}
                </h3>
                <h4 className='text-sm'>{task?.taskDate || '20 Feb 2024'}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                {task?.taskTitle || 'Make a YouTube Video'}
            </h2>
            <p className='text-sm mt-2 leading-snug'>
                {task?.taskDescription ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-green-500 py-1 px-2 text-sm'>
                    Complete
                </button>
            </div>
        </div>
    )
}

export default FailedTask
