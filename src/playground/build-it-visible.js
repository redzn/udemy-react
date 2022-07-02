let toggleState = false;
const toggleDetails = () => {
  toggleState = !toggleState;
  renderPage()
};

const renderPage = () => {
  const element = (
    <div className="ma3 sans-serif">
      <h1>Visible Element</h1>
      {toggleState && <p>Lorem dicksum</p>}
      <button onClick={toggleDetails}>
        {toggleState ? 'Hide details' : 'Show details' }
      </button>
    </div>
  )

  const appRoot = document.getElementById('app')
  ReactDOM.render(element, appRoot)
}

renderPage()





