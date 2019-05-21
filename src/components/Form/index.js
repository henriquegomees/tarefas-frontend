
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTask } from 'store/tasks/actions'

import './form.css'

function TaskForm({addTask}){
    const [input, setInput] = useState()
    const [btnLabel, setLabel] = useState('Adicionar')

    const handleAddTask = async e => {
        e.preventDefault()
        if(!input){ return alert('Insira o nome da tarefa') }
        setLabel('Adicionando...')
        await addTask({ title: input })
        setLabel('Adicionar')
        setInput('')
    }

    return(
        <div className="form-control">
            <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="O que precisa ser feito?" />

            <input 
                type="button"
                value={btnLabel}
                disabled={btnLabel === 'Adicionar' ? false : true}
                onClick={e => handleAddTask(e)}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ addTask }, dispatch)
export default connect(null, mapDispatchToProps)(TaskForm)
