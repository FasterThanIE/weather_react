import './App.css';
import Weather from "./Weather";

function App() {

    const title = "Test title";


  return (
    <div className="App">
        <Weather></Weather>
      <div className="content">
          <h1>{ title }</h1>
      </div>
    </div>
  );
}

export default App;
