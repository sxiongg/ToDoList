const initialState = {
    toDoItem: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA': 
            state = {
                ...state,
                toDoItem: action.payload
            }
            console.log(state.toDoItem)
        default: 
            return state
    }
}

export default rootReducer