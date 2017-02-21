(function() {
    "use strict";


    var index = 0,
        timer = null,
        pics = byId("banner").getElementsByTagName("div"),
        dots = byId("dots").getElementsByTagName("span"),
        prev = byId("prev"),
        next = byId("next"),
        len = pics.length;


    //封装Byid

    function byId(id) {
        return typeof(id) === "string" ? document.getElementById(id) : id;
    }

    function slideImg() {
        var main = byId("main");

        main.onmouseover = function() {
            if (timer) clearInterval(timer);
        };

        main.onmouseout = function() {
            timer = setInterval(function() {
                index++;
                if (index >= len) {
                    index = 0;
                };
                //切换图片
                changeImg();
            }, 3000);
        };

        //自动在main上触发调用一次
        main.onmouseout();

        for (var d = 0; d < len; d++) {
            dots[d].setAttribute('data-id', d);
            dots[d].onclick = function() {
                //index = d;则致命错误。点哪个都是3！！！回调函数的错误陷阱                
                index = this.getAttribute('data-id');
                changeImg();
            }
        };

        next.onclick = function() {
            index++;
            if (index >= len) {
                index = 0;
            };
            changeImg();
        };

        prev.onclick = function() {
            index--;
            if (index < 0) {
                index = len-1;
            }
            changeImg();
        };
    }



    function changeImg() {
        //遍历 banner
        for (var i = 0; i < len; i++) {
            pics[i].style.display = "none";
            dots[i].className = "";
        };

        pics[index].style.display = "block";
        dots[index].className = "dots-active";
    };


    slideImg();




})()
