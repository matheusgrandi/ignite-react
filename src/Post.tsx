interface IProps {
  author: string;
  content: string
}
export function Post(props: Object){
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
    </div>
  )
}

