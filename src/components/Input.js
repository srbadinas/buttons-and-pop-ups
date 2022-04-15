function Input({ type, name, onChange, wrongAnswer }) {
  return (
    <div style={{display: 'inline-flex', flexDirection: 'column'}}>
      <input type={type} name={name} onChange={onChange}/>
      {
        (wrongAnswer && (<div style={{color: 'red'}}>Wrong Answer</div>))
      }
    </div>
  )
}

export default Input