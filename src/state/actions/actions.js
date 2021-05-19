export const logIn = (id) => {
   return {
       type : 'LOGIN',
       id : id
    }
}
export const logOut = () => {
    return {
        type : 'LOGOUT'
    }
}

export const adminIn = (id) => {
    return {
        type : 'ADMININ',
        id : id
     }
 }
 export const adminOut = () => {
     return {
         type : 'ADMINOUT'
     }
 }

export const addToCart = (item) => {
    console.log("ACTION", item)
    return{
        type : 'ADD_ITEM',
        payload : item
    }
}

export const removeItemCount = (item, indx) => {
    return{
        type : 'REMOVE_ITEM_COUNT',
        payload : item,
        indx : indx
    }
}

export const addItemCount = (indx) => {
    return{
        type : 'ADD_ITEM_COUNT',
        indx : indx
    }
}

export const removeItem = (item) => {
    return{
        type : 'REMOVE_ITEM',
        payload : item,
    }
}
