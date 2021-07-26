import { Subcategories } from "./subcategories.interface";

export interface Categories {
    id?: number,
    name: string,
    img?: string,
    bgColor: string,
    subcategories?: Subcategories[]
}

