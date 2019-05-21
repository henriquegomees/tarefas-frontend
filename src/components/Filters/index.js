
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterComplete, filterPending, fetchTasks } from 'store/tasks/actions'

import './filter.css'

function Filters({ filterComplete, filterPending, fetchTasks }){
    const handleFilterClick = (event, filterMethod) => {
        let filters = document.querySelectorAll('.filter')

        filters.forEach(el => el.setAttribute('class', 'filter'))

        event.target.setAttribute('class', 'filter active')

        return filterMethod()
    }

    return(
        <div className="filters-wrapper">
            <a href="#" className="filter active" onClick={e => handleFilterClick(e, fetchTasks)}>Todos</a>
            <a href="#" className="filter" onClick={e => handleFilterClick(e, filterPending)}>Pendentes</a>
            <a href="#" className="filter" onClick={e => handleFilterClick(e, filterComplete)}>Feitos</a>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ filterComplete, filterPending, fetchTasks }, dispatch)
export default connect(null, mapDispatchToProps)(Filters)