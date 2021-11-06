export function addItem(answer) {
    return {
        type: 'ADD_ITEM',
        answer: answer,
    }
}
export function Reset() {
    return {
        type: 'RESET',
    }
}
