import { IContactItem } from "src/app/interfaces/contact-item";
import { faEnvelope, faMobileScreenButton, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const ContactItems: IContactItem[] =[
    {
        id: 1,
        iconName: "envelope",
        data: "mi_email@yahoo.com.ar"
    },
    {
        id: 2,
        iconName: "mobile",
        data: "3794256899"
    },
    {
        id: 3,
        iconName: "phone",
        data: "3794221145"
    },
    {
        id: 4,
        iconName: "location",
        data: "Buenos Aires, Argentina"
    }
]