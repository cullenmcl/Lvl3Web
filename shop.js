var items = [ //array
        ['img/beany%20green.jpg', 29.99, 'product 1'],
        ['img/beany%20red.jpg', 29.99, 'product 1'],
        ['img/beany%20white.jpg', 29.99, 'product 1'],
        ['img/beany%20yellow.jpg', 29.99, 'product 1'],
        ['img/male%20sweater%20grey.jpg', 29.99, 'product 1'],
        ['img/male%20sweater%20organe.jpg', 29.99, 'product 2'],
        ['img/male%20sweater%20pink.jpg', 29.99, 'product 3'],
        ['img/female%20sweater.jpg', 39.99, 'product 4'],
        ['img/female%20sweater%20red.jpg', 39.99, 'product 5'],
        ['img/female%20sweater%20purple.jpg', 39.99, 'product 6'],
        ['img/female%20sweater%20blue.jpg', 39.99, 'product 7'],
        ['img/female%20sweater%202%20grey.jpg', 29.99, 'product 8'],
        ['img/female%20sweater%202%20green.jpg', 29.99, 'product 9'],
        ['img/female%20sweater%202%20purple.jpg', 29.99, 'product 10'],
        ['img/female%20sweater%202%20yellow.jpg', 29.99, 'product 11'],
    ];

var cartItems = [];

function run() {

    var main = document.getElementById('main3');

    //add to ul
    for (var i = 0; i < items.length; i++) {


        var ele = document.createElement('li')
        var pic = document.createElement('img')
        var price = document.createElement('h1')
        var desc = document.createElement('h2')
        var plus = document.createElement('button')
        var typeBox = document.createElement('input')
        var add = document.createElement('button')
        var minus = document.createElement('button')

        // push element into html
        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(plus);
        ele.appendChild(typeBox);
        ele.appendChild(minus);
        ele.appendChild(add);

        pic.src = items[i][0];
        price.innerHTML = '$' + items[i][1];
        desc.innerHTML = items[i][2];
        plus.innerHTML = '+';
        typeBox.type = 'number';
        minus.innerHTML = '-';
        add.innerHTML = 'add';
        
        plus.dataset.cartIndex = i;
        plus.setEventListener('click', plus, false)
        
        
        
        
        typeBox.setAttribute("id", "input" + i);
        typeBox.value = 1;
        
        

        add.dataset.cartIndex = i;
        add.addEventListener('click', adding, false);
    }

    function adding(event) {
        const NUM = event.currentTarget.dataset.cartIndex;

        //            alert('$' + items[NUM][1]);
        cartItems.push([items[NUM]]);
        cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

        updateCart();
    } //end func

    var totalItems = 0;


} //end func

function plus(event) {
     plus = Number(amount);
    
    document.getElementById('typeBox' + num).value = plus += 1;

    
}

function updateCart() {
    var itemCounter = document.getElementById('itemCount');

    totalItems = 0;

    window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));


    var data = sessionStorage.getItem('cartItems');
    data = JSON.parse(data);

    for (var i = 0; i < cartItems.length; i++) {
        totalItems += cartItems[i][1]
    }

    itemCounter.innerHTML = totalItems;
} //end func

function loadCart() { //loads product on cart page

    var main = document.getElementById('cartMain3');


    var data = sessionStorage.getItem('cartItems');
    data = JSON.parse(data);

    cartItems = data;

    updateCart();
    //add ele to be added
    for (var i = 0; i < cartItems.length; i++) {


        var ele = document.createElement('li')
        var pic = document.createElement('img')
        var price = document.createElement('h1')
        var desc = document.createElement('h2')
        var deleteItem = document.createElement('button')
        var amount = document.createElement('h2');
        var subtotal = document.createElement('h3');

        // push ele into html
        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(deleteItem);
        ele.appendChild(amount);
        ele.appendChild(subtotal);

        //pushes ele info form array

        pic.src = cartItems[i][0][0];
        price.innerHTML = '$' + cartItems[i][0][1];
        desc.innerHTML = cartItems[i][0][2];

        deleteItem.innerHTML = 'Delete';
        deleteItem.dataset.cartIndex = i;
        deleteItem.addEventListener('click', deleteMe, false);

        amount.innerHTML = cartItems[i][1];
        subtotal.innerHTML = '$' + cartItems[i][1] * cartItems[i][0][1];
    }

} //end func

function deleteMe() {
    const NUM = event.currentTarget.dataset.cartIndex;

    delete cartItems[NUM];

    cartItems = cartItems.filter(items => items !== undefined);

    updateCart();
    loadCart();
    window.location.reload(true);
} //end func
