

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What to do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <p>Options hier:</p>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <p>Add option</p>
    )
  }
}

const jsx = (
  <div className="ma3 sans-serif dark-blue">
    <h1>Title</h1>
    <Header />
    <Options />
    <AddOption />
    <Action />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))