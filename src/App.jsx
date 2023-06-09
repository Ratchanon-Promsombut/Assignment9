import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./components/List"
import TypeMe from "./components/TypeMe"
import MyForm from "./components/myForm"
function App() {
    const users = [
      {
        name: "John Yaslen",
        job: "Engineer",
        hobby: "Listening to music"
      },
      {
        name: "John Brick",
        job: "Engineer",
        hobby: "Listening to music"
      },
      {
        name: "P nhum Gun Jonhn",
        job: "Engineer",
        hobby: "Listening to music"
      }];
  return (
    <div>
    <List users={users}/>
    <TypeMe/>
    <MyForm/>
    </div>
  )
}

export default App