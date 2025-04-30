//Tais aqruivos de serviços auiliam com manipulações de dados junto a base de dados que no caso aqui é o local, porém
//poderia ser um BD ou algo vindo em JSON ou XML de uma API
//optei por fazer a exportação de funções para fixar que pode ser feito assim ao invés de exportar constantes como em category.ts

import {data} from "../data/index";

export function getAllProducts(){
    return data.products;
}
export function getProductById(pId:number){
    return data.products.find(item=>item.id ===pId)
}
export function getProductsByCategory(pIdCategory:number){
    return data.products.filter(item=>item.idCategory ===pIdCategory)
}