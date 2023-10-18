let Cart = [];
let CartQuantity = 0;

let theItems = [
{
    Itemname: 'Socks',
    ItemClassName: 'socks',
    nameForDelivery: 'Socks-delivery',
    deliveryText: 'forSocks',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    ItemIndex: 0,
    ItemQuantity: 0,
    ItemPrice: 10.90,
    ItemKeyword: ['socks', 'cotton', 'black'],
    ItemSrc: 'images-for-project/athletic-cotton-socks-6-pairs.jpg',
    rating: 4.5,
    noOfRating: 87,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'Tshirt',
    ItemClassName: 'tshirt',
    nameForDelivery: 'Tshirts-delivery',
    deliveryText: 'forTshirt',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Adults Plain Cotton T-Shirt - 2 Pack',
    ItemIndex: 1,
    ItemQuantity: 0,
    ItemPrice: 7.99,
    ItemKeyword: ['tshirt', 'plain', 'cotton'],
    ItemSrc: 'images-for-project/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    rating: 4.5,
    noOfRating: 56,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'RugMat',
    ItemClassName: 'rug',
    nameForDelivery: 'Rugmat-delivery',
    deliveryText: 'forRug',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    ItemIndex: 2,
    ItemQuantity: 0,
    ItemPrice: 12.50,
    ItemKeyword: ['mat', 'bathroom', 'rug'],
    ItemSrc: 'images-for-project/bathroom-rug.jpg',
    rating: 4,
    noOfRating: 119,
    ratingSrc: 'images-for-project/rating-4.png'
},{
    Itemname: 'Curtains',
    ItemClassName: 'curtain',
    nameForDelivery: 'Curtains-delivery',
    deliveryText: 'forCurtains',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Blackout Curtains Set 4-Pack - Beige',
    ItemIndex: 3,
    ItemQuantity: 0,
    ItemPrice: 45.99,
    ItemKeyword: ['curtains', 'curtain', 'beige'],
    ItemSrc: 'images-for-project/blackout-curtain-set-beige.webp',
    rating: 5,
    noOfRating: 232,
    ratingSrc: 'images-for-project/rating-5.png'
}, {
    Itemname: 'BlackCurtains',
    ItemClassName: 'blackCurtains',
    nameForDelivery: 'Black-delivery',
    deliveryText: 'forBlackCurtains',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Blackout Curtains Set 42 x 84-Inch - Black, 2',
    ItemIndex: 4,
    ItemQuantity: 0,
    ItemPrice: 30.99,
    ItemKeyword: ['curtains', 'black', 'curtain'],
    ItemSrc: 'images-for-project/blackout-curtains-black.jpg',
    rating: 5,
    noOfRating: 363,
    ratingSrc: 'images-for-project/rating-5.png'
}, {
    Itemname: 'Towel',
    ItemClassName: 'towels',
    nameForDelivery: 'towel-delivery',
    deliveryText: 'forTowel',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Luxury Towel Set - Graphite Gray',
    ItemIndex: 5,
    ItemQuantity: 0,
    ItemPrice: 35.99,
    ItemKeyword: ['towel', 'bathing', 'bathing towel'],
    ItemSrc: 'images-for-project/luxury-tower-set-6-piece.jpg',
    rating: 4.5,
    noOfRating: 144,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'Earrings',
    ItemClassName: 'earrings',
    nameForDelivery: 'earrings-delivery',
    deliveryText: 'forEarrings',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Double Oval Twist French Wire Earrings',
    ItemIndex: 6,
    ItemQuantity: 0,
    ItemPrice: 24.00,
    ItemKeyword: ['earrings', 'french', 'earring'],
    ItemSrc: 'images-for-project/double-elongated-twist-french-wire-earrings.webp',
    rating: 4,
    noOfRating: 117,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'Duvet',
    ItemClassName: 'duvet',
    nameForDelivery: 'duvet-delivery',
    deliveryText: 'forDuvet',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Duvet Cover Set with Zipper Closure',
    ItemIndex: 7,
    ItemQuantity: 0,
    ItemPrice: 23.99,
    ItemKeyword: ['duvet', 'bed cover', 'cover'],
    ItemSrc: 'images-for-project/duvet-cover-set-blue-twin.jpg',
    rating: 5,
    noOfRating: 456,
    ratingSrc: 'images-for-project/rating-5.png'
}, {
    Itemname: 'Tissue',
    ItemClassName: 'tissue',
    nameForDelivery: 'tissue-delivery',
    deliveryText: 'forTissue',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'2-Ply Kitchen Paper Towels - 30 Pack',
    ItemIndex: 8,
    ItemQuantity: 0,
    ItemPrice: 57.99,
    ItemKeyword: ['tissue','paper' ,'paper towel'],
    ItemSrc: 'images-for-project/kitchen-paper-towels-30-pack.jpg',
    rating: 4.5,
    noOfRating: 1045,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'PinkSneakers',
    ItemClassName: 'pinkSneakers',
    nameForDelivery: 'pinksneakers-delivery',
    deliveryText: 'forPinkSneakers',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Waterproof Knit Athletic Sneakers - Pink',
    ItemIndex: 9,
    ItemQuantity: 0,
    ItemPrice: 33.90,
    ItemKeyword: ['sneakers', 'athlethic', 'waterproof'],
    ItemSrc: 'images-for-project/knit-athletic-sneakers-pink.webp',
    rating: 4,
    noOfRating: 89,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'Kaki',
    ItemClassName: 'kaki',
    nameForDelivery: 'kaki-delivery',
    deliveryText: 'forkaki',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Mens Classic-fit Pleated Chino Pants',
    ItemIndex: 10,
    ItemQuantity: 0,
    ItemPrice: 22.90,
    ItemKeyword: ['kaki', 'chino', 'pants'],
    ItemSrc: 'images-for-project/men-chino-pants-beige.jpg',
    rating: 4,
    noOfRating: 9017,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'RedHoddie',
    ItemClassName: 'redHoodie',
    nameForDelivery: 'redhoodie-delivery',
    deliveryText: 'forRedHoodie',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Mens Full-Zip Hooded Fleece Sweatshirt',
    ItemIndex: 11,
    ItemQuantity: 0,
    ItemPrice: 24.00,
    ItemKeyword: ['hoodie', 'sweatshirt'],
    ItemSrc: 'images-for-project/men-cozy-fleece-zip-up-hoodie-red.jpg',
    rating: 5,
    noOfRating: 3157,
    ratingSrc: 'images-for-project/rating-5.png'
}, {
    Itemname: 'RegularPolo',
    ItemClassName: 'polo',
    nameForDelivery: 'polo-delivery',
    deliveryText: 'forPolo',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Mens Regular-Fit Quick-Dry Golf Polo Shirt',
    ItemIndex: 12,
    ItemQuantity: 0,
    ItemPrice: 15.99,
    ItemKeyword: ['polo', 'golf', 'mens'],
    ItemSrc: 'images-for-project/men-golf-polo-t-shirt-blue.jpg',
    rating: 4.5,
    noOfRating: 2556,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'yellowHoodie',
    ItemClassName: 'yellowHoodie',
    nameForDelivery: 'yellowhoodie-delivery',
    deliveryText: 'forYellowHoodie',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Plain Hooded Fleece Sweatshirt',
    ItemIndex: 13,
    ItemQuantity: 0,
    ItemPrice: 24.00,
    ItemKeyword: ['hoodie', 'sweatshirt'],
    ItemSrc: 'images-for-project/plain-hooded-fleece-sweatshirt-yellow.jpg',
    rating: 5,
    noOfRating: 317,
    ratingSrc: 'images-for-project/rating-5.png'
}, {
    Itemname: 'TrashCan',
    ItemClassName: 'trashcan',
    nameForDelivery: 'trash-delivery',
    deliveryText: 'forTrashcan',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Trash Can with Foot Pedal - Brushed',
    ItemIndex: 14,
    ItemQuantity: 0,
    ItemPrice: 83.00,
    ItemKeyword: ['trash','can', 'trashcan'],
    ItemSrc: 'images-for-project/trash-can-with-foot-pedal-50-liter.jpg',
    rating: 4.5,
    noOfRating: 2286,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'Beanie',
    ItemClassName: 'beanie',
    nameForDelivery: 'beanie-delivery',
    deliveryText: 'forBeanie',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Womens Chunky Cable Beanie - Gray',
    ItemIndex: 15,
    ItemQuantity: 0,
    ItemPrice: 12.50,
    ItemKeyword: ['beanie', 'women', 'cable'],
    ItemSrc: 'images-for-project/women-chunky-beanie-gray.webp',
    rating: 4,
    noOfRating: 83,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'Sunglasses',
    ItemClassName: 'sunglasses',
    nameForDelivery: 'sunglasses-delivery',
    deliveryText: 'forSunglasses',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Round Sunglasses',
    ItemIndex: 16,
    ItemQuantity: 0,
    ItemPrice: 15.60,
    ItemKeyword: ['sunglasses', 'glasses', 'eye glass'],
    ItemSrc: 'images-for-project/round-sunglasses-black.jpg',
    rating: 4,
    noOfRating: 30,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'GlassKettle',
    ItemClassName: 'kettle',
    nameForDelivery: 'kettle-delivery',
    deliveryText: 'forKettle',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Electric Glass and Steel Hot Tea Water Kettle',
    ItemIndex: 17,
    ItemQuantity: 0,
    ItemPrice: 30.74,
    ItemKeyword: ['kettle', 'electric', 'steel'],
    ItemSrc: 'images-for-project/electric-glass-and-steel-hot-water-kettle.webp',
    rating: 4.5,
    noOfRating: 846,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'BlackSneakers',
    ItemClassName: 'blackSneakers',
    nameForDelivery: 'blacksneakers-delivery',
    deliveryText: 'forBlackSneakers',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Waterproof Knit Athletic Sneakers - Gray',
    ItemIndex: 18,
    ItemQuantity: 0,
    ItemPrice: 33.90,
    ItemKeyword: ['sneakers', 'waterproof', 'athletic'],
    ItemSrc: 'images-for-project/knit-athletic-sneakers-gray.jpg',
    rating: 4,
    noOfRating: 89,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'LiquidSoap',
    ItemClassName: 'liquidSoap',
    nameForDelivery: 'liquidsoap-delivery',
    deliveryText: 'forLiquidSoap',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Liquid Laundry Detergent, 110 Loadsoap',
    ItemIndex: 19,
    ItemQuantity: 0,
    ItemPrice: 28.99,
    ItemKeyword: ['detergent', 'soap', 'laundry'],
    ItemSrc: 'images-for-project/liquid-laundry-detergent-plain.jpg',
    rating: 4,
    noOfRating: 305,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'Blender',
    ItemClassName: 'blender',
    nameForDelivery: 'blender-delivery',
    deliveryText: 'forBlender',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Countertop Blender - 64oz, 1400 Watts',
    ItemIndex: 20,
    ItemQuantity: 0,
    ItemPrice: 107.47,
    ItemKeyword: ['blender'],
    ItemSrc: 'images-for-project/countertop-blender-64-oz.jpg',
    rating: 4.5,
    noOfRating: 3,
    ratingSrc: 'images-for-project/rating-45.png'
}, {
    Itemname: 'Mirror',
    ItemClassName: 'mirror',
    nameForDelivery: 'mirror-delivery',
    deliveryText: 'forMirror',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Vanity Mirror with Heavy Base - Chrome',
    ItemIndex: 21,
    ItemQuantity: 0,
    ItemPrice: 16.49,
    ItemKeyword: ['mirror', 'vanity'],
    ItemSrc: 'images-for-project/vanity-mirror-silver.jpg',
    rating: 4,
    noOfRating: 130,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'WomenJoggers',
    ItemClassName: 'women-jogger',
    nameForDelivery: 'womenJoggers-delivery',
    deliveryText: 'forWomenJogger',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Womens Fleece Jogger Sweatpant',
    ItemIndex: 22,
    ItemQuantity: 0,
    ItemPrice: 24.00,
    ItemKeyword: ['jogger', 'sweatpants', 'joggers'],
    ItemSrc: 'images-for-project/women-french-terry-fleece-jogger-gray.jpg',
    rating: 4,
    noOfRating: 248,
    ratingSrc: 'images-for-project/rating-4.png'
}, {
    Itemname: 'CoffeeMaker',
    ItemClassName: 'coffeemaker',
    nameForDelivery: 'Coffeemaker-delivery',
    deliveryText: 'forCoffemaker',
    deliveryValue: 0,
    deliveryDate: '',
    deliveryDateNumber: '',
    ProductItemname:'Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black',
    ItemIndex: 23,
    ItemQuantity: 0,
    ItemPrice: 22.50,
    ItemKeyword: ['coffeemaker', 'coffee'],
    ItemSrc: 'images-for-project/coffeemaker-with-glass-carafe-black.jpg',
    rating: 5,
    noOfRating: 1211,
    ratingSrc: 'images-for-project/rating-5.png'
}];


