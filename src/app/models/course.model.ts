export interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    date?: string;
    img?: string;
    soldOut?: boolean;
    onSale?: boolean;
}
