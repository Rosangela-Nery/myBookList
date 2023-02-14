import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { RegisterBook } from "./pages/RegisterBook";
import { Home } from "./pages/Home";
import { SearchBook } from "./pages/SearchBook";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/registerbook" element={<RegisterBook />} />
                
                    <Route path="/searchbook" element={<SearchBook />} />
            </Route>
        </Routes>
    )
}