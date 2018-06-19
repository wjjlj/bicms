/*input输入框焦点事件*/
function inputFocus() {
    var user = document.getElementById("user");
    user.onfocus = function () {
        if (this.value == '用户名') {
            this.value = '';
            this.style.color = '#333';
        }
    }
    user.onblur = function () {
        if (this.value == '' || this.value == '用户名') {
            this.value = '用户名';
            this.style.color = '#999';
        }
    }
    var password = document.getElementById("password");
    password.onfocus = function () {
        this.style.background = "url(images/void.png) no-repeat left center";
    }
    password.onblur = function () {
        if (this.value == '') {
            this.style.background = 'url(images/pass-txt.png) no-repeat left center';
        }
    }
}

function formCheck() {
    if (formname.user.value == "" || formname.user.value == "用户名") {
        layer.tips('用户名不能为空', '.userClass', {
            tips: [4, '#67b2e4']
        });
        formname.user.focus();
        return false;
    }
    if (formname.password.value == "") {
        layer.tips('密码不能为空', '.pwClass', {
            tips: [4, '#67b2e4']
        });
        formname.password.focus();
        return false;
    }
    return true;
}
window.onload = inputFocus;