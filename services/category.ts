//Tais aqruivos de serviços auiliam com manipulações de dados junto a base de dados que no caso aqui é o local, porém
//poderia ser um BD ou algo vindo em JSON ou XML de uma API
//optei por fazer a exportação de constantes para fixar que pode ser feito assim ao invés de exportar funções como em product.ts

import {data} from "../data/index";

export const getallCategories=()=>{
    return data.categories;
}
export const getCategoryById=(pId:number)=>{
    return data.categories.find(item=>item.id===pId);
}