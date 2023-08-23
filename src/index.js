import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { SWRConfig } from 'swr'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <SWRConfig
                    value={{
                        fetcher: (path) =>
                            axios(`https://dummyjson.com/products/` + path).then(
                                (r) => r.data
                            )
                    }}
                >
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </SWRConfig>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)
