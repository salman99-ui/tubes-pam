const Order = (data) => {
    return {
        type : "Order" ,
        payload : {
            name : data.name ,
            price : data.price
        }
    }
}

export default Order