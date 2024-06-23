import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/nguynqthawq",
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/nguyenquocthang/",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/nguyn.q.thanq/",
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/nguyn.q.thanq/",
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            }
            )}
        </div>
    )
}

export default Socials