export enum skillType{
    HARD,
    SOFT
}

export interface ISkill{
    id?:number,
    name:string,
    value:number, 
    type: skillType
}