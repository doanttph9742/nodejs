import ProductApi from '../api/ProductApi.js';
const HomePage ={
    
    async render(){
        const { data: products } = await ProductApi.getAll();
        return`
            <div class="row" style ="padding:0px 13px 10px 11px">
                <div class="column" onclick="openTab('b1');" style="background:#A9A9A9;">Sản Phẩm Mới Nhất</div>
                <div class="column" onclick="openTab('b2');" style="background:#A9A9A9;">Sản Phẩm Bán Chạy</div>
            </div>
<div id="b1" class="containerTab" style="display:none">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">x</span>
  ${products.map(product => `
            <div class="product-item">
                <div class="product-img">
                    <img src="${product.image}" title="${product.name}">
                </div>
             <strong><a href=""style="color:black">${product.name}</a></strong><br>
             <label style="color:black">Giá: </label><span class="product-price">${product.price}</span><br>
             <p style="color:black">${product.description}</p>
             <div class="buy-button">
                 <a href="/#/products/${product._id}">Xem sản phẩm</a>
             </div>
         </div>
                    `).join("")}


</div>

<div id="b2" class="containerTab" style="display:none">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">x</span>
  
</div>
        `
       
    }
}
export default HomePage;