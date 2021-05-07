const Add = (data) => {
    return {
        type : "addToCart" ,
        payload : {
            name : data.name , 
            price : data.price
        }
    }
}

const deletecart = () => {
    return {
        type : "deleteCart" 
    }
}

export { Add , deletecart }