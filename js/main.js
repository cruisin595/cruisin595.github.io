function submitShow() {
    var xmlHttp;							//声明xmlHttp变量
    try {
        //如果是Firefox, Opera 8.0+, Safari浏览器，则可以进行创建
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            //Internet Explorer 6.0+，则可以进行创建
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                //Internet Explorer 5.5+，则可以进行创建
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器版本不支持AJAX！");	//浏览器版本不支持		
                return false;
            }
        }
    }
    xmlHttp.onreadystatechange = function () { // 设置响应http请求状态变化的事件
        console.log('请求过程', xmlHttp.readyState);
        if (xmlHttp.readyState == 4) { // 判断异步调用是否成功,若成功开始局部更新数据
            console.log('状态码为', xmlHttp.status);
            if (xmlHttp.status == 200 || xmlHttp.status == 0) {
                console.log('异步调用返回的数据为：', xmlHttp.responseText);
                var text = xmlHttp.responseText.split(";");
                document.getElementById("ljj").innerHTML = text[0];
                document.getElementById("lwl").innerHTML = text[1];
                document.getElementById("ljl").innerHTML = text[2]; // 局部刷新数据到页面
                alert("提交成功");
            } else { // 如果异步调用未成功,弹出警告框,并显示错误状态码
                alert("error:HTTP状态码为:" + xmlHttp.status);
            }
        }
    }
    xmlHttp.open("GET", "info.txt", true);
    xmlHttp.send(null);
}

function removeMeta() {
    document.getElementById("remove").remove();
}