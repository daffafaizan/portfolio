import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "./links";

export const socials = [
  {
    href: GITHUB_LINK,
    icon: <FiGithub />,
  },
  {
    href: LINKEDIN_LINK,
    icon: <FiLinkedin />,
  },
  {
    href: EMAIL_LINK,
    icon: <FiMail />,
  },
];
