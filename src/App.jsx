// Popular Websites that use React:

// Facebook
// Instagram
// WhatsApp Web

import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <h1 className="title">Hello World 👋</h1>
        <p className="year">
          Current Year: {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}

export default App;