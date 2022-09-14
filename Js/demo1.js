var obj = {
    name:"Phùng Văn Vũ",
    age: 18,
    mark:10,
    bff:('Bui Hoang Giang','Nguyen Tuan Nghia','Quy Ne'),
    eat:function (){
        console.log(this.name+" ăn...");
    }
};
console.log(obj.name);
obj.eat();
obj.name = "Zhongli";
console.log(obj.name);
for(var i=0;i<obj.bff.length;i++){
console.log(obj.bff[i]);
}
obj.eat();
var f = 25;
function demo() {
    var x = document.getElementById("abc");
    //x.innerText = "Chào mừng đến bình nguyên vô tận";//đổi nội dung chữ
    //x.innerHTML += '<i>Hello</i>';
    //x.style.color= "red";
    //x.style.fontSize = f+'px';
 //f+=100;
x.style.transform = 'rotate('+f+'deg)';
f+=100;


}
function quaytron() {
    setInterval(demo, 10);
}

var m = 10,s=0;
function  timer(){
var min = document.getElementById("min");
var sec = document.getElementById("sec");
min.innerText = m;
sec.innerText = s;
s--;
if(s<0){
    s = 59;
    m--;
}
if(m<0){
    clearInterval(si);
}
}
var si;
function startTimer() {


    si=setInterval(timer,1000);
}
