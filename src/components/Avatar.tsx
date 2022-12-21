import styles from './Avatar.module.css'

interface IProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, src }: IProps) {
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}