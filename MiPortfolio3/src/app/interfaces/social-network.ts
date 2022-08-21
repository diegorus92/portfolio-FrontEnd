import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ISocialNetwork{
    id?:number,
    icon?: IconDefinition,
    iconName:string,
    link:string
}