var time = 2000;
let content = document.querySelector('.banner-imgBox2');
let switchBtn = document.querySelector('.banner-imgBox-div').children[0];
switchBtn.children[0].classList.add('on2');
let imgCount = switchBtn.children.length;
let index = 0;
let x = 0;
function marginLeft(isRight) {
//      make
    if (isRight) {
        switchBtn.children[index].classList.remove('on2');  // remove red dot

        if (index == imgCount - 1) { //last pic
            index = 0;
            x = 0;
        } else {
            index++;
            x++;
        }
        switchBtn.children[index].classList.add('on2');     // add red dot
        content.style.marginLeft = x == 0 ? 0 : "-" + x * 100 + "%";
    } else {    // isLeft
        switchBtn.children[index].classList.remove('on2');  // remove red dot

        if (index == 0) {//first pic
            index = imgCount - 1;
            x = index;
        } else {
            index--; 
            x--;
        }

        switchBtn.children[index].classList.add('on2');     // add red dot
        content.style.marginLeft = x == 0 ? 0 : "-" + x * 100 + "%";
    }
}


var interval = setInterval(() => {
    marginLeft(true)
}, time);


let container = document.querySelector('.banner-imgBox');
// 鼠标经过时清除定时器
container.onmouseover = function () {
    clearInterval(interval);
}
// 鼠标移开时设置定时器
container.onmouseout = function () {
    // 先清除定时器
    clearInterval(interval);
    // 往右滑动并开启定时器
    // marginLeft(true)
    interval = setInterval(() => {
        marginLeft(true)
    }, time);
}
// ————————————————
// 版权声明：本文为CSDN博主「Memory沙漏」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/m0_45329584/article/details/104853908
// (有修改)