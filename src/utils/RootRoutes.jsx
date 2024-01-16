import HomePage from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { Route, Routes } from "react-router-dom"

export const RootRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}