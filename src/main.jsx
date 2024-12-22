import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)