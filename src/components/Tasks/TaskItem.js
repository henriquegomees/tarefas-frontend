
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeTask } from 'store/tasks/actions'

import CustomButtom from 'objects/Button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TaskItem({task, removeTask}){
    const {title, isCompleted, id, fileDownloadUrl} = task
    const [opacity, toggleOpc] = useState(false)

    return(
        <li className={`task-item ${isCompleted ? 'complete' : ''}`} onClick={() => toggleOpc(!opacity)}>
            <div className="task-item-infos">
                <h2>{ title }</h2>
                <CustomButtom icon={faTrash} title="Excluir" onClick={()=> removeTask({id})}/>
            </div>

            { 
                fileDownloadUrl !== null&& 
                <figure className={`${opacity ? 'show' : ''}`}>
                    <img src={fileDownloadUrl} alt=""/> 
                </figure>
            }
        </li>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({removeTask}, dispatch)
export default connect(null, mapDispatchToProps)(TaskItem)