function searchProduct(){

    let lowerCaseInputValue = String(document.querySelector('.input-search-box').value).toLowerCase();
    
    let searchBoxValue = lowerCaseInputValue;
    
    let searchProductsToBeAdded = ``;

    for(let i = 0; i < 24; i++){

        let x = 3;
        if((searchBoxValue === theItems[i].ItemKeyword[x - x]) || (searchBoxValue === theItems[i].ItemKeyword[x - (x - 1)]) || (searchBoxValue === theItems[i].ItemKeyword[x - (x - 2)])){


            let searchProductValueHTML = document.querySelector('.container-for-all-products');
            searchProductValueHTML.innerHTML = `
                <div class="product-details js-product-details-${theItems[i].ItemIndex}">
                    <div class="image-div">
                        <img src='images-for-project/athletic-cotton-socks-6-pairs.jpg' style="width: 100%;height: 100%;object-fit: contain;" class="image-for-this-search-product js-image-for-this-search-product-${theItems[i].ItemIndex}">
                    </div>
                    <div class="product-text js-product-text-${theItems[i].ItemIndex}">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>
                    <div class="product-rating">
                        <img src='images-for-project/rating-45.png' style="height: 100%;" class="rating-image js-rating-image-${theItems[i].ItemIndex}">
                        <div class="rating-text js-rating-text-${theItems[i].ItemIndex}">87</div>
                    </div>
                    <div class="product-price js-product-price-${theItems[i].ItemIndex}">
                        $10.90
                    </div>
                    <div class="product-quantity">
                        <select class="${theItems[i].ItemClassName}" name="Quantity" id="Quantity">
                            <option  value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                        </select>
                    </div>
                    <div class="for-Js-text-added js-for-text-added-${theItems[i].ItemIndex}"></div>
                    <div class="for-button">
                        <button class="add-button" onclick="add${theItems[i].Itemname}ToCart()">Add to Cart</button>
                    </div>
                </div>
            `;

            
            document.querySelector('.image-for-this-search-product').src = theItems[i].ItemSrc;
            document.querySelector('.product-text').innerHTML = theItems[i].ProductItemname;
            document.querySelector('.product-price').innerHTML = `$${theItems[i].ItemPrice}`;
            document.querySelector('.rating-image').src = theItems[i].ratingSrc;
            document.querySelector('.rating-text').innerHTML = theItems[i].noOfRating;

            document.querySelector('.product-details').style.border = 'border: 3px solid lightgray';
            document.querySelector('.product-details').style.padding = '1rem';

            searchProductsToBeAdded = searchProductsToBeAdded + searchProductValueHTML.innerHTML;
            document.querySelector('.container-for-all-products').innerHTML = searchProductsToBeAdded;

            return;
        }else{
            document.querySelector('.container-for-all-products').innerHTML = `
            <div>Sorry this product is currently out of stock</div>
            <div>
            <a href="amazon.html">View all avaliable products</a>
            </div> 
            `;
        }
    }

}

function Dropdownlist(){
    document.querySelector('.hamburger-exit-image').style.display = 'block';
    document.querySelector('.hamburger-image').style.display = 'none';
    document.getElementById('dropdown-info').style.display = 'block';
    document.getElementById('body').style.paddingTop = '7rem';

    document.querySelector('.cart-notification').style.display = 'none';
}
function exitDropdownlist(){
    document.querySelector('.hamburger-exit-image').style.display = 'none';
    document.querySelector('.hamburger-image').style.display = 'block';
    document.getElementById('dropdown-info').style.display = 'none';
    document.getElementById('body').style.paddingTop = '0.5rem';

    if(CartQuantity > 0){
        document.querySelector('.cart-notification').style.display = 'block';
    }else{
        document.querySelector('.cart-notification').style.display = 'none';
    }
}

function addSocksToCart(){
    let noOfItems = Number(document.querySelector('.socks').value);
    theItems[0].ItemQuantity = theItems[0].ItemQuantity + noOfItems;
    let noOfSocks = `${theItems[0].ItemQuantity} socks`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addTshirtToCart(){
    let noOfItems = Number(document.querySelector('.tshirt').value);
    theItems[1].ItemQuantity = theItems[1].ItemQuantity + noOfItems;
    let noOfTshirts = `${theItems[1].ItemQuantity} T-shirt`;
    CartQuantity = CartQuantity + noOfItems;

    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addRugMatToCart(){
    let noOfItems = Number(document.querySelector('.rug').value);
    theItems[2].ItemQuantity = theItems[2].ItemQuantity + noOfItems;
    let noOfRugs = `${theItems[2].ItemQuantity} RugMats`;
    CartQuantity = CartQuantity + noOfItems; 

    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addCurtainsToCart(){
    let noOfItems = Number(document.querySelector('.curtain').value);
    theItems[3].ItemQuantity = theItems[3].ItemQuantity + noOfItems;
    let noOfCurtains = `${theItems[3].ItemQuantity} Curtains`;
    CartQuantity = CartQuantity + noOfItems; 

    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;

    document.querySelector('.cart-notification').style.display = 'block';

    // let displayAddedText = setInterval(()=>{
    //     document.querySelector('.for-Js-text-added-4').style.display = 'block';
    //     document.querySelector('.for-Js-text-added-4').innerHTML = 'Added';
    //     document.querySelector('.for-Js-text-added-4').style.color = 'green';
    //     document.querySelector('.for-Js-text-added-4').style.fontWeight = 'bold';
    // }, 1000);

    // clearInterval(displayAddedText);
}
function addBlackCurtainsToCart(){
    let noOfItems = Number(document.querySelector('.blackCurtains').value);
    theItems[4].ItemQuantity = theItems[4].ItemQuantity + noOfItems;
    let noOfBlackCurtains = `${theItems[4].ItemQuantity} Black Curtains`;
    CartQuantity = CartQuantity + noOfItems; 

    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addTowelToCart(){
    let noOfItems = Number(document.querySelector('.towels').value);
    theItems[5].ItemQuantity = theItems[5].ItemQuantity + noOfItems;
    let noOfTowel = `${theItems[5].ItemQuantity} Towels`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addEarringsToCart(){
    let noOfItems = Number(document.querySelector('.earrings').value);
    theItems[6].ItemQuantity = theItems[6].ItemQuantity + noOfItems;
    let noOfearrings = `${theItems[6].ItemQuantity} earrings`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addDuvetToCart(){
    let noOfItems = Number(document.querySelector('.duvet').value);
    theItems[7].ItemQuantity = theItems[7].ItemQuantity + noOfItems;
    let noOfduvet = `${theItems[7].ItemQuantity} duvet`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addTissueToCart(){
    let noOfItems = Number(document.querySelector('.tissue').value);
    theItems[8].ItemQuantity = theItems[8].ItemQuantity + noOfItems;
    let noOftissue = `${theItems[8].ItemQuantity} tissue`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addPinkSneakersToCart(){
    let noOfItems = Number(document.querySelector('.pinkSneakers').value);
    theItems[9].ItemQuantity = theItems[9].ItemQuantity + noOfItems;
    let noOfpinkSneakers = `${theItems[9].ItemQuantity} pinkSneakers`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addKakiToCart(){
    let noOfItems = Number(document.querySelector('.kaki').value);
    theItems[10].ItemQuantity = theItems[10].ItemQuantity + noOfItems;
    let noOfkaki = `${theItems[10].ItemQuantity} kaki`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addRedHoddieToCart(){
    let noOfItems = Number(document.querySelector('.redHoodie').value);
    theItems[11].ItemQuantity = theItems[11].ItemQuantity + noOfItems;
    let noOfredHoodie = `${theItems[11].ItemQuantity} red Hoodie`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addRegularPoloToCart(){
    let noOfItems = Number(document.querySelector('.polo').value);
    theItems[12].ItemQuantity = theItems[12].ItemQuantity + noOfItems;
    let noOfpolo = `${theItems[12].ItemQuantity} polo`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addyellowHoodieToCart(){
    let noOfItems = Number(document.querySelector('.yellowHoodie').value);
    theItems[13].ItemQuantity = theItems[13].ItemQuantity + noOfItems;
    let noOfyellowHoodie = `${theItems[13].ItemQuantity} yellowHoodie`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addTrashCanToCart(){
    let noOfItems = Number(document.querySelector('.trashcan').value);
    theItems[14].ItemQuantity = theItems[14].ItemQuantity + noOfItems;
    let noOftrashcan = `${theItems[14].ItemQuantity} trashcan`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addBeanieToCart(){
    let noOfItems = Number(document.querySelector('.beanie').value);
    theItems[15].ItemQuantity = theItems[15].ItemQuantity + noOfItems;
    let noOfbeanie = `${theItems[15].ItemQuantity} beanie`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addSunglassesToCart(){
    let noOfItems = Number(document.querySelector('.sunglasses').value);
    theItems[16].ItemQuantity = theItems[16].ItemQuantity + noOfItems;
    let noOfsunglasses = `${theItems[16].ItemQuantity} sunglasses`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addGlassKettleToCart(){
    let noOfItems = Number(document.querySelector('.kettle').value);
    theItems[17].ItemQuantity = theItems[17].ItemQuantity + noOfItems;
    let noOfkettle = `${theItems[17].ItemQuantity} kettle`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;

    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addBlackSneakersToCart(){
    let noOfItems = Number(document.querySelector('.blackSneakers').value);
    theItems[18].ItemQuantity = theItems[18].ItemQuantity + noOfItems;
    let noOfblackSneakers = `${theItems[18].ItemQuantity} black Sneakers`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);

    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
function addLiquidSoapToCart(){
    let noOfItems = Number(document.querySelector('.liquidSoap').value);
    theItems[19].ItemQuantity = theItems[19].ItemQuantity + noOfItems;
    let noOfliquidSoap = `${theItems[19].ItemQuantity} liquidSoap`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addBlenderToCart(){
    let noOfItems = Number(document.querySelector('.blender').value);
    theItems[20].ItemQuantity = theItems[20].ItemQuantity + noOfItems;
    let noOfBlender = `${theItems[20].ItemQuantity} Blender`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addMirrorToCart(){
    let noOfItems = Number(document.querySelector('.mirror').value);
    theItems[21].ItemQuantity = theItems[21].ItemQuantity + noOfItems;
    let noOfMirror = `${theItems[21].ItemQuantity} Mirror`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addWomenJoggersToCart(){
    let noOfItems = Number(document.querySelector('.women-jogger').value);
    theItems[22].ItemQuantity = theItems[22].ItemQuantity + noOfItems;
    let noOfWomenJoggers = `${theItems[22].ItemQuantity} joggers`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}

function addCoffeeMakerToCart(){
    let noOfItems = Number(document.querySelector('.coffeemaker').value);
    theItems[23].ItemQuantity = theItems[23].ItemQuantity + noOfItems;
    let noOfCoffeeMaker = `${theItems[23].ItemQuantity} Coffee Makers`;
    CartQuantity = CartQuantity + noOfItems; 
    
    let CartItems = JSON.stringify(theItems);
    localStorage.setItem("CartItems",CartItems);
    localStorage.setItem("Cart_QUantity", `${CartQuantity}`);
    
    document.querySelector('.number-of-items-in-cart').innerHTML = `${CartQuantity}`;
    document.querySelector('.for-cart').innerHTML = `Cart(${CartQuantity})`;
    document.querySelector('.cart-notification').style.display = 'block';
}
