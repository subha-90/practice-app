import Header from "./components/Header";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <p>Current Year: {new Date().getFullYear()}</p>
    </>
  );
}

export default App
