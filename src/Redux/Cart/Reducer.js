const initialvalues = { data : [] , total_price : 0 }

const Reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "addToCart" : 
            return {
                data : [...state.data , {
                    name : action.payload.name ,
                    price : action.payload.price 
                }] ,

                total_price : state.total_price + action.payload.price
            }
            
        case "deleteCart" : 
            return {
                data : [] ,
                total_price : 0
            }
        default : 
            return state
    }
}

export default Reducer