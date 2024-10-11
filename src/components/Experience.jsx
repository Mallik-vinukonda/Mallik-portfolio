import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const techVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	const experienceCardVariants = {
		hidden: { opacity: 0, y: 20 },
		show: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: "easeOut",
			},
		}),
	};

	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-4xl">Experiences</h1>

			<div>
				{EXPERIENCES.map((experience, index) => (
					<motion.div
						key={index}
						className="mb-8 flex flex-wrap lg:justify-center"
						custom={index}
						initial="hidden"
						whileInView="show"
						variants={experienceCardVariants}
						viewport={{ once: true, amount: 0.1 }}
					>
						<div className="w-full lg:w-1/4">
							<motion.p
								className="mb-2 text-sm text-neutral-400"
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
							>
								{experience.year}
							</motion.p>
						</div>

						<div className="w-full lg:w-3/4">
							<motion.h6
								className="mb-2 font-semibold"
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
							>
								{experience.role} - <span>{experience.company}</span>
							</motion.h6>

							<motion.p
								className="mb-4 text-neutral-400"
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
							>
								{experience.description}
							</motion.p>

							<div className="flex flex-wrap">
								{experience.technologies.map((tech, index) => (
									<motion.span
										key={index}
										className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
										variants={techVariants}
										initial="hidden"
										whileInView="show"
									>
										{tech}
									</motion.span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default Experience;
