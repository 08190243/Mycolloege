window.addEventListener("load", function () {
    var login = document.querySelector(".login");
    var cover = document.querySelector(".cover");
    var loginpage = document.querySelector(".loginpage");
    var close = document.querySelector(".close");
    var head = document.querySelector(".head");
    login.addEventListener("click", function () {
        cover.style.display = "block";
        loginpage.style.display = "block";
    })

    close.addEventListener("click", function () {
        cover.style.display = "none";
        loginpage.style.display = "none";
    })

    // 移动loginpage
    var moveX = 0;
    var moveY = 0;
    head.addEventListener("mousedown", function (e) {
        moveX = e.pageX - loginpage.offsetLeft;
        moveY = e.pageX - loginpage.offsetLeft;
        document.addEventListener("mousemove", move);
    })
    function move(e) {
        loginpage.style.left = e.pageX - moveX + "px";
        loginpage.style.top = e.pageY - moveY + "px";
    }
    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", move);
    })


    // $(".login").hide();
})