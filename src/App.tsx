import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'


export function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='App'>

      <Header />
   
     <button onClick={() => setCount((count) => count +1)}>
      <h3>{count}</h3>
     </button>   
     <Post
        author="Matheus Grandi"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consequatur corporis magnam nesciunt eius atque optio laboriosam nostrum repudiandae accusamus sed tempore error magni vitae veritatis quaerat, modi sint. Sapiente?"
      />
      <Post
        author="Xuxa da Silva"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consequatur corporis magnam nesciunt eius atque optio laboriosam nostrum repudiandae accusamus sed tempore error magni vitae veritatis quaerat, modi sint. Sapiente?"
      />
   </div>
  )
}

