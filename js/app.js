$((function(){var e=document.title,t=["|"],n=0,o=0;window.setInterval((function(){var i=e.substring(0,o);o>e.length&&(n=0,o=0),n>1&&(o++,n=0),document.title=i+t[0],n++}),150)}));let preloader=document.querySelector(".preloader");window.addEventListener("load",(()=>{preloader.classList.add("hide"),setTimeout((()=>{preloader.remove()}),300)})),tippy("#tooltip-header",{content:"Да, это я",placement:"bottom",animation:"scale-subtle",theme:"light"}),tippy("#tooltip-header-project",{content:"Soon",placement:"bottom",animation:"scale-subtle",theme:"light-border"}),tippy("#link-telegram",{content:"Telegram",placement:"top",animation:"scale-subtle",theme:"light-border"}),tippy("#link-instagram",{content:"Instagram",placement:"top",animation:"scale-subtle",theme:"light-border"}),tippy("#link-vk",{content:"VK",placement:"bottom",animation:"scale-subtle",theme:"light-border"}),tippy("#link-youtube",{content:"YouTube",placement:"bottom",animation:"scale-subtle",theme:"light-border"}),tippy("#link-github",{content:"GitHub",placement:"top",animation:"scale-subtle",theme:"light-border"}),tippy("#link-steam",{content:"Steam",placement:"top",animation:"scale-subtle",theme:"light-border"});var typed=new Typed("#typed",{typeSpeed:75,backSpeed:60,startDelay:150,loop:!0,stringsElement:"#typed-string"});document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0)))},document.oncontextmenu=function(){return!1};