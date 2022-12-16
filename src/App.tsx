import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'


export function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>      
          <Post
             author="Matheus Grandi"
             content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consequatur corporis magnam nesciunt eius atque optio laboriosam nostrum repudiandae accusamus sed tempore error magni vitae veritatis quaerat, modi sint. Sapiente?"
           />
           <Post
             author="Xuxa da Silva"
             content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consequatur corporis magnam nesciunt eius atque optio laboriosam nostrum repudiandae accusamus sed tempore error magni vitae veritatis quaerat, modi sint. Sapiente?"
           />
        </main>
      </div>
   

   </div>
  )
}

