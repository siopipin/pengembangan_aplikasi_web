//komponen routes

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Login from "./Login"
import About from "./About"
import PageNotFound from "./PageNotFound"
import Home from "./Home"

export const RoutesUtil = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </ Route>
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

