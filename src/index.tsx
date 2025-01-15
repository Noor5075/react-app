
import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useEffect } from 'react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {

  
  useEffect(() => { fetch('http://localhost:8000').then(res => console.log('Res', res)).catch(err => console.log("Error", err)) }, [])

  return <div>Noor</div>
}

root.render(
  <App />
);
