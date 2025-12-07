import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
		},
	};

	const imageVariants = {
		hidden: { scale: 0.9, opacity: 0 },
		show: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
		hover: { scale: 1.1 },
	};

	const textVariants = {
		hidden: { opacity: 0, x: -20 },
		show: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
		hover: { color: "#7c3aed" },
	};

	const techVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		show: {
			opacity: 1,
			scale: 1,
			transition: { type: "spring", stiffness: 100, damping: 10 },
		},
	};

	return (
		<div className="border-b border-neutral-900 pb-4">
			<h2 className="my-20 text-center text-4xl text-white">Projects</h2>

			{/* Note */}
			<p className="text-center text-sm text-neutral-500 mb-10 italic">
				Note: Some projects may not function fully due to expired APIs or Render
				free-tier limitations, but the source code remains complete and fully
				functional.
			</p>

			<div>
				{PROJECTS.map((project, index) => (
					<motion.div
						key={index}
						className="mb-12 flex flex-wrap lg:justify-center"
						initial="hidden"
						whileInView="show"
						variants={cardVariants}
						viewport={{ once: true, amount: 0.2 }}
					>
						<motion.div
							className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0"
							whileHover="hover"
							initial="hidden"
							whileInView="show"
						>
							<a href={project.live} target="_blank" rel="noopener noreferrer">
								<img
									src={project.image}
									width={400}
									height={350}
									alt={project.title}
									className="rounded-lg object-cover cursor-pointer"
								/>
							</a>
						</motion.div>

						<div className="w-full max-w-2xl lg:w-2/3 lg:pl-6">
							<motion.h6
								className="mb-4 text-2xl font-semibold text-white"
								variants={textVariants}
								initial="hidden"
								whileInView="show"
								whileHover="hover"
							>
								{project.title}
							</motion.h6>

							<motion.p
								className="mb-4 text-neutral-400"
								variants={textVariants}
								initial="hidden"
								whileInView="show"
							>
								{project.description}
							</motion.p>

							<div className="flex flex-wrap">
								{project.technologies.map((tech, index) => (
									<motion.span
										key={index}
										className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-purple-50"
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

export default Projects;
