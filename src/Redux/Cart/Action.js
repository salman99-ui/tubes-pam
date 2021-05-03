const add = (data) => {
    return {
        type : "addToCart" ,
        payload : {
            name : data.name , 
            price : data.price
        }
    }
}

export default add