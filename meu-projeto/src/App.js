import './App.css';

function App() {
  const name = 'Vinicius'
  const newName = name.toUpperCase()
  
  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá, {newName}</h1>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );


}

export default App;
