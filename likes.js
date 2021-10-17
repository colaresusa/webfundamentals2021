var count = 0
var count2 = 0
var count3 = 0
var neil = document.querySelector("#nmlikes")
var nic = document.querySelector("#nklikes")
var jim = document.querySelector("#jrlikes")
console.log(neil)
console.log(nic)
console.log(jim)
function neilm() {
    count++;
    neil.innerText = count +"like(s)";
    console.log(count);
}
function nicm() {
    count2++;
    nic.innerText = count2 +"like(s)";
    console.log(count2);
}
function jimr() {
    count3++;
    jim.innerText = count3 +"like(s)";
    console.log(count3);
}