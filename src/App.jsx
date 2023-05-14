import { useState, createContext } from 'react'
import './App.css'
import Top from './components/Top'
import Input from './components/Input'
import ClearList from './components/ClearList'

function App() {

  return (
    <section className='todo'>
    <Top />
    <Input />
    <ClearList />
    </section>
  )
}

export default App
