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

export interface IMessage{
    by: string,
    text: string
}

export interface IFAQ{
    id: number,
    questionId: number,
    question: IQuestion
}

export interface IAskUs{
    id?: number,
    email: string,
    firstname: string,
    lastname: string,
    text: string,
    answered: boolean
}

export interface IUser {
    id: number;
    role: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}