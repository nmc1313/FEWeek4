// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    //prevent default avoids refreshing the page which resets the state to the original list
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    //both "enter" and the enter button submit this
    <form>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add item..."
        onChange={e => setValue(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Enter</button>
    </form>
  )
}