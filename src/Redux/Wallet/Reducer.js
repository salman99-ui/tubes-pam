const initialvalues = {saldo : 1000 , last_transaction : []}

const Reducer = (state = initialvalues , action) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date()
    var calender = `${date.getDate()} - ${months[date.getMonth()]} - ${date.getFullYear()}`
    
    switch(action.type){
        case "BUY" :
            return{
                saldo : state.saldo - action.payload.price ,
                last_transaction : [...state.last_transaction , { name : action.payload.name , price : action.payload.price , calender : calender}]
            }
        default : 
            return state
    }
}

export default Reducer