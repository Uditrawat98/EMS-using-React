const stats = [
    { count: 1, label: 'New Task', bg: 'bg-blue-500' },
    { count: 3, label: 'Completed Task', bg: 'bg-green-500' },
    { count: 0, label: 'Accepted Task', bg: 'bg-yellow-500' },
    { count: 0, label: 'Failed Task', bg: 'bg-red-500' },
]

const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex justify-between gap-5 mt-10 w-full'>
            {stats.map(({ count, label, bg }) => (
                <div key={label} className={`rounded-xl flex-1 py-6 px-9 ${bg}`}>
                    <h2 className='text-3xl font-semibold'>{count}</h2>
                    <h3 className='text-xl font-medium'>{label}</h3>
                </div>
            ))}
        </div>
    )
}

export default TaskListNumbers
