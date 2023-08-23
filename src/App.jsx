import Layout from './components/layout/Layout'
import Missing from './components/missing/Missing'
import Home from './pages/Home'
import Dmg from './pages/Dmg'
import Helpdesk from './pages/Helpdesk'
import Media from './pages/Media'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/requireAuth/RequireAuth'
import PersistLogin from './components/persistLogin/PersistLogin'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<PersistLogin />}>
                <Route path="/" element={<Layout />}>

                    {/* we want to protect these routes */}
                    
                    <Route element={<RequireAuth />}>
                        <Route index element={<Home />} />

                        <Route path="/dmg" element={<Dmg />} />
                        <Route path="/helpdesk" element={<Helpdesk />} />
                        <Route path="/media" element={<Media />} />
                    </Route>
                </Route>
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Routes>
    )
}

export default App
