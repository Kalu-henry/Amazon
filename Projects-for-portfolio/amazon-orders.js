function Dropdownlist(){
    document.querySelector('.hamburger-exit-image').style.display = 'block';
    document.querySelector('.hamburger-image').style.display = 'none';
    document.getElementById('dropdown-info').style.display = 'block';
    document.getElementById('body').style.paddingTop = '9rem';
}
function exitDropdownlist(){
    document.querySelector('.hamburger-exit-image').style.display = 'none';
    document.querySelector('.hamburger-image').style.display = 'block';
    document.getElementById('dropdown-info').style.display = 'none';
    document.getElementById('body').style.paddingTop = '5rem';
}

function trackPackage(itemId){
    
    if(updatedCartArray[0][itemId].deliveryDateNumber === "2023 9 18"){

        const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));


        let deliverydate = dayOfYear(new Date(2023, 9, 18));

        let aYear = new Date().getFullYear();
        let aMonth = new Date().getMonth();
        let adate = new Date().getDate();

        let orderDate = dayOfYear(new Date(aYear, aMonth, adate));

        let z = Number(document.querySelector('.progress-bar-for-tracking').style.width);

        if((deliverydate - orderDate) >= 5){
            
            let zIncrement = '5';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 4 ){
            
            let zIncrement = '20';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';
        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 3 ){
            
            let zIncrement = '40';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 2 ){
            
            let zIncrement = '60';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 1 ){
            
            let zIncrement = '80';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 0 ){
            
            let zIncrement = '100';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.delivered').style.color = 'green';
        }

    }
    if(updatedCartArray[0][itemId].deliveryDateNumber === "2023 9 13"){

        const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));


        let deliverydate = dayOfYear(new Date(2023, 9, 13));

        let aYear = new Date().getFullYear();
        let aMonth = new Date().getMonth();
        let adate = new Date().getDate();

        let orderDate = dayOfYear(new Date(aYear, aMonth, adate));

        let z = Number(document.querySelector('.progress-bar-for-tracking').style.width);

        if((deliverydate - orderDate) >= 5){
            
            let zIncrement = '5';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';
        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 4 ){
            
            let zIncrement = '20';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';
        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 3 ){
            
            let zIncrement = '40';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 2 ){
            
            let zIncrement = '60';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 1 ){
            
            let zIncrement = '80';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 0 ){
            
            let zIncrement = '100';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.delivered').style.color = 'green';
        }
    }
    if(updatedCartArray[0][itemId].deliveryDateNumber === "2023 9 9"){

        const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));


        let deliverydate = dayOfYear(new Date(2023, 9, 9));

        let aYear = new Date().getFullYear();
        let aMonth = new Date().getMonth();
        let adate = new Date().getDate();

        let orderDate = dayOfYear(new Date(aYear, aMonth, adate));
        let z = Number(document.querySelector('.progress-bar-for-tracking').style.width);

        if((deliverydate - orderDate) >= 5){
            
            let zIncrement = '5';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 4 ){
            
            let zIncrement = '20';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 3 ){
            
            let zIncrement = '40';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.preparing').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 2 ){
            
            let zIncrement = '60';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 1 ){
            
            let zIncrement = '80';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.shipped').style.color = 'green';

        }
        if((deliverydate - orderDate) < 5 && (deliverydate - orderDate) === 0 ){
            
            let zIncrement = '100';
            z = z + Number(zIncrement);
            document.querySelector('.progress-bar-for-tracking').style.width = `${z}%`;
            document.querySelector('.delivered').style.color = 'green';
        }
    }

}

//up is not for you
let totalOfAllOrderedProducts = localStorage.getItem('TotalOfAllProducts');

document.querySelector('.order-total').innerHTML = totalOfAllOrderedProducts;

let updatedCartString = localStorage.getItem('CartItems1');

let updatedCartArray = Array(JSON.parse(updatedCartString));

let cartValueHere = localStorage.getItem('Cart_QUantity');

document.querySelector('.number-of-items-in-cart').innerHTML = cartValueHere;

let CartItemsStringOrdersPage = localStorage.getItem( "CartItems" );

let CartItemsArrayOrdersPage = Array(JSON.parse(CartItemsStringOrdersPage));

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday'];

const year = new Date().getFullYear();

const month = new Date().getMonth();

const date = new Date().getDate();

document.querySelector('.order-date').innerHTML = `${months[month]} ${date}`;

