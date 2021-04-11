export interface IQuestion{
    id: number,
    name: string,
    categoryId: number,
    category: ICategory,
    answerId: number,
    answer: IAnswer,
    text: string
}

export interface IAnswer{
    id: number,
    text: string
}

export interface ICategory{
    id: number,
    text: string
}