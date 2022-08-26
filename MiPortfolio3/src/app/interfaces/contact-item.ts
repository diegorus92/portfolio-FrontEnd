import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IContactItem{
    id?:number,
    iconName: string,
    icon?: IconDefinition,
    data: string
}