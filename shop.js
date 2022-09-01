var total= Number(document.getElementById('total').innerHTML)
console.log(total)
var plsbutton=document.querySelectorAll(".plsbutton")
for (let button of plsbutton){
    button.addEventListener("click", function(){
        price=Number(button.previousElementSibling.innerHTML)
        console.log(price)
        var qty=Number(button.parentNode.children[3].innerHTML);        
        console.log(qty)
        qty++;
        button.parentNode.children[3].innerHTML=qty
        
        total=total+price
        document.getElementById('total').innerHTML=total;
    })
}

var minsbutton=document.querySelectorAll(".minsbutton")
for (let button of minsbutton){
    button.addEventListener("click", function(){
        price=Number(button.parentNode.children[0].innerHTML)
        console.log(price)
        var qty=Number(button.parentNode.children[3].innerHTML);        
        console.log(qty)
        if (qty>0) {qty--;
        button.parentNode.children[3].innerHTML=qty
        
        total=total-price
        document.getElementById('total').innerHTML=total;}
    })
}

var like = document.querySelectorAll(".favo")
console.log(like)
for (let button of like){
    button.addEventListener("click", function(){
        if (button.style.backgroundColor=="cornflowerblue"){
            button.style.backgroundColor="mediumvioletred"
        } else {button.style.backgroundColor="cornflowerblue"
        
        }
    })
}
    
