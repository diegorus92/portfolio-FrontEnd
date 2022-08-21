import { ISocialNetwork } from "src/app/interfaces/social-network";
import { faFacebook, faLinkedin, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

export const SocialNetList:ISocialNetwork[] = [
    {
        id:1,
        iconName: "facebook",
        link:"https://www.facebook.com"
    }, 
    {
        id:2,
        iconName: "linkedin",
        link:"https://www.linkedin.com"
    }, 
    {
        id:3,
        iconName: "instagram",
        link:"https://www.instagram.com"
    }, 
    {
        id:4,
        iconName: "twitter",
        link:"https://twitter.com"
    }
]