import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl,$ } from './utils.js';
import HomePage from './pages/Homepage.js';
import Header from './components/Header.js';
import ProductsDetail from './pages/ProductDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import ProductEditPage from './pages/ProductEditPage.js';
import CategoryAddPage from './pages/CategoryAddPage.js';
import AdminCategoryPage from './pages/AdminCategoryPage.js'
import CategoryEditPage from './pages/CategoryEditPage.js';
import Contact from './pages/Contact.js';

const routes = {
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id': ProductsDetail,
    '/category/:id': CategoryPage,
    '/addproduct': ProductAddPage,
    '/addcategory':CategoryAddPage,
    '/listproduct': AdminProductPage,
    '/editproduct/:id':ProductEditPage,
    '/listcategory':AdminCategoryPage,
    '/editcategory/:id':CategoryEditPage,
    '/contact':Contact,
    
    

    
    
}
const router = async()=>{
    const { resource , id} = parseRequestUrl();
    const parseUrl=(resource ? `/${resource}`:'/')+(id ? '/:id' :'');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
   
    $('#header').innerHTML= await Header.render();
    $('#main-content').innerHTML=await Contact.render();
    $('#main-content').innerHTML = await page.render();

    if (page.afterRender) {
        await page.afterRender();
    }
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)
