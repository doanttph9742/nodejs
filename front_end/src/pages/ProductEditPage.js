import ProductApi from '../api/ProductApi.js';
import { parseRequestUrl,$ } from '../utils.js';
import CategoryAPI from '../api/catagoryAPI.js'
const ProductEditPage = {
    async render() {
        const { id } = parseRequestUrl();//lấy id trên url
        const { data: product } = await ProductApi.get(id);//gắn id vào productAPI
        const {data:categories} = await CategoryAPI.getAll()
        console.log(product);
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
                        <h1>Sửa sản phẩm</h1>
                        <div id="form-update-product" class="card-box mb-30">
                    <div class="container" style="width: 500px">
			<form action="" method="POST" enctype="multipart/form-data" class="">
                        <b>Tên Sản Phẩm </b>
                        <input type="text" id="product-name" class="form-control" value="${product.name}"><br>
                    <b>Giá Sản Phẩm</b>
                        <input type="text" id="product-price" class="form-control" value="${product.price}"><br>
                    <b>Loại Sản Phẩm</b>
                        <select id="product-categoryId" class="form-control">
                        ${categories.map(item =>{//dùng vòng lặp
                            return `
                            <option value="${item.id}">${item.name}</option>
                            `
                        })}
                        </select> <br>
                        <b> Ảnh Sản Phẩm</b>
                    <input type="file" name="upload" class="form-control"><br>
                <b>Mô Tả</b>
                    <input type="text" id="product-description" class="form-control" value="${product.description}"<br>
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
        const { data: product } = await ProductApi.get(id);

        $('#form-update-product').addEventListener('submit',(e)=>{
            e.preventDefault();//chặn reload
            console.log('old',product);
            const newProduct={//tạo biến newProduct
                ...product,//lấy toàn bộ và chỉ update những thứ bên dưới
                name:$('#product-name').value,//lấy giá trị product-name
                categoryId:$('#product-categoryId').value,
                price:$('#product-price').value,
                description:$('#product-description').value,
                status:$('#product-status').value,
                "quantity": 51117
            };
            console.log('new',newProduct);
            ProductApi.update(id,newProduct);//update 
            window.location.hash='/listproduct' //reload về trang listproduct
        })
    }
};
export default ProductEditPage;