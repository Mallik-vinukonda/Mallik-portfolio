import project1 from "../assets/projects/pro-1.png";
import project2 from "../assets/projects/pro-2.png";
import project3 from "../assets/projects/pro-3.png";
import project4 from "../assets/projects/pro-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
	{
		year: "Feb 2023 - Mar 2023",
		role: " Web-Development Intern",
		company: "OctaNet virtual internship ",
		description: `  Acquired practical web development skills by working on dynamic and responsive websites. Gained experience in front-end and back-end technologies, including HTML, CSS, JavaScript, and basic server-side scripting.`,
		technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
	},
	{
		year: "April 2023 - May 2023",
		role: "Google AI/ML Intern",
		company: "ACITE Virtual INternship",
		description: `Gained hands-on experience in Artificial Intelligence and Machine Learning, working with Google’s cutting-edge technologies. Developed AI/ML models and enhanced problem-solving skills through practical applications and real-world projects`,
		technologies: ["Tensorflow", "Keras", "Python"],
	},
];

export const PROJECTS = [
	{
		title: "Fizzi - Soda Can Brand Landing Page",
		image: project1,
		description:
			"A visually stunning landing page for Fizzi, a fictional soda can brand, built with Next.js and Three.js. The page features dynamic animations powered by GSAP and integrates a slice machine using Prismic.io for seamless content management. The 3D models of the soda cans were custom-designed in Blender, adding an immersive touch to the brand's online presence",
		technologies: [
			"React",
			"Next.js",
			"Three.js",
			"Blender",
			"Gsap",
			"Prismic",
			"Figma",
		],
	},
	{
		title: "React Movie Finder: IMDb API Integration",
		image: project2,
		description:
			"A movie search app built with React, utilizing the IMDb API to fetch and display movie information. The app allows users to search for movies, view detailed information, and explore ratings, all through a seamless and interactive user interface.",
		technologies: ["React", "TailwindCSS", "IMBD API"],
	},
	{
		title: "Portfolio Website",
		image: project3,
		description:
			"A personal portfolio website designed to showcase my projects, skills, and contact information. The site provides a clean and professional platform to highlight my work and expertise, with easy navigation and a user-friendly interface.",
		technologies: ["React", "Tailwind.css", "Vercel"],
	},
	{
		title: "YFS Social Club",
		image: project4,
		description:
			"A fully responsive website developed for the Youth For Seva club at my college, featuring real-time data management and fetching capabilities. The site allows for seamless updates and efficient handling of volunteer information, providing an interactive platform for both members and administrators",
		technologies: ["HTML", "CSS", "BootStrap", "Express", "mySQL"],
	},
];

export const CONTACT = {
	address: "Visakhapatnam , Andhra Pradesh , India ",
	phoneNo: "+91 7416366978 ",
	email: "mallikvinukonda1704@gmail.com",
};
