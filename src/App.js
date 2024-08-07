import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Regist from "./pages/Regist";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Header />
      <hr className="separator" />
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/products?item={search-data}" element={<Search />} /> */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/detail?itemId={productId}" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
