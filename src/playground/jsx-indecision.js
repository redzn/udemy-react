const app = {
  title: 'App van udeemy',
  subtitle: 'Dit is een subtitle',
  options: []
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber]
}

const render = () => {

  const template = (
    <div className="ma3 bg-light-gray pa3 sans-serif">
      <h1 className='sans-serif mark-pro dark-blue ttu '>{app.title}</h1>
      {app.subtitle && (<p>{app.subtitle}</p>)}
      {app.options.length > 0 ? (<p>Here are your options</p>) : (<p>No options</p>)}
      <div className="mv3">
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove all</button>
      </div>
      {app.options.length > 0 && (
        <div>
          <ol>
          {
            app.options.map((number, i) => {
              return <li key={i}>{number}</li>
            })
          }
          </ol>
        </div>
      )}
  
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" autoFocus />
        <button>Add option</button>
      </form>
  
    </div>
  )

  ReactDOM.render(template, appRoot);
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value
  if (option) { 
    app.options.push(option) 
    e.target.elements.option.value = '';
    render()
  }
};




const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);

render()