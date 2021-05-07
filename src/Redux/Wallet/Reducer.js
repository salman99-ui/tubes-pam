const initialvalues = {saldo : 1000 , last_transaction : []}

const Reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "BUY" :
            return{
                saldo : state.saldo - action.payload.price ,
                last_transaction : [...state.last_transaction , { name : action.payload.name , price : action.payload.price}]
            }
        default : 
            return state
    }
}

export default Reducer