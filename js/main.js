// 
// 导航子菜单
// 
// 定义匹配符合条件的class的函数
function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
// 定义增加class的函数
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
        obj.className = obj.className.trim();
    }
}
// 定义删除class的函数
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ").trim();
    }
}
// 
// 轮播图carousel
// 
function carousel(wrap, inner, spanlist) {
    var index = 0;
    var distance = wrap.offsetWidth;
    var time;
    // 清除轮播图中的所有下标按钮的颜色
    function clear() {
        for (var i = 0; i < spanlist.length; i++) {
            spanlist[i].className = "";
        }
    }
    // 定义轮播图中图片滑动的函数
    function AutoGo() {
        var start = inner.offsetLeft;
        var end = index * distance * (-1);
        var change = end - start;
        // 用计时器为图片添加动画效果
        var timer;
        var t = 0;
        var maxT = 30;
        clear();
        if (index === spanlist.length) {
            spanlist[0].className = "active_select";
        } else {
            spanlist[index].className = "active_select";
        }
        clearInterval(timer);
        timer = setInterval(function() {
            t++;
            if (t >= maxT) {
                clearInterval(timer);
            }
            inner.style.left = change / maxT * t + start + "px";
            if (index === spanlist.length && t >= maxT) {
                inner.style.left = 0;
                index = 0;
            }
        }, 15);
    }
    // 定义图片向右滑动的函数
    function forward() {
        index++;
        if (index > spanlist.length) {
            index = 0;
        }
        AutoGo();
    }
    // 定义图片向左滑动的函数
    function backward() {
        index--;
        if (index < 0) {
            index = spanlist.length - 1;
            inner.style.left = (index + 1) * distance * (-1) + "px";
        }
        AutoGo();
    }
    // 开启图片自动向右滑动的计时器
    time = setInterval(forward, 3000);
    // 设置鼠标悬停时动画停止
    wrap.addEventListener('mouseenter', function() {
        clearInterval(time);
    }, false);
    wrap.addEventListener('mouseleave', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 只有激活当前窗口才开始计时
    window.addEventListener('blur', function() {
        clearInterval(time);
    }, false);
    window.addEventListener('focus', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 遍历每个下标按钮让其切换到对应的图片
    for (var i = 0; i < spanlist.length; i++) {
        spanlist[i].onclick = function() {
            index = this.innerText - 1;
            AutoGo();
        };
    }
}

// 
// 导航子菜单
// 
// 定义匹配符合条件的class的函数
function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
// 定义增加class的函数
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
        obj.className = obj.className.trim();
    }
}
// 定义删除class的函数
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ").trim();
    }
}
// 
// 轮播图carousel
// 
function carousel(wrap, inner, spanlist) {
    var index = 0;
    var distance = wrap.offsetWidth;
    var time;
    // 清除轮播图中的所有下标按钮的颜色
    function clear() {
        for (var i = 0; i < spanlist.length; i++) {
            spanlist[i].className = "";
        }
    }
    // 定义轮播图中图片滑动的函数
    function AutoGo() {
        var start = inner.offsetLeft;
        var end = index * distance * (-1);
        var change = end - start;
        // 用计时器为图片添加动画效果
        var timer;
        var t = 0;
        var maxT = 30;
        clear();
        if (index === spanlist.length) {
            spanlist[0].className = "active_select";
        } else {
            spanlist[index].className = "active_select";
        }
        clearInterval(timer);
        timer = setInterval(function() {
            t++;
            if (t >= maxT) {
                clearInterval(timer);
            }
            inner.style.left = change / maxT * t + start + "px";
            if (index === spanlist.length && t >= maxT) {
                inner.style.left = 0;
                index = 0;
            }
        }, 15);
    }
    // 定义图片向右滑动的函数
    function forward() {
        index++;
        if (index > spanlist.length) {
            index = 0;
        }
        AutoGo();
    }
    // 定义图片向左滑动的函数
    function backward() {
        index--;
        if (index < 0) {
            index = spanlist.length - 1;
            inner.style.left = (index + 1) * distance * (-1) + "px";
        }
        AutoGo();
    }
    // 开启图片自动向右滑动的计时器
    time = setInterval(forward, 3000);
    // 设置鼠标悬停时动画停止
    wrap.addEventListener('mouseenter', function() {
        clearInterval(time);
    }, false);
    wrap.addEventListener('mouseleave', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 只有激活当前窗口才开始计时
    window.addEventListener('blur', function() {
        clearInterval(time);
    }, false);
    window.addEventListener('focus', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 遍历每个下标按钮让其切换到对应的图片
    for (var i = 0; i < spanlist.length; i++) {
        spanlist[i].onclick = function() {
            index = this.innerText - 1;
            AutoGo();
        };
    }
}

// 
// 导航子菜单
// 
// 定义匹配符合条件的class的函数
function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
// 定义增加class的函数
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
        obj.className = obj.className.trim();
    }
}
// 定义删除class的函数
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ").trim();
    }
}
// 
// 轮播图carousel
// 
function carousel(wrap, inner, spanlist) {
    var index = 0;
    var distance = wrap.offsetWidth;
    var time;
    // 清除轮播图中的所有下标按钮的颜色
    function clear() {
        for (var i = 0; i < spanlist.length; i++) {
            spanlist[i].className = "";
        }
    }
    // 定义轮播图中图片滑动的函数
    function AutoGo() {
        var start = inner.offsetLeft;
        var end = index * distance * (-1);
        var change = end - start;
        // 用计时器为图片添加动画效果
        var timer;
        var t = 0;
        var maxT = 30;
        clear();
        if (index === spanlist.length) {
            spanlist[0].className = "active_select";
        } else {
            spanlist[index].className = "active_select";
        }
        clearInterval(timer);
        timer = setInterval(function() {
            t++;
            if (t >= maxT) {
                clearInterval(timer);
            }
            inner.style.left = change / maxT * t + start + "px";
            if (index === spanlist.length && t >= maxT) {
                inner.style.left = 0;
                index = 0;
            }
        }, 15);
    }
    // 定义图片向右滑动的函数
    function forward() {
        index++;
        if (index > spanlist.length) {
            index = 0;
        }
        AutoGo();
    }
    // 定义图片向左滑动的函数
    function backward() {
        index--;
        if (index < 0) {
            index = spanlist.length - 1;
            inner.style.left = (index + 1) * distance * (-1) + "px";
        }
        AutoGo();
    }
    // 开启图片自动向右滑动的计时器
    time = setInterval(forward, 3000);
    // 设置鼠标悬停时动画停止
    wrap.addEventListener('mouseenter', function() {
        clearInterval(time);
    }, false);
    wrap.addEventListener('mouseleave', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 只有激活当前窗口才开始计时
    window.addEventListener('blur', function() {
        clearInterval(time);
    }, false);
    window.addEventListener('focus', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 遍历每个下标按钮让其切换到对应的图片
    for (var i = 0; i < spanlist.length; i++) {
        spanlist[i].onclick = function() {
            index = this.innerText - 1;
            AutoGo();
        };
    }
}

// 
// 导航子菜单
// 
// 定义匹配符合条件的class的函数
function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
// 定义增加class的函数
function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls;
        obj.className = obj.className.trim();
    }
}
// 定义删除class的函数
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, " ").trim();
    }
}
// 
// 轮播图carousel
// 
function carousel(wrap, inner, spanlist) {
    var index = 0;
    var distance = wrap.offsetWidth;
    var time;
    // 清除轮播图中的所有下标按钮的颜色
    function clear() {
        for (var i = 0; i < spanlist.length; i++) {
            spanlist[i].className = "";
        }
    }
    // 定义轮播图中图片滑动的函数
    function AutoGo() {
        var start = inner.offsetLeft;
        var end = index * distance * (-1);
        var change = end - start;
        // 用计时器为图片添加动画效果
        var timer;
        var t = 0;
        var maxT = 30;
        clear();
        if (index === spanlist.length) {
            spanlist[0].className = "active_select";
        } else {
            spanlist[index].className = "active_select";
        }
        clearInterval(timer);
        timer = setInterval(function() {
            t++;
            if (t >= maxT) {
                clearInterval(timer);
            }
            inner.style.left = change / maxT * t + start + "px";
            if (index === spanlist.length && t >= maxT) {
                inner.style.left = 0;
                index = 0;
            }
        }, 15);
    }
    // 定义图片向右滑动的函数
    function forward() {
        index++;
        if (index > spanlist.length) {
            index = 0;
        }
        AutoGo();
    }
    // 定义图片向左滑动的函数
    function backward() {
        index--;
        if (index < 0) {
            index = spanlist.length - 1;
            inner.style.left = (index + 1) * distance * (-1) + "px";
        }
        AutoGo();
    }
    // 开启图片自动向右滑动的计时器
    time = setInterval(forward, 3000);
    // 设置鼠标悬停时动画停止
    wrap.addEventListener('mouseenter', function() {
        clearInterval(time);
    }, false);
    wrap.addEventListener('mouseleave', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 只有激活当前窗口才开始计时
    window.addEventListener('blur', function() {
        clearInterval(time);
    }, false);
    window.addEventListener('focus', function() {
        clearInterval(time);
        time = setInterval(forward, 3000);
    }, false);
    // 遍历每个下标按钮让其切换到对应的图片
    for (var i = 0; i < spanlist.length; i++) {
        spanlist[i].onclick = function() {
            index = this.innerText - 1;
            AutoGo();
        };
    }
}

function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}
function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}
function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t,e.className=e.className.trim())}function removeClass(e,t){if(hasClass(e,t)){var a=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(a," ").trim()}}function carousel(e,t,a){function n(){for(var e=0;e<a.length;e++)a[e].className=""}function s(){var e,s=t.offsetLeft,l=r*i*-1,c=l-s,o=0,f=30;n(),r===a.length?a[0].className="active_select":a[r].className="active_select",clearInterval(e),e=setInterval(function(){o++,o>=f&&clearInterval(e),t.style.left=c/f*o+s+"px",r===a.length&&o>=f&&(t.style.left=0,r=0)},15)}function l(){r++,r>a.length&&(r=0),s()}var c,r=0,i=e.offsetWidth;c=setInterval(l,3e3),e.addEventListener("mouseenter",function(){clearInterval(c)},!1),e.addEventListener("mouseleave",function(){clearInterval(c),c=setInterval(l,3e3)},!1),window.addEventListener("blur",function(){clearInterval(c)},!1),window.addEventListener("focus",function(){clearInterval(c),c=setInterval(l,3e3)},!1);for(var o=0;o<a.length;o++)a[o].onclick=function(){r=this.innerText-1,s()}}