const initialState = {
    count: 0,
    items: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.answer],
                count: state.count + 1,
            };
        case 'RESET':
            return {
                count: 0,
                items: [],
            };
        default:
            return state;
    }
}
