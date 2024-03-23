import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "./pageHome"
import { PageOrder } from "./pageOrder"
import { PageAbout } from "./pageAbout"
import { PageChart } from "./pageChart"

export const AppRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />}/>
                <Route path="/order" element={<PageOrder />}/>
                <Route path="/about" element={<PageAbout />}/>
                <Route path="/chart" element={<PageChart />}/>
            </Routes>
        </BrowserRouter>
    )
}