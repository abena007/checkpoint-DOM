

//heart --------------------------------------
var like = document.getElementsByClassName('heart')
for (i=0; i<like.length ; i++ ) {
    var btn = like[i]
    btn.addEventListener('click', function(event){
        var HeartClicked= event.target
        if (HeartClicked.getAttribute('src') == "heart.svg" ){
        HeartClicked.setAttribute('src',"heart-fill.svg")
        }
    else {  
        HeartClicked.setAttribute('src',"heart.svg")
        }
    
    })
    }

// '+' and '-' ------------------------------------------------------
var  add = document.getElementsByClassName('btn btn-success')
var del = document.getElementsByClassName ('btn btn-danger') 

for (i=0;i<add.length;i++){
    var btn = add[i]
    btn.addEventListener('click',function(event){
        var btnclicked = event.target
        var num = btnclicked.parentElement.parentElement
        var count = num.querySelector('p')
        count.innerText++
        })
}

for (let i = 0 ;i<del.length;i++){
    var btn = del[i]
    btn.addEventListener('click',function(event){
        let btnclicked = event.target
        var num = btnclicked.parentElement.parentElement
        var count = num.querySelector('p')
        if (count.innerText>0){count.innerText--}
        })
}

// cart-------------
var btnAdd = document.getElementsByClassName('btn btn-dark')
for (i=0; i< btnAdd.length ;i++){
    var btn = btnAdd[i]
    btn.addEventListener('click', addLine)

}
//function addLine----------------------------------------
function addLine () {
    let btn= event.target
    let product = btn.parentElement.parentElement
    let productName = product.querySelector('h3')
    let productPrice = product.querySelector('.price')
    let productQuantity = product.querySelector('p')
    
    let btnDelete = document.createElement ('button')
    btnDelete.setAttribute('class','btn btn-danger btnDel')
    btnDelete.setAttribute('type','button')
    btnDelete.innerText = 'Delete'

    let array = [productName.innerText , productPrice.innerText , productQuantity.innerText ,]
    
    let newProduct = document.createElement('div')
        newProduct.setAttribute('class','row')
    let cartGrid = document.querySelector('.container')
    for ( i = 0 ;  i < array.length ;i++){
        let newColumn = document.createElement('div')
        newColumn.setAttribute('class','col')
        newColumn.innerHTML = array[i]
        newProduct.appendChild(newColumn)
    }
    let newColumn = document.createElement('div')
        newColumn.setAttribute('class','col')
    newColumn.appendChild(btnDelete)
    newProduct.appendChild(newColumn)

    if ( array[2] == 0){
        return (alert('Error ! Please add a valid quantity !'))
    }    if (cartGrid.getElementsByClassName('row').length == 1){
        cartGrid.insertBefore(newProduct,cartGrid.querySelector('.total'))
        updateTotal()

    }
    else{cartGrid.insertBefore(newProduct,cartGrid.querySelectorAll('.row')[1])
        
    updateTotal() 
}
    resetcounter()

var btnDeleteFromCart = document.getElementsByClassName('btnDel')
for ( i = 0; i < btnDeleteFromCart.length ; i++) {   
    let btn = btnDeleteFromCart[i]
    btn.addEventListener('click', delLine )
console.log(btnDeleteFromCart)

}

//Update total -----------------------
function updateTotal (){
    let parent = document.querySelector('.container')
    let total = 0
    let sum =parent.querySelector(".total p")
    for (i=0;i < parent.querySelectorAll('.row').length-1; i++){
    let getPrice = parent.querySelectorAll('.col')[5+(i*4)].innerText
    console.log('the price of the item ',getPrice)
    let Quantity = parent.querySelectorAll('.col')[6+(i*4)].innerHTML
    console.log('quantity',Quantity)

    var price = parseFloat( getPrice.replace('$',''))*(parseInt(Quantity))
    total+=price        
}
sum.innerHTML = total + ' $'
}
// reset counter --------------------------------
function resetcounter (){
    counter = event.target.parentElement.parentElement.querySelector('p')
    counter.innerHTML = 0
}


// delete Line----------------------------------

    
    
    function delLine () { 
        console.log('btn delete clicked')
        let btnClicked = event.target
        btnClicked.parentElement.parentElement.remove()
        updateTotal()
}
}
