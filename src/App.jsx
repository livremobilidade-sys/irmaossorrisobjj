import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './context/ContentContext'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'

export default function App() {
    return (
        <ContentProvider>
            <Router basename={import.meta.env.BASE_URL}>
                <div className="app-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </div>
            </Router>
        </ContentProvider>
    )
}
