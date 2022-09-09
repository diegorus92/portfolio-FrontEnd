export interface ISkill{
    id?:number,
    datasets:[
        {
            data:number[],
            backgroundColor:string[]
        }
    ],
    labels:string[]
}