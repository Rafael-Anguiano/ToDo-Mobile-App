const taskReducer = (data = [], action) => {
    switch(action.type){
        case 'add':
            return [...data, action.payload];

        case 'delete':
            return data.filter( task => task.id !== action.payload );
        
        case 'toggle':
            return data.map( task => 
                (task.id === action.payload) 
                    ? {...task, done: !task.done} 
                    : task   
            );

        default:
            return data;
    }
}

export default taskReducer