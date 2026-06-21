import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, onLogout }) => {
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen flex flex-col'>
            
            <Header onLogout={onLogout} data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeeDashboard
