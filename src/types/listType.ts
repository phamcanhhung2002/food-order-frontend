export interface Food {
    id: string,
    name: string,
    price: number,
    salePrice: number | null,
    reviews: [],
    rate: number,
    qtyReview: number,
    images: Array<string>,
    qtyRemain: number,

    quickIntro: string
    desc: Array<string>,
}