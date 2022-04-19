import "./App.css";
import AlertDelete from "./component/AlertDelete";
import UserShop from "./pages/UserShop";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./component/Navbar";
import NavbarAdmin from "./component/NavbarAdmin";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import EditCategory from "./pages/EditCategory";
import EditProduct from "./pages/EditProduct";
import Complain from "./pages/Complain";
import ComplainUser from "./pages/ComplainUser";
import AddProduct from "./pages/AddProduct";
import PrivateRoute from "./component/Routes/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropsProduct from "./component/PropsProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/Product" element={<Product />} />
          <Route path="/edit-Product" element={<EditProduct />} />
          <Route path="/home" element={<UserShop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
          <Route path="/edit-category" element={<EditCategory />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/complain-user" element={<ComplainUser />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
