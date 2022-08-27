import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentContextProvider from './context/CommentContext'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CommentContextProvider>
            <App />
        </CommentContextProvider>
    </React.StrictMode>
)
