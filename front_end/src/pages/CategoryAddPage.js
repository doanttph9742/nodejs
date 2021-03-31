import CategoryAPI from '../api/catagoryAPI.js'
import { parseRequestUrl,$ } from '../utils.js';
const CategoryAddPage = {
    async render() {
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
                    <div class="main-content">
                        <h1>Thêm Danh Múc</h1>
                        <div id="form-add" class="card-box mb-30">
        <div class="container" style="width: 500px">
		<form action="" method="POST" enctype="multipart/form-data" class="">
                <b>Tên danh mục </b>
                    <input type="text" id="categories-name" class="form-control" placeholder="Nhập tên danh mục . . ."><br>
            <input type="submit" value="Thêm danh mục" class="btn btn-primary">
        </form>
			</div>
			</div>
                    </div>
                </div>
        </div>
    `
    },
    async afterRender(){
    
        $('#form-add').addEventListener('submit',async e=>{
             e.preventDefault();
                    const newCategory={
                        id:Math.random().toString(36).substr(2,9),
                        name:$('#categories-name').value,
                    };
                    
                    CategoryAPI.add(newCategory);
                    window.location.hash='/listcategory'
                
            })
    }
}
export default CategoryAddPage;
