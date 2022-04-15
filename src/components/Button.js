function Button({ object, text, style, type, onClick }) {

  return (
    <button onClick={() => { onClick && onClick(object) }} style={style} type={type}>{ text }</button>
  )
}

export default Button