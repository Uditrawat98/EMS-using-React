const data = {
"employees": [
{
"id": 1,
"email": "[employee1@example.com](mailto:employee1@example.com)",
"password": "123",
"taskCount": {
"active": 2,
"newTask": 1,
"completed": 1,
"failed": 0
},
"tasks": [/* same as your data */]
},
{
"id": 2,
"email": "[employee2@example.com](mailto:employee2@example.com)",
"password": "123",
"taskCount": {
"active": 2,
"newTask": 1,
"completed": 1,
"failed": 1
},
"tasks": [/* same as your data */]
},
{
"id": 3,
"email": "[employee3@example.com](mailto:employee3@example.com)",
"password": "123",
"taskCount": {
"active": 3,
"newTask": 2,
"completed": 1,
"failed": 1
},
"tasks": [/* same as your data */]
},
{
"id": 4,
"email": "[employee4@example.com](mailto:employee4@example.com)",
"password": "123",
"taskCount": {
"active": 2,
"newTask": 1,
"completed": 1,
"failed": 0
},
"tasks": [/* same as your data */]
},
{
"id": 5,
"email": "[employee5@example.com](mailto:employee5@example.com)",
"password": "123",
"taskCount": {
"active": 4,
"newTask": 2,
"completed": 1,
"failed": 1
},
"tasks": [/* same as your data */]
}
]
}


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(data.employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}