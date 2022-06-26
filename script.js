addEventListener("DOMContentLoaded",()=>{

    const btn_menu=document.querySelector(".menu-btn")
    if(btn_menu){
        btn_menu.addEventListener("click",()=>{
            const menu_items=document.querySelector(".menu-items")
            menu_items.classList.toggle("display")
        })
    }

})