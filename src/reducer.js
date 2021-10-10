const initialState = {
    count: 0,
    items: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_ITEM':
            let answer = '';
            const random = Math.floor(Math.random() * 2) + 1;
            random > 1 ? answer = 'Нет' : answer = 'Да';
            return {
                ...state,
                items: [...state.items, answer],
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
