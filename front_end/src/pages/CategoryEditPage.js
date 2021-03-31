import CategoryAPI from '../api/catagoryAPI.js';
import { parseRequestUrl,$ } from '../utils.js';
const CategoryEditPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: category } = await CategoryAPI.get(id);
        console.log(category);
        return /*html*/`
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
                    <div class="main-content">
                        <h1>Sửa danh phẩm</h1>
                        <div id="form-update-category" class="card-box mb-30">
                    <div class="container" style="width: 500px">
			<form action="" method="POST" enctype="multipart/form-data" class="">
                        <b>Tên Danh Mục </b>
                        <input type="text" id="categories-name" class="form-control" value="${category.name}"><br>
            <input type="submit" value="Sửa sản phẩm" class="btn btn-primary">
        </form>
			        </div>
                </div>
                </div>
            </div>
        </div>
        `
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: category } = await CategoryAPI.get(id);

        $('#form-update-category').addEventListener('submit',(e)=>{
            e.preventDefault();
            console.log('old',category);
            const newCategory={
                id:Math.random().toString(36).substr(2,9),
                name:$('#categories-name').value,
                
            };
            console.log('new',newCategory);
            CategoryAPI.update(id,newCategory);
            window.location.hash='/listcategory'
        })
    }
};
export default CategoryEditPage;