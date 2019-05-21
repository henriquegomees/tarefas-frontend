
import TasksService from 'services/TasksService'

const fetchTasks = async () => {
    const tasks = await TasksService.fetchAllTasks()

    return dispatch => dispatch({
        type: 'FETCH_ALL_TASKS',
        data: tasks
    })
}

const filterComplete = async () => {
    const tasks = await TasksService.fetchAllTasks()

    return dispatch => dispatch({
        type: 'FILTER_COMPLETE',
        data: tasks.filter(task => task.isCompleted)
    })
}

const filterPending = async () => {
    const tasks = await TasksService.fetchAllTasks()

    return dispatch => dispatch({
        type: 'FILTER_PENDING',
        data: tasks.filter(task => !task.isCompleted)
    })
}

const addTask = async ({title}) => {
    await TasksService.add({title})
    return dispatch => dispatch(fetchTasks())
}

const removeTask = async ({id}) => {
    await TasksService.remove({id})
    return dispatch => dispatch(fetchTasks())
}

export {
    fetchTasks,
    filterComplete,
    filterPending, 
    addTask, 
    removeTask
}
