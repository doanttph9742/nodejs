import ProductAPI from "../api/ProductApi";
import { reRender,$ } from "../utils";

const ListProduct ={
   async render(){
        const{data : products}=await ProductAPI.getAll();
        return /*html*/`
                <div class="product-items">
                            <div class="buttons">
                                <a href=".#/addproduct">Thêm sản phẩm</a>
                            </div>
                            <ul>
                                        <li class="product-item-heading">
                                            <div class="product-prop product-img" style="width: 110px;float: left;">Ảnh</div>
                                            <div class="product-prop product-name">Tên sản phẩm</div>
                                            <div class="product-prop product-button">
                                                Xóa
                                            </div>
                                            <div class="product-prop product-button">
                                                Sửa
                                            </div>
                                            
                                            <div class="product-prop product-time">Giá sản Phẩm</div>
                                            <div class="clear-both"></div>
                                        </li>
                                        <li>
                                        ${products.map((product,index) =>{
                                            return`
                                            <div class="product-prop product-img"style="width: 110px;
                                            height: 90px;
                                            float: left;"><img src="${product.image}" class="a"></div>
                                            <div class="product-prop product-name">${product.name}</div>
                                                <div class="product-prop product-button">
                                                    <button class="btn btn-danger btn-remove" data-id="${product._id}">Xóa</button>
                                                </div>
                                                <div class="product-prop product-button">
                                                    <a href="/#/editproduct/${product._id}">Sửa</a>
                                                </div>
                                            <div class="product-prop product-time">${product.price}</div>
                                            
                                            <div class="clear-both"></div>
                                            `
                                        }).join("")}
                                            
                                        </li>
                            </ul>
                            <div id="pagination">
			
	                        </div>            
                        </div>
                    `
    },
    async afterRender(){
        const btns =$('#list-products .btn');
        console.log(btns);
        btns.forEach(btn=>{
            const id= btn.dataset.id;//lấy id
            btn.addEventListener('click',function(){
                const question=confirm('bạn có chắc chắn xóa không');
                if(question){
                    ProductAPI.remove(id);
                    reRender(ListProduct,'#product-items');
                }
                
            })
        })
    }
}
export default ListProduct;