function generateId(){

    let id = '';

    const letters = ['a','-' ,'b','c','-','e', '-','f','g', '-','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w', 'd']

    const numbers = [0,1,2,3,4,5,6,7,8,9];

    for(let i = 0; i < 15; i++){
        if(i < 9){
            id = id + letters[i] + numbers[i];
            document.querySelector('.order-id').innerHTML = id;
        }
    }
}


let neworderedProductsHTML = ``;

    for(let i = 0; i < 24; i++){
        if(CartItemsArrayOrdersPage[0][i].ItemQuantity > 0){

            let z = Number(document.querySelector('.progress-bar-for-tracking').style.width);

            let orderedProductsHTML = document.querySelector('.for-generated-products-with-js');

            orderedProductsHTML.innerHTML = `
            <div class="ordered-product-info" js-${CartItemsArrayOrdersPage[0][i].ItemIndex}>
                <div class="product-ordered">
                    <div class="for-product-image">
                        <img src='images-for-project/athletic-cotton-socks-6-pairs.jpg' style="width: 60%;" class="image-for-the-product js-image-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}">
                    </div>

                    <div class="for-product-order-details" style="background-color:white;">
                        <div class="the-ordered-product-name js-name-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}">Intermediate Size Basketball</div>
                        <div class="the-ordered-product-arrival-date js-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}">Arriving on September 26</div>

                        <div class="forTheItemIdOfTheProduct">
                        Item id: <div style="display: inline-block" class="product-item-id product-item-id-${CartItemsArrayOrdersPage[0][i].ItemIndex}"></div>    
                        </div>

                        <div>Quantity: 
                            <div class="the-ordered-product-quantity js-order-quantity-${CartItemsArrayOrdersPage[0][i].ItemIndex}" style="display: inline-block;">2</div>
                        </div>

                        <div class="order-again-button">
                            <div class="for-buy-again-image">
                                <img src='images-for-project/buy-again.png' style="width: 40%;" class="for-buy-again-button">
                            </div>
                            <div style="flex: 2;">Buy it again</div>
                        </div>
                    </div>

                    <button class="for-product-tracking" onclick="

                    // let itemId = ${CartItemsArrayOrdersPage[0][i].ItemIndex};
                    // let itemQuantity = ${CartItemsArrayOrdersPage[0][i].ItemQuantity};
                    // console.log('I am here', itemId, itemQuantity);

                    document.title = 'Tracking';
                    document.querySelector('.tracking-div').style.display = 'block';
                    document.querySelector('.container-for-all-products-order').style.display = 'none';
                    document.querySelector('.your-order').style.display = 'none';
                    document.body.style.paddingTop = '3rem';

                    document.querySelector('.products-arrival-date-for-tracking').innerHTML = document.querySelector('.js-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}').innerHTML;

                    document.querySelector('.products-name-for-tracking').innerHTML = document.querySelector('.js-name-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}').innerHTML;

                    document.querySelector('.products-quantity-for-tracking').innerHTML = document.querySelector('.js-order-quantity-${CartItemsArrayOrdersPage[0][i].ItemIndex}').innerHTML;

                    document.querySelector('.tracking-image').src = document.querySelector('.js-image-order-${CartItemsArrayOrdersPage[0][i].ItemIndex}').src;

                    let itemId = Number(document.querySelector('.product-item-id-${CartItemsArrayOrdersPage[0][i].ItemIndex}').innerHTML);

                    trackPackage(itemId);
                    ">
                        Track package
                    </button>
                </div>
            </div>    
            `;

            document.querySelector('.image-for-the-product').src = CartItemsArrayOrdersPage[0][i].ItemSrc;
            document.querySelector('.the-ordered-product-name').innerHTML = CartItemsArrayOrdersPage[0][i].ProductItemname;
            document.querySelector('.product-item-id').innerHTML = CartItemsArrayOrdersPage[0][i].ItemIndex;
            document.querySelector('.product-item-id').style.marginTop = '0.5rem';
            document.querySelector('.product-item-id').style.marginBottom = '0.5rem';

            document.querySelector('.the-ordered-product-arrival-date').innerHTML = 'Arriving on ' + updatedCartArray[0][i].deliveryDate;

            document.querySelector('.the-ordered-product-quantity').innerHTML = CartItemsArrayOrdersPage[0][i].ItemQuantity;

            neworderedProductsHTML = neworderedProductsHTML + orderedProductsHTML.innerHTML;

            document.querySelector('.for-generated-products-with-js').innerHTML = neworderedProductsHTML;
        }

    }
    
