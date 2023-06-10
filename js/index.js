
// console.log('hello');
// $(document).ready(function (){
//     $('.dropdown-menu .icon-menu').click(function () {
//         $(this).parent('li').children('.sub-menu').slideToggle();
//         $(this).toggleClass('fa-chevron-down fa-chevron-right');
//     });
// });
// 
var i = 0;
var arrSo = [];
console.log(arrSo);
function myFunction() {
    var so = +document.getElementById("number").value;
    arrSo[i] = so;
    i++;
    document.getElementById("result").innerHTML = arrSo;
}

function myFunction1() {
    var element = document.getElementById("detail1");
    element.classList.toggle("mystyle");
}
function tongsoduong() {
    var sum = 0;
    for (k = 0; k <= arrSo.length; k++) {
        if (arrSo[k] > 0) {
            sum += arrSo[k]
        }
    }
    document.getElementById("tongsoduongla").innerHTML = "Tổng số dương là : " + sum;
}
//*************************** */
function myFunction2() {
    var element = document.getElementById("detail2");
    element.classList.toggle("mystyle");
}
function demso() {
    var n = 0;
    for (k = 0; k <= arrSo.length; k++) {
        if (arrSo[k] > 0) {
            n++;
        }
    }
    document.getElementById("soduongla").innerHTML = "Số dương : " + n;
}
//************************* */
function myFunction3() {
    var element = document.getElementById("detail3");
    element.classList.toggle("mystyle");
}
function sonhonhat() {
    var n = arrSo[0];
    for (k = 0; k <= arrSo.length; k++) {
        if (arrSo[k] <= n) {
            n = arrSo[k];
        }
    }
    document.getElementById("sonhonhatla").innerHTML = "Số nhỏ nhất : " + n;
}
//************************* */
function myFunction4() {
    var element = document.getElementById("detail4");
    element.classList.toggle("mystyle");
}
function soduongnhonhat() {
    if (arrSo.length) {
        var n = arrSo[0];
        for (k = 0; k <= arrSo.length; k++) {
            if (arrSo[k] > 0 && arrSo[k] <= n) {
                n = arrSo[k];
            }
            document.getElementById("soduongnhonhatla").innerHTML = "Số dương nhỏ nhât : " + n;
            return;
        }
    } else
        document.getElementById("soduongnhonhatla").innerHTML = "Không có số trong chuỗi";
}
//************************************** */

function myFunction5() {
    var element = document.getElementById("detail5");
    element.classList.toggle("mystyle");
}
function sochancuoicung() {
    var n = 0;
    for (k = arrSo.length; k >= 0; k--) {
        console.log(arrSo[k]);
        if (arrSo[k] % 2 === 0) {
            n = arrSo[k];
            document.getElementById("sochancuoicungla").innerHTML = "số chẵn cuối cùng là : " + n;
            return;
        }

    }
    document.getElementById("sochancuoicungla").innerHTML = "số chẵn cuối cùng là : " + n;
}
//**************************************** */
function myFunction6() {
    var element = document.getElementById("detail6");
    element.classList.toggle("mystyle");
}
function doicho() {
    var n1 = +document.getElementById("vitri1").value;
    var n2 = +document.getElementById("vitri2").value;
    if (n1 === 0 && n2 === 0) {
        document.getElementById("doivitrichuoi").innerHTML = "mảng sau khi đôi : ";
        return;
    } else
        var tmp = arrSo[n1];
    arrSo[n1] = arrSo[n2];
    arrSo[n2] = tmp;
    document.getElementById("doivitrichuoi").innerHTML = "mảng sau khi đôi : " + arrSo;
}
//******************************************* */
function myFunction7() {
    var element = document.getElementById("detail7");
    element.classList.toggle("mystyle");
}
function sapxeptangdan() {
    //    console.log('chay');
    // debugger
    for (l = 0; l <= arrSo.length; l++) {
        for (k = l; k <= arrSo.length; k++) {
            if (arrSo[k] < arrSo[k - 1]) {
                var t = arrSo[k - 1];
                arrSo[k - 1] = arrSo[k];
                arrSo[k] = t;
            }
        }
    }
    // console.log(arrSo);
    document.getElementById("chuoitangdan").innerHTML = "mảng sau khi sắp xếp : " + arrSo;
}
//******************************************* */
function myFunction8() {
    var element = document.getElementById("detail8");
    element.classList.toggle("mystyle");
}
function songuyento() {
    var temp;
    var isPrime = null;
    for (k = 0; k < arrSo.length; k++) {
        num = arrSo[k];

        for (i = 2; i <= num / 2; i++) {
            temp = num % i;
            if (temp == 0) {
                isPrime = false;
                break;
            } isPrime = true;
        }
    }
    if (isPrime)
        document.getElementById("songuyentodautien").innerHTML = (num + " Là số nguyên tố đầu tiên");
    else if (arrSo = []) { document.getElementById("songuyentodautien").innerHTML = "dãy không có số nguyên tố"; }
}
//*********************************** */

function myFunction9() {
    var element = document.getElementById("detail9");
    element.classList.toggle("mystyle");
}
function demsonguyen(){
    var count = 0;
    for (var i = 0; i < arrSo.length; i++) {
        if (Number.isInteger(arrSo[i])) {
            count++;
        }
    }
    document.getElementById("songuyen").innerHTML = 'Có tất cả ' + count + " số nguyên";
}
//*************************************** */
function myFunction10() {
    var element = document.getElementById("detail10");
    element.classList.toggle("mystyle");
}