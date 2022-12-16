import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src='https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40' 
      />

      <div className={styles.profile}>
        <img className={styles.avatar}
        src='https://avatars.githubusercontent.com/u/46054637?v=4'
        />
        <strong>Matheus Grandi</strong>
        <span>Software Engieneer</span>
      </div>

      <footer className={styles.sidebar}>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}