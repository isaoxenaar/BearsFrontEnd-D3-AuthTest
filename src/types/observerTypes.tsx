import { bearType }  from "./bearTypes";

type observerType = {
    id: number, 
    name: string,
    email: string,
    password: string,
    color: string,
    bears: bearType[], 
}

export type { observerType }