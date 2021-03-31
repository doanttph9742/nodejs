import ProductAPI from '../api/ProductApi.js';
import CategoryAPI from '../api/catagoryAPI.js'
import { parseRequestUrl,$ } from '../utils.js';
import firebase from '../firebase'

const ProductAddPage = {
    async render() {//sử dụng phương thức render
    const {data:categories} = await CategoryAPI.getAll()
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
                        <h1>Thêm sản phẩm</h1>
                        <div id="form-add" class="card-box mb-30">
        <div class="container" style="width: 500px">
		<form action="" method="POST" enctype="multipart/form-data" class="">
                <b>Tên Sản Phẩm </b>
                    <input type="text" id="product-name" class="form-control" placeholder="Nhập tên sản phẩm . . ."><br>
                <b>Giá Sản Phẩm</b>
                    <input type="text" id="product-price" class="form-control" placeholder="Nhập giá sản phẩm"><br>
                <b>Loại Sản Phẩm</b>
                    <select id="product-categoryId" class="form-control">
                        
                        ${categories.map(item =>{
                            return `
                            <option value="${item.id}">${item.name}</option>
                            `
                            
                        })}
                    </select> <br>
                <b> Ảnh Sản Phẩm</b>
                    <input type="file" id="product-image" class="form-control"><br>
                <b>Mô Tả</b>
                    <input type="text" id="product-description" class="form-control" placeholder="Nhập mô tả sản phẩm"><br>
                
                    
            <input type="submit" value="Thêm sản phẩm" class="btn btn-primary">
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
             const productImage=$('#product-image').files[0];//truy cập vào phần tử số 0
                let storageRef= firebase.storage().ref(`images/${productImage.name}`);//truy cập vào firebase r tạo file images
                storageRef.put(productImage).then(function(){//upload thành công thì hiển thị ra upoad thành công
                // console.log('upload thành công');
                storageRef.getDownloadURL().then((url)=>{//lấy địa chỉ ảnh về và gán vào biến url
                    const newProduct={
                        id:Math.random().toString(36).substr(2,9),
                        name:$('#product-name').value,
                        image:url,
                        categoryId:$('#product-categoryId').value,
                        price:$('#product-price').value,
                        description:$('#product-description').value,
                        status:$('#product-status').value,
                        "quantity": 51117
                    };
                    
                    ProductAPI.add(newProduct);//add vào api
                    window.location.hash='/listproduct'//chuyển về trang listproduct
                })
            })


            
            
        })
    }
}
export default ProductAddPage;
