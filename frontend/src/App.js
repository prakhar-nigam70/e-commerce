import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

//components:
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//publicly available pages
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import RegisterPage from "./pages/RegisterPage";

//admin protected routes
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChartsPage from "./pages/admin/AdminChartsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserpage from "./pages/admin/AdminEditUserpage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

//user protected routes
import UserCartDetailspage from "./pages/user/UserCartDetailspage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route element={<RoutesWithUserChatComponent/>}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/product-list" element={<ProductList/>} />
          <Route path="/product-details" element={<ProductDetails/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="*" element='Page not found 404' />
        </Route>

        {/* user protected routes */}
        <Route element={<ProtectedRoutesComponent admin={false}/>} >
          <Route path="/user" element={<UserProfilePage/>} />
          <Route path="/user/my-orders" element={<UserOrdersPage/>} />
          <Route path="/user/cart-details" element={<UserCartDetailspage/>} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage/>} />
        </Route>
        

        {/* admin protected routes */}
        <Route element={<ProtectedRoutesComponent admin={true}/>} >
          <Route path="admin/users" element={<AdminUsersPage/>} />
          <Route path="admin/edit-user" element={<AdminEditUserpage/>} />
          <Route path="admin/products" element={<AdminProductsPage/>} />
          <Route path="admin/create-new-product" element={<AdminCreateProductPage/>} />
          <Route path="admin/edit-product" element={<AdminEditProductPage/>} />
          <Route path="admin/orders" element={<AdminOrdersPage/>} />
          <Route path="admin/order-details" element={<AdminOrderDetailsPage/>} />
          <Route path="admin/charts" element={<AdminChartsPage/>} />
          <Route path="admin/analytics" element={<AdminAnalyticsPage/>} />
        </Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    
  );
}

export default App;
