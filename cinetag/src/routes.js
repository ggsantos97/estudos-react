import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/Favorites";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favoritos" element={<Favorites />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                    </Routes>
                    <Footer />
                </FavoritesProvider>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoutes;