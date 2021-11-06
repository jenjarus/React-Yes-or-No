export const addItem = (answer: string) => ({
    type: 'ADD_ITEM',
    answer: answer,
});

export const Reset = () => ({
    type: 'RESET',
});
