const initialvalues = {
    items : 0 ,
    data : []
}

const Reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "Order" : 
          return {
              items : state.items + 1 ,
              data : [...state.data , {name : action.payload.name , price : action.payload.price}]
          }
        default : 
          return state
    }
}

export default Reducer