import { IContactItem } from "src/app/interfaces/contact-item";
import { faEnvelope, faMobileScreenButton, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const ContactItems: IContactItem[] =[
    {
        faIcon: faEnvelope,
        data: "mi_email@yahoo.com.ar"
    },
    {
        faIcon: faMobileScreenButton,
        data: "3794256899"
    },
    {
        faIcon: faPhone,
        data: "3794221145"
    },
    {
        faIcon: faLocationDot,
        data: "Buenos Aires, Argentina"
    }
]