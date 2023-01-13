import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface IProps {
  content: string
  onDeleteComment: Function
}



export function Comment({ content, onDeleteComment }: IProps) {

  function handleDeleteComment() {
  console.log('deletar')

  onDeleteComment(content)
}
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/diego3g.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title ='16 de dezembro de 2022 às 16:47' dateTime='2022-12-16 16:47:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>


          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}