import ListProduct from "../components/ListProduct.js";

const AdminProductPage={
    async render(){
        return/*html*/`
        <div id="content-wrapper">
                <div class="container">
                    <div class="left-menu">
                        <div class="menu-heading">Admin Menu</div>
                                    <div class="menu-items">
                                        <ul>
                                        <li><a href="./#/listproduct">Quản lí sản phẩm</a></li>
                                        <li><a href="./#/listcategory">Quản lí danh mục</a></li>
                                        <li><a href="">Đơn hàng</a></li>
                                        </ul>
                                    </div>
                        </div>
                    <div class="main-content" id="list-products">
                        <h1>Danh sách sản phẩm</h1>
                        ${await ListProduct.render()}
                    </div>
                </div>
        </div>
        
        `
    },
    async afterRender(){
        return`${await ListProduct.afterRender()}`
    }
};
export default AdminProductPage;