let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".content");

tabs.forEach(function(tab,index){
    tab.addEventListener("click",function(){

        //全部リセット
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        //クリックされたやつだけON
        tab.classList.add("active");
        contents[index].classList.add("active");
    });
});