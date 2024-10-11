import { RiReactjsLine } from "react-icons/ri";
import {
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiVercel,
	SiTensorflow,
	SiUnrealengine,
	SiGithub,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import {
	FaAws,
	FaNode,
	FaJava,
	FaPython,
	FaFigma,
	FaUnity,
	FaDocker,
} from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";

function Technologies() {
	const itemVariants = {
		initial: { y: -10, rotate: 0 },
		animate: {
			y: [10, -10],
			rotate: [0, 5, -5, 0],
			transition: {
				duration: 1,
				ease: "linear",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				ease: "easeInOut",
			},
		},
	};

	const hoverEffect = {
		whileHover: {
			scale: 1.1,
			transition: {
				type: "spring",
				stiffness: 300,
			},
		},
	};

	const techStack = [
		{ icon: <RiReactjsLine className="text-5xl text-cyan-400" /> },
		{ icon: <SiNextdotjs className="text-5xl" /> },
		{ icon: <SiTailwindcss className="text-5xl text-sky-400" /> },

		{ icon: <SiMongodb className="text-5xl text-green-500" /> },
		{ icon: <BiLogoPostgresql className="text-5xl text-sky-700" /> },
		{ icon: <FaAws className="text-5xl text-orange-400" /> },
		{ icon: <FaNode className="text-5xl text-green-500" /> },
		{ icon: <SiExpress className="text-5xl text-gray-400" /> },

		{ icon: <FaDocker className="text-5xl text-sky-400" /> },
		{ icon: <SiGithub className="text-5xl text-gray-500" /> },
		{ icon: <SiTensorflow className="text-5xl text-orange-500" /> },
		{ icon: <FaPython className="text-5xl" /> },
		{ icon: <FaFigma className="text-5xl" /> },
		{ icon: <FaJava className="text-5xl text-red-500" /> },
		{ icon: <SiUnrealengine className="text-5xl" /> },
		{ icon: <FaUnity className="text-5xl" /> },
	];

	return (
		<div className="border-b border-neutral-800 pb-24">
			<h2 className="my-20 text-center text-4xl">Technologies</h2>
			<motion.div
				className="flex flex-wrap items-center justify-center gap-6"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{techStack.map((tech, index) => (
					<motion.div
						key={index}
						className="rounded-full border-4 border-neutral-800 p-4 shadow-lg"
						variants={itemVariants}
						initial="initial"
						animate="animate"
						whileHover="whileHover"
						{...hoverEffect}
					>
						{tech.icon}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default Technologies;

{
	/*	{ icon: <SiVercel className="text-5xl" /> }, */
}
{
	/*	{ icon: <TbBrandThreejs className="text-5xl" /> }, */
}
