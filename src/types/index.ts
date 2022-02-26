export interface IFeedbackItem {
    id: number | string;
    rating: number;
    text: string;
}

export interface Children {
    children: JSX.Element | JSX.Element[];
}
