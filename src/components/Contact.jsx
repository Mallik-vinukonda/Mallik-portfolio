import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="border-b border-neutral-900 pb-20"
			initial="hidden"
			whileInView="show"
			variants={containerVariants}
			viewport={{ once: true, amount: 0.1 }}
		>
			<motion.h2
				className="my-10 text-center text-4xl"
				variants={containerVariants}
			>
				Get in Touch
			</motion.h2>
			<div className="text-center tracking-tighter">
				<motion.p className="my-4" variants={containerVariants}>
					{CONTACT.address}
				</motion.p>
				<motion.p className="my-4" variants={containerVariants}>
					{CONTACT.phoneNo}
				</motion.p>
				<motion.a href="#" className="border-b" variants={containerVariants}>
					{CONTACT.email}
				</motion.a>
			</div>
		</motion.div>
	);
}

export default Contact;
