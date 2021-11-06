export interface IReduxState {
    count: number;
    items: string[];
}

export interface IAction {
    type: string;
    answer: string;
}
