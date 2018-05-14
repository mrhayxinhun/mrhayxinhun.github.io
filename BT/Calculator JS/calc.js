let calculationFinish=false;
let screen=document.getElementsByClassName("screen__text")[0];
//bien expression chua bieu thuc
let expression=[];
//bien chua  cac button
let button=document.getElementsByClassName("button");
//gan function checkButton vao cac button khi click
for (let i=0; i<button.length; i++){
    button[i].addEventListener("click", function(){
    checkButton(this.innerHTML);
});}
//gan function evaluate khi an dau =
document.getElementById("calc").addEventListener("click", evaluate);

//function cap nhat bieu thuc expression thanh dang chuoi
function updateExpression(){
    return expression.join("");
}

//function in ket qua, bieu thuc ra man hinh
function updateScreen(newText){
    screen.innerHTML=newText;
}

function checkButton(value){
    let isNumber=Number.isInteger(Number(value));
    if (value==="=") {
        //khi an dau bang se khong lam gi
    }
    else if (value==="AC") {
        //khi an AC thi dua man hinh ve 0 
        calculationFinish=false;
        updateScreen("");
        expression=[];
    }
    else if (value==="CE") {
        //khi an CE thi xoa di phan tu cuoi cung tren man hinh
        calculationFinish=false;
        expression.pop();
        updateScreen(updateExpression());
    }
    else if (screen.innerHTML ==="" && isNumber===false){
        //khong man hinh trong va nguoi dung an button khong phai so thi ko thuc hien gi
    }
    else if (isNaN(expression[expression.length-1]) && !isNumber){
        //khi an 2 button khong phai so thi khong thuc hien gi
    }
    else if (calculationFinish===true && isNumber){
        //khi vua tinh toan xong 1 bieu thuc va an vao 1 so thi se xoa bieu thuc luu trong
        //expression va them phan tu moi vao expression va in ra man hinh
        calculationFinish=false;
        expression=[];
        expression.push(value);
        updateScreen(updateExpression());
    }
    else {
        calculationFinish=false;
        expression.push(value);
        updateScreen(updateExpression());
    }
}

function evaluate(){
    if (screen.innerHTML===""){
        //khi man hinh trang thi khong lam gi
    }else{
        //in ra man hinh ket qua
        let result=eval(screen.innerHTML);
        expression=[result];
        updateScreen(result);
        calculationFinish=true;
    }
}