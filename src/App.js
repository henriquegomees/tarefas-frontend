
import React from 'react'

import TaskForm from 'components/Form'
import Filters from 'components/Filters'
import Tasks from 'components/Tasks'

function App() {
  return (
    <div className="wrapper">
      <TaskForm />

      <div className="content">
        <Filters />

        <Tasks />
      </div>
    </div>
  )
}

export default App
