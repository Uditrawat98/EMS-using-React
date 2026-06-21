import Header from '../other/Header'
import AllTask from '../other/AllTask.jsx'
import CreateTask from '../other/CreateTask.jsx'

const inputClass =
    'w-full bg-[#121212] border border-gray-600 rounded-md placeholder:text-gray-500 text-white px-3 py-2.5 outline-none focus:border-gray-400 transition-colors'

const AdminDashboard = () => {
    return (
        <div className='min-h-screen w-full p-10 bg-black'>
            <Header />
            
            <CreateTask />
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
