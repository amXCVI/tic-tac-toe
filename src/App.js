import React from 'react'
import './App.css'
import FieldContainer from './components/Field/FieldContainer'
import UserContainer from './components/User/UserContainer'

const App = () => {
    return (
        <div className="App">
            <UserContainer />
            <FieldContainer />
        </div>
    )
}

export default App
