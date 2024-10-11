import logo from "../assets/4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-12 rounded-full" src={logo} alt="Logo" />
			</div>

			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a
					href="https://www.linkedin.com/in/mallik-vinukonda-27b8b525b"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com/Mallik-vinukonda"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<FaSquareXTwitter />
				</a>
				<a
					href="https://www.instagram.com/mallik_vinukonda/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
