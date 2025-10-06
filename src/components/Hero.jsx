import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/Mee.jpeg";
import { motion } from "framer-motion";

function Hero() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const fadeUp = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
	};

	const scaleIn = {
		hidden: { scale: 0.8, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: { ease: "easeOut", duration: 1.5 },
		},
	};

	return (
		<motion.div
			className="relative border-b border-neutral-900 pb-4 lg:mb-35"
			initial="hidden"
			animate="show"
			variants={container}
		>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={fadeUp}
							className="pb-16 text-6xl font-thin tracking-tight text-white lg:mt-16 lg:text-8xl"
						>
							Mallik Vinukonda
						</motion.h1>

						<motion.span
							variants={fadeUp}
							className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							Full Stack Developer
						</motion.span>

						<motion.p
							variants={fadeUp}
							className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-300"
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>

				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="relative flex justify-center">
						<motion.div
							className="absolute -top-5 -left-5 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full z-0"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
						></motion.div>

						<motion.img
							src={profilepic}
							width={300}
							height={300}
							alt="Mallik Vinukonda"
							className="relative z-10 rounded-full border-4 border-white shadow-lg shadow-slate-800 object-cover lg:w-96 lg:h-96"
							variants={scaleIn}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Hero;
