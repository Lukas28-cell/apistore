import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
{/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"/> */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
<App />
</Provider>
  </StrictMode>,
)
