export type IRating = {
    userId: string,
    rating: number
}
export type IComment = {
    _id: string,
    userId: string,
    text: string,
    username: string,
    createdAt: Date
}
export type IProduct = {
    _id: string,
    productName: string,
    price: number,
    rating: IRating[],
    animal: string,
    description: string,
    subtype: string,
    comments: IComment[],
    imageUrl: string
}


