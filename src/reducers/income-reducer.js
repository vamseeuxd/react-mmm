export const incomeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INCOME': {
            console.log(action);
            return (action.data) ? [...state, {...action.data}] : state
        }
        case 'UPDATE_INCOME': {
            return state.map((item) => item.id === action.data.id ? {...action.data} : item)
        }
        case 'DELETE_INCOME': {
            return state.filter((x) => x.id !== action.data.id);
        }
        default: {
            return state;
        }
    }
}