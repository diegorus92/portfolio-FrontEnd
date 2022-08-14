import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { ISocialNetwork } from "src/app/interfaces/social-network";
import { faFacebook, faLinkedin, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

export const SocialNetList:ISocialNetwork[] = [
    {
        id:1,
        faIcon: faFacebook,
        link:"https://www.facebook.com"
    }, 
    {
        id:2,
        faIcon: faLinkedin,
        link:"https://www.linkedin.com"
    }, 
    {
        id:3,
        faIcon: faSquareInstagram,
        link:"https://www.instagram.com"
    }, 
    {
        id:4,
        faIcon: faSquareTwitter,
        link:"https://twitter.com"
    }
]