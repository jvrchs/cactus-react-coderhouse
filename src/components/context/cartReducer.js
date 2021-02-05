export const ACTIONS = {
    ADD_ITEM: 'add-item',
    REMOVE_ITEM: 'remove-item',
    CLEAR_CART: 'clear-cart',
    UPDATE_CART: 'update-cart'
}

export const cartReducer = (cart, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            return addItem(cart, action.payload.itemId, action.payload.quantity, action.payload.stock);
        case ACTIONS.REMOVE_ITEM:
            return cart.filter(item => item.itemId !== action.payload.itemId);
        case ACTIONS.CLEAR_CART:
            return [];
        case ACTIONS.UPDATE_CART:
            return updateCart(cart, action.payload);
        default:
        
    }
}

const addItem = (cart, itemId, quantity, stock) => {
    const isInCart = cart.filter(item => item.itemId === itemId);
    let cartWithoutItem = cart.filter(item => item.itemId !== itemId);
        if(isInCart.length !== 0) {
            const [itemObj] = isInCart;
            if(itemObj['quantity'] >= stock) {
                const newCart = [itemObj, ...cartWithoutItem];
                return sortCartById(newCart)
            } else {
                itemObj['quantity'] += quantity;
                const newCart = [itemObj, ...cartWithoutItem];
                return sortCartById(newCart);
            }   
        } 
        if(isInCart.length === 0){
              const itemObj = {itemId: itemId, quantity: quantity}
              const newCart = [itemObj, ...cartWithoutItem];
              return sortCartById(newCart)
          }  
};

const updateCart = (cart, cartChanges) => {
    let cartFilter = cart.filter(item => item.itemId !== cartChanges.itemId)
    let newCart = [cartChanges, ...cartFilter]
    newCart = newCart.filter(item => item.quantity !== 0)
    return sortCartById(newCart)
}


const sortCartById = cart => {
    const orderedCart = cart.sort((a, b) => {
        const itemA = a.itemId.toLowerCase();
        const itemB = b.itemId.toLowerCase();  
        if (itemA < itemB) {
            return -1
        }
        if (itemA > itemB) {
            return 1
        }
        return 0
    })
    return orderedCart
}