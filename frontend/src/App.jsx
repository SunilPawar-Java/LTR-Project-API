import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/home/Home.jsx";
import Layout from "./layout/Layout.jsx";
import About from "./components/pages/about/About.jsx";
import Login from "./components/pages/Login.jsx";
import  Product from "./components/pages/product/Product.jsx"
import Products from "./components/pages/product/Products.jsx";
import Gallery from "./components/pages/product/Gallery.jsx";
import BodyMeasurementForm from "./components/pages/product/BodyMeasurementForm.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/products"  element={<Products />}>
                        <Route index element={<Gallery />}/>
                        <Route path="/products/gallery" element={<Gallery />}/>
                        <Route path="/products/product/:id" element={<Product />}/>
                        <Route path="/products/bodymeasurement" element={<BodyMeasurementForm />}/>
                    </Route>
                </Route>
                <Route path="*" element={<h1> page not found </h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
export default App
