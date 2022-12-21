import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface IProps {
  author: string;
  content: string
}

export function Post(props: IProps){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/matheusgrandi.png' hasBorder />
          <div className={styles.authorInfo}>
            <strong>Matheus Grandi</strong>
            <span>Software Engieneer</span>
          </div>
        </div>

        <time title ='16 de dezembro de 2022 às 16:47' dateTime='2022-12-16 16:47:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>

        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <a href='#'>#novoprojeto</a>{' '}
        <a href='#'>#nlw</a>{' '}
        <a href='#'>#rocketseat</a>{' '}

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>        
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>

  )
}

