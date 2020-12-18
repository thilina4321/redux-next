import React from 'react'
import Burger from './components/Burger/Burger'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'

const App = () => {
    return (
        <div>
        <div style={{textAlign:'center'}}><h1> Available Meals </h1>  </div>
            <Burger />
            <BurgerBuilder/>    
        </div>
    )
}

export default App
