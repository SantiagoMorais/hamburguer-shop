import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "./pageHome"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />}/>
            </Routes>
        </BrowserRouter>
    )
}