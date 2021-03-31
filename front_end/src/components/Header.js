import CategoryAPI from "../api/catagoryApi";
import registerAPI from "../api/registerAPI";
import Login from "../pages/login";

const Header={
   async render(){
        const {data:categories}= await CategoryAPI.getAll();

        return /*html*/`
        <p class="h5 my-0 me-md-auto fw-normal">
        <img src="img/logo.png" width="130" height="60"  alt="logo.................">
      </p>
      <nav class="my-2 my-md-0 me-md-3">
        <a class="p-2 text-dark" href="/">Trang Chủ</a>
        <a class="p-2 text-dark" href="/#/products">Sản Phẩm</a>
        ${
            categories.map(category =>{
              
                return`
                <a class="p-2 text-dark" href="/#/category/${category.id}">${category.name}</a>
                `
            }).join("")
        }
        <a class="p-2 text-dark" href="/#/contact">Liên Hệ</a>
        <a class="p-2 text-dark" href="/#/listproduct">Quản Trị</a>
      </nav>
      


<div class="w3-container">
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-green w3-large">Login</button>
    <div id="id01" class="w3-modal">
      <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
              <form class="w3-container" id="form-login" method="POST">
                  <div class="w3-section">
                    <label><b>Tên Đăng Nhập</b></label>
                      <input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Vui lòng nhập tên đăng nhập" id="username" required>
                          <label><b>Mật Khẩu</b></label>
                          <input class="w3-input w3-border" type="text" placeholder="Vui lòng nhập mật khẩu" id="password" required>
                          <button class="w3-button w3-block w3-green w3-section w3-padding" type="submit">Đăng Nhập</button>
                      <input class="w3-check w3-margin-top" type="checkbox" checked="checked"> Remember me
                  </div>
              </form>

      <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
        <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
        <span class="w3-right w3-padding w3-hide-small"><a href="#">Quên Mật Khẩu?</a></span>
      </div>

    </div>
  </div>
</div>
        `
    }
}
export default Header;