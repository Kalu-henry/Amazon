
        let CartItemsString = localStorage.getItem( "CartItems" );
        let CartItemsArray = Array(JSON.parse(CartItemsString));
        
        let cartValue = Number(localStorage.getItem("Cart_QUantity"));
        document.querySelector('.number-of-items').innerHTML = cartValue;
        document.querySelector('.number-of-items').style.color = 'green';

        document.querySelector('.total-number-of-items').innerHTML = cartValue;

        let total = 0;

        for(let i = 0; i < 24; i++){
        total = total + Math.round(((CartItemsArray[0][i].ItemQuantity) * (CartItemsArray[0][i].ItemPrice))); 
        }

        document.querySelector('.items-amount').innerHTML = total;

        //created a new variable that will contain the new item amount after clicking the save button
        let newItemAmount = Number(document.querySelector('.items-amount').innerHTML);

        function calculateTotalAmountToBePaid(){

            let totalBeforeTax = Math.round(newItemAmount + Number(document.querySelector('.shipping-amount').innerHTML));
    
            document.querySelector('.amount-before-tax').innerHTML = totalBeforeTax;
    
            let estimatedTaxAmount = Math.round(0.1 * totalBeforeTax);
            document.querySelector('.estimated-tax-amount').innerHTML = estimatedTaxAmount;
    
            let totalOrder = totalBeforeTax + estimatedTaxAmount;
            document.querySelector('.total-amount').innerHTML = totalOrder;
        }

        let MondayOctoberninth = {
            year: 2023,
            month: 9,
            date: 9
        };

        let FridayOctoberthirteenth = {
            year: 2023,
            month: 9,
            date: 13
        };

        let WednesdayOctobereighteenth = {
            year: 2023,
            month: 9,
            date: 18
        };

        let newForOrdersHTML = ``;

        
        for(let i = 0; i < 24; i++){

            if(CartItemsArray[0][i].ItemQuantity > 0){

                let totalAmountOfEveryProductOrdered = 0;

                let forOrdersElement = document.querySelector('.for-orders');


                forOrdersElement.innerHTML = `
                <div class="product-details-for-checkout js-${CartItemsArray[0][i].Itemname}" style="padding-bottom: 0.7rem;">
                <div class="just-for-css-styling" style="margin-top: 0.5rem;margin-left: 2rem;margin-bottom: 0.5rem;font-weight: bold;font-size: 1.3rem;color: green;">Delivery date: <div class="${CartItemsArray[0][i].deliveryText}" style="display: inline-block;"> Friday, September 8 </div>
                </div>
                <div class="for-the-product">
                    <div class="for-the-product-details">
                        <div class="for-product-image">
                            <img src='images-for-project/round-sunglasses-black.jpg' style="width: 45%;object-fit:contain;" class="item-product-image">
                        </div>
                        <div>
                            <div class="for-product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
                            <div class="for-product-price">$10.90</div>
                            <div style="margin-bottom: 0.5rem;">
                                Item Id: <p class="itemIndex js-itemIndex-${CartItemsArray[0][i].ItemIndex}" style="display:inline-block;"></p>    
                            </div>
                            <div>
                                <label for="amount-of-items-${CartItemsArray[0][i].ItemIndex}">Quantity:</label>
                                <span class="amount-of-items amount-of-items-${CartItemsArray[0][i].ItemIndex}"></span>
                                <input type="number" name="amount-of-items-${CartItemsArray[0][i].ItemIndex}" id="amount-of-items-${CartItemsArray[0][i].ItemIndex}" style="width: 3rem;display:none;">
                                <div class="update-button update-button-${CartItemsArray[0][i].ItemIndex}" onclick="
                                document.querySelector('.update-button-${CartItemsArray[0][i].ItemIndex}').style.display = 'none';
                                document.querySelector('.save-button-${CartItemsArray[0][i].ItemIndex}').style.display = 'inline-block';
                                document.querySelector('#amount-of-items-${CartItemsArray[0][i].ItemIndex}').style.display = 'inline-block';
                                document.querySelector('.amount-of-items-${CartItemsArray[0][i].ItemIndex}').style.display = 'none';
                                ">Update</div>
                                <div class="save-button save-button-${CartItemsArray[0][i].ItemIndex}" onclick="
                                let ItemQuantityValue = Number(document.querySelector('#amount-of-items-${CartItemsArray[0][i].ItemIndex}').value);
                                let Itemid = Number(document.querySelector('.js-itemIndex-${CartItemsArray[0][i].ItemIndex}').innerHTML);
                                CartItemsArray[0][Itemid].ItemQuantity = 0;
                                CartItemsArray[0][Itemid].ItemQuantity = CartItemsArray[0][Itemid].ItemQuantity + ItemQuantityValue;

                                localStorage.setItem('CartItems1', JSON.stringify(CartItemsArray[0]));

                                let total = 0;

                                for(let i = 0; i < 24; i++){
                                total = total + Math.round(((CartItemsArray[0][i].ItemQuantity) * (CartItemsArray[0][i].ItemPrice))); 
                                }

                                document.querySelector('.items-amount').innerHTML = total;

                                total = Number(document.querySelector('.items-amount').innerHTML);

                                newItemAmount = Number(document.querySelector('.items-amount').innerHTML);

                                let totalBeforeTax = Math.round(total + Number(document.querySelector('.shipping-amount').innerHTML));
                                document.querySelector('.amount-before-tax').innerHTML = totalBeforeTax;

                                let estimatedTaxAmount = Math.round(0.1 * totalBeforeTax);
                                document.querySelector('.estimated-tax-amount').innerHTML = estimatedTaxAmount;

                                let totalOrder = totalBeforeTax + estimatedTaxAmount;
                                document.querySelector('.total-amount').innerHTML = totalOrder;

                                cartValue = (cartValue - Number(document.querySelector('.amount-of-items-${CartItemsArray[0][i].ItemIndex}').innerHTML)) + ItemQuantityValue;
                                document.querySelector('.total-number-of-items').innerHTML = cartValue;
                                document.querySelector('.amount-of-items-${CartItemsArray[0][i].ItemIndex}').innerHTML = Number(document.querySelector('#amount-of-items-${CartItemsArray[0][i].ItemIndex}').value);
                                document.querySelector('#amount-of-items-${CartItemsArray[0][i].ItemIndex}').style.display = 'none';
                                document.querySelector('.amount-of-items-${CartItemsArray[0][i].ItemIndex}').style.display = 'inline-block';
                                document.querySelector('.save-button-${CartItemsArray[0][i].ItemIndex}').style.display = 'none';
                                document.querySelector('.update-button-${CartItemsArray[0][i].ItemIndex}').style.display = 'inline-block';
                                document.querySelector('.number-of-items').innerHTML = cartValue;
                                
                                ">Save</div>
                                <div class="delete-button" onclick="
                                let Itemid = Number(document.querySelector('.js-itemIndex-${CartItemsArray[0][i].ItemIndex}').innerHTML);
                                document.querySelector('.js-${CartItemsArray[0][i].Itemname}').style.display = 'none';
                                cartValue = cartValue - CartItemsArray[0][Itemid].ItemQuantity;
                                document.querySelector('.js-total-number-of-items').innerHTML = cartValue;
                                document.querySelector('.js-number-of-items').innerHTML = cartValue;

                                CartItemsArray[0][Itemid].ItemQuantity = 0;

                                let newTotalAmountOfItems = 0;

                                CartItemsArray[0].forEach(
                                    (ArrayItem) =>{
                                        newTotalAmountOfItems = newTotalAmountOfItems + Math.round(ArrayItem.ItemQuantity * ArrayItem.ItemPrice);
                                    }
                                );

                                document.querySelector('.js-items-amount').innerHTML = newTotalAmountOfItems;

                                newItemAmount = Number(document.querySelector('.js-items-amount').innerHTML);
                                calculateTotalAmountToBePaid();
                                ">Delete</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="for-delivery-options-to-choose">
                        <div class="for-delivery-text">Choose a delivery option:</div>
                        <div class="for-free-shipping-full-details">
                            <div>
                                <input type="radio" name="${CartItemsArray[0][i].nameForDelivery}" class="delivery-selectors-${CartItemsArray[0][i].ItemIndex}" id="for-monday" onclick="
                                    document.querySelector('#for-monday').checked = true;
                                    document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML =  document.querySelector('.date-for-free-shipping').innerHTML;

                                    let Itemid = Number(document.querySelector('.js-itemIndex-${CartItemsArray[0][i].ItemIndex}').innerHTML);

                                    CartItemsArray[0][Itemid].deliveryDate = document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML;

                                    CartItemsArray[0][Itemid].deliveryDateNumber = '${WednesdayOctobereighteenth.year} ${WednesdayOctobereighteenth.month} ${WednesdayOctobereighteenth.date}';

                                    CartItemsArray[0][Itemid].deliveryValue = Math.round(Number(document.querySelector('.monday-shipping-value-${CartItemsArray[0][i].ItemIndex}').innerHTML));

                                    localStorage.setItem('CartItems1', JSON.stringify(CartItemsArray[0]));

                                    let totalDeliveryValue = 0;

                                        
                                    for(let i = 0; i < 24; i++){
                                    Math.round(totalDeliveryValue = totalDeliveryValue + CartItemsArray[0][i].deliveryValue);
                                    }

                                    document.querySelector('.shipping-amount').innerHTML = totalDeliveryValue;

                                    calculateTotalAmountToBePaid();

                                    totalAmountOfEveryProductOrdered = document.querySelector('.total-amount').innerHTML;

                                    localStorage.setItem('TotalOfAllProducts', totalAmountOfEveryProductOrdered );
                                    ">
                            </div>
                            <div>
                                <div class="date-for-free-shipping">Wednesday, October 18</div>
                                <div class="for-free-shipping">FREE <span class="monday-shipping-value-${CartItemsArray[0][i].ItemIndex}" style="display:none;">0</span> Shipping</div>
                            </div>
                        </div>
                        
                        <div class="for-tuesday-shipping-full-details">
                            <div>
                                <input type="radio" name="${CartItemsArray[0][i].nameForDelivery}" id="for-tuesday" onclick="
                                document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML = document.querySelector('.date-for-tuesday-shipping').innerHTML;

                                let Itemid = Number(document.querySelector('.js-itemIndex-${CartItemsArray[0][i].ItemIndex}').innerHTML);

                                CartItemsArray[0][Itemid].deliveryDate = document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML;

                                CartItemsArray[0][Itemid].deliveryDateNumber = '${FridayOctoberthirteenth.year} ${FridayOctoberthirteenth.month} ${FridayOctoberthirteenth.date}';

                                CartItemsArray[0][Itemid].deliveryValue = Math.round(Number(document.querySelector('.tuesday-shipping-value-${CartItemsArray[0][i].ItemIndex}').innerHTML));

                                localStorage.setItem('CartItems1', JSON.stringify(CartItemsArray[0]));

                                let totalDeliveryValue = 0;

                                        
                                for(let i = 0; i < 24; i++){
                                Math.round(totalDeliveryValue = totalDeliveryValue + CartItemsArray[0][i].deliveryValue);
                                }

                                document.querySelector('.shipping-amount').innerHTML = totalDeliveryValue;
                                calculateTotalAmountToBePaid();

                                totalAmountOfEveryProductOrdered = document.querySelector('.total-amount').innerHTML;

                                localStorage.setItem('TotalOfAllProducts', totalAmountOfEveryProductOrdered );
                                " class="delivery-selectors-${CartItemsArray[0][i].ItemIndex}">
                            </div>
                            <div>
                                <div class="date-for-tuesday-shipping">Friday, October 13</div>
                                <div class="for-tuesday-shipping">$<span class="tuesday-shipping-value-${CartItemsArray[0][i].ItemIndex}">4.99</span> - Shipping</div>
                            </div>
                        </div>
                        
                        <div class="for-friday-shipping-full-details">
                            <div>
                                <input type="radio" name="${CartItemsArray[0][i].nameForDelivery}" id="for-friday" onclick="
                                document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML = document.querySelector('.date-for-friday-shipping').innerHTML;

                                let Itemid = Number(document.querySelector('.js-itemIndex-${CartItemsArray[0][i].ItemIndex}').innerHTML);

                                CartItemsArray[0][Itemid].deliveryDate = document.querySelector('.${CartItemsArray[0][i].deliveryText}').innerHTML;

                                CartItemsArray[0][Itemid].deliveryDateNumber = '${MondayOctoberninth.year} ${MondayOctoberninth.month} ${MondayOctoberninth.date}';

                                CartItemsArray[0][Itemid].deliveryValue = Math.round(Number(document.querySelector('.friday-shipping-value-${CartItemsArray[0][i].ItemIndex}').innerHTML));

                                localStorage.setItem('CartItems1', JSON.stringify(CartItemsArray[0]));

                                let totalDeliveryValue = 0;

                                        
                                for(let i = 0; i < 24; i++){
                                Math.round(totalDeliveryValue = totalDeliveryValue + CartItemsArray[0][i].deliveryValue);
                                }

                                document.querySelector('.shipping-amount').innerHTML = totalDeliveryValue;

                                calculateTotalAmountToBePaid();

                                totalAmountOfEveryProductOrdered = document.querySelector('.total-amount').innerHTML;

                                localStorage.setItem('TotalOfAllProducts', totalAmountOfEveryProductOrdered );
                                " class="delivery-selectors-${CartItemsArray[0][i].ItemIndex}">
                            </div>
                            <div>
                                <div class="date-for-friday-shipping">Monday, October 9</div>
                                <div class="for-friday-shipping">$<span class="friday-shipping-value-${CartItemsArray[0][i].ItemIndex}">9.99</span> - Shipping</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
                `;
                
                document.querySelector('.itemIndex').innerHTML = CartItemsArray[0][i].ItemIndex;
                document.querySelector('.item-product-image').src = CartItemsArray[0][i].ItemSrc;
                document.querySelector('.for-product-name').innerHTML = CartItemsArray[0][i].ProductItemname;
                document.querySelector('.for-product-price').innerHTML = `$${CartItemsArray[0][i].ItemPrice}`;
                document.querySelector('.amount-of-items').innerHTML = CartItemsArray[0][i].ItemQuantity;
                newForOrdersHTML = newForOrdersHTML + forOrdersElement.innerHTML;
                document.querySelector('.for-orders').innerHTML = newForOrdersHTML;
                
            }


            
        }
    
