import CategoryAPI from "../api/catagoryAPI";
import { reRender,$ } from "../utils";

const Category ={
   async render(){
        const{data : categories}=await CategoryAPI.getAll();
        return /*html*/`
                        
        <div class="product-items">
        <div class="buttons">
            <a href=".#/addcategory">Thêm Danh Mục</a>
        </div>
        <ul>
                    <li class="product-item-heading">
                        
                        <div class="product-prop product-name">Tên Danh Mục</div>
                        <div class="product-prop product-button">
                            Xóa
                        </div>
                        <div class="product-prop product-button">
                            Sửa
                        </div>
                        
                        
                        <div class="clear-both"></div>
                    </li>
                    <li>
                    ${categories.map((category,index) =>{
                        return`
                        
                        <div class="product-prop product-name">${category.name}</div>
                            <div class="product-prop product-button">
                                <button class="btn btn-danger btn-remove" data-id="${category._id}">Xóa</button>
                            </div>
                            <div class="product-prop product-button">
                                <a href="/#/editcategory/${category._id}">Sửa</a>
                            </div>
                        
                        
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
            const id= btn.dataset.id;
            btn.addEventListener('click',function(){
                const question=confirm('bạn có chắc chắn xóa không');
                if(question){
                    CategoryAPI.remove(id);
                    reRender(ListCategory,'#product-items');
                }
                
            })
        })
    }
}
export default Category;