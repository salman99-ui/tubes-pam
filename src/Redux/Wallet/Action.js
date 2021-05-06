const Buy = (data) => {
    return {
        type : "BUY" ,
        payload : {
            name : data.name ,
            price : data.price
        } 
    }
}

export default Buy