
const initialState = [];



export const itemReducer = (state = initialState , action) => {
    
    switch (action.type) {
        case 'ADD_ITEM':
            return performAddToCart(state, action.payload);
    
        case 'ADD_ITEM_COUNT' :
            let dataState = {...state[action.indx]};
            dataState.quantity >= dataState.count + 1 ?
                dataState.count !== undefined ?
                    dataState.count = dataState.count + 1 :
                    dataState = {...dataState, count : 1}
                : alert('NO MORE AVAILABLE');
            state[action.indx] = dataState;
            console.log("STATE CONSOLE ADD ITEM", state[action.indx]);
            return state;

        case 'REMOVE_ITEM_COUNT':
            return performMinusItem(state, action.payload, action.indx);
 
        case 'REMOVE_ITEM' : 
            return state.filter(item => item.id !== action.payload.id);
        
        default:
            return state;
   }

}



const performMinusItem = (cart, product, indx) => {
    if(product.count > 1)
    {
        cart[indx].count--;
    }
    else{
        cart = cart.filter(item => item.id !== product.id );
    }
    return cart;
}




const performAddToCart = (cart, product) =>{

    let alreadyInCart = false;
    cart.map( item =>{
        if(item.id === product.id){
            item.quantity >= item.count + 1 ?
                item.count ++ :
                alert("NO MORE AVAILABLE");
            alreadyInCart = true;
        }
    });

    if(!alreadyInCart)
    {
        cart = [...cart, {...product, count: 1}];
    }
    return cart
}



    // console.log("itemReducer 1:", state)
    // switch (action.type) {
    //     case 'ADD_ITEM':
    //         state.push(action.payload);
    //         console.log("itemReducer 2:",state);
    //         return state;
           
    //     case 'REMOVE_ITEM':
         
    //     default:
    //         return state;
    