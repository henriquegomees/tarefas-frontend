
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTasks } from 'store/tasks/actions'

import TaskItem from './TaskItem'

import './tasks.css'

function Tasks({ tasks, fetchTasks }){
    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    return (
        <ul className="tasks-list">
            {
                tasks.length === 0
                ? <p>Nenhuma tarefa disponível</p>
                : tasks.map(task => 
                    <TaskItem key={task.id} task={task} />)
            }
        </ul>
    )
}

const mapStateToProps    = state => ({ tasks: state.tasks.tasks })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchTasks }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
