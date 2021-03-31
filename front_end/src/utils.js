export const  parseRequestUrl = () => {//sử dụng arrowfuntion
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");//chuyển đổi sang mảng phân tách nhau bằng /
    return {
        resource: request[1],
        id: request[2]
    }
}
export const $ = selector =>{
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}
export const reRender= async (component,position="")=>{
    if(position){
        $(position).innerHTML=await component.render();
    } else {
        $("#main-content").innerHTML=await component.render();
    }
    await component.afterRender();
}