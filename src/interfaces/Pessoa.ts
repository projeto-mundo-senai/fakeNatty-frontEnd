import type { Dieta } from "./Dieta";

export interface Pessoa {

id : number,
nome : string,
idade : number,
altura : number,
taxaMetabolicaBasal : number,
peso : number,
pretensaoFisica : string,
genero : string,
nivelAtividadeFisica : string,
email : string, 
dieta : Dieta [] 

}