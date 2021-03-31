import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils"

const ProductDetail = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);

        return `
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">                        
                        <img style="border: 1px solid #EEEEEE; padding: 15px; margin-top: 20px; margin-left: 70px" src="${product.image}" alt="" width="450" height="450">
                    </div>
                </div>
            </div>
            
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                
                <h4 style="margin-top: 20px"><b>${product.name}</b></h4>
                <hr>
            <span style="display: block;opacity: 80%">${product.description}</span>
                <hr>
            <div class="abc" style="font-size: 21px">
            <p>
                <label>
                    <b> Price :</b>
                </label>
                <span style=" margin-left: 73px" class="money">${product.price}</span><b>vnđ</b>
            </p>
            <p>
                <label>
                    <b> Status: </b>
                </label>
                <span style=" margin-left: 68px" class="money">
                    ${product.status}
                </span>
            </p>
            <p>
                <label>
                    <b style="margin-right: 40px;"> Quantity :</b>
                </label>
                ${product.quantity}
            </p>
            <p>           
                <a href="" ><button class="mua btn btn-danger" style="width:200px">Thêm vào giỏ hàng</button></a>       
                <a href=""><button type="" class="mua btn btn-danger"style="width:200px">Mua ngay</button></a>
            </p>
            </div>
                </div>
                </div>
            </div>
        </div>
            `
    }

}

export default ProductDetail;
