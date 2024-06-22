import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: "",
    },
    {
        icon: <FaLinkedin />,
        path: "",
    },
    {
        icon: <FaInstagram />,
        path: "",
    },
    {
        icon: <FaFacebook />,
        path: "",
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