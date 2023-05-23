import { Routes as BrowserRouter, Route, Outlet } from "react-router-dom";
import DefaultLayout from "./layout/default";
import Access from "./pages/Access";
import CharacterDetail from "./pages/Characters/Detail";
import CharactersList from "./pages/Characters/List";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Access />} />
                <Route path="characters" element={<CharactersList/>} />
                <Route path="characters/:name" element={<CharacterDetail/>} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </BrowserRouter>
    )
}

export default Routes;