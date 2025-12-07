import legalMitraImg from "../assets/projects/pro-1.png";
import mathVisionImg from "../assets/projects/pro-2.png";
import devHelperImg from "../assets/projects/pro-3.png";
import crowdPulseImg from "../assets/projects/pro-5.png";
import ecomImg from "../assets/projects/pro-4.png";
import mockImg from "../assets/projects/Ai-mock.png";

export const HERO_CONTENT = `A curious and fast-moving builder passionate about AI, product development, and automation. I thrive on turning abstract ideas into user-focused, intelligent systems. From full-stack development to LLM-based agents and RAG apps, I enjoy building scalable solutions and leading with creativity and impact.`;

export const ABOUT_TEXT = `I'm a curious builder passionate about AI, automation, and product development. I love turning abstract ideas into user-focused, intelligent systems—whether that's full-stack apps, LLM-based agents, or tools that make life easier.

My journey has taken me from hands-on freelance projects to building advanced AI chatbots and vision systems. I thrive on solving real-world problems, learning new technologies, and collaborating with others who want to make an impact. My strengths are in full-stack development, AI/ML, and rapidly turning ideas into scalable, user-friendly products. I believe in continuous learning, creative problem-solving, and building with empathy for the end user.

Let's build something amazing!`;

export const EXPERIENCES = [
	{
		year: "Feb 2023 - Mar 2023",
		role: "Web-Development Intern",
		company: "OctaNet Virtual Internship",
		description: `Acquired practical web development skills by working on dynamic and responsive websites. Gained experience in front-end and back-end technologies, including HTML, CSS, JavaScript, and basic server-side scripting.`,
		technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
	},
	{
		year: "Apr 2023 - May 2023",
		role: "Google AI/ML Intern",
		company: "ACITE Virtual Internship",
		description: `Gained hands-on experience in Artificial Intelligence and Machine Learning, working with Google’s cutting-edge technologies. Developed AI/ML models and enhanced problem-solving skills through practical applications and real-world projects.`,
		technologies: ["Tensorflow", "Keras", "Python"],
	},
	{
		year: "May 2025 - Jul 2025",
		role: "Software Development Engineer Intern",
		company: "Apariva Systems LLP",
		description: `Contributed to the development of scalable software solutions, collaborating with cross-functional teams to design, implement, and optimize applications. Enhanced coding skills and gained experience in agile methodologies and best practices in software engineering.`,
		technologies: [
			"Python",
			"FastAPI",
			"React.js",
			"LangChain",
			"LLMs",
			"Microservices",
		],
	},
];

export const PROJECTS = [
	{
		title: "AI-Powered Real-Time Mock Interviewer",
		image: mockImg,
		description:
			"Low-latency AI mock interview platform using Gemini Live API and WebSockets. Includes real-time voice streaming, adaptive questioning, transcript sync, and 60FPS audio visualization with Web Audio API. Supports smooth PCM-based audio playback and responsive UI.",
		technologies: [
			"React",
			"TypeScript",
			"Gemini Live API",
			"Web Audio API",
			"WebSockets",
		],
		live: "https://ai-powered-mock-interview-eight.vercel.app/",
		code: "https://ai-powered-mock-interview-eight.vercel.app/", // replace when public
	},
	{
		title: "Freelance E-commerce Platform",
		image: ecomImg,
		description:
			"Production-ready E-commerce platform for SriRamdoot Enterprises. Built with React, Supabase, Tailwind CSS, and integrated with Telegram Bot API and JWT Authentication for secure, real-time order tracking. Fully mobile-responsive and scheduled for deployment.",
		technologies: [
			"React",
			"Supabase",
			"Tailwind CSS",
			"Telegram Bot API",
			"JWT",
		],
		live: "https://business-store-two.vercel.app/",
		code: "#", // Add code link if public
	},
	{
		title: "CrowdPulse – Urban Report Issuer",
		image: crowdPulseImg,
		description:
			"A citizen-centric platform for reporting and tracking urban issues. CrowdPulse enables users to submit, view, and follow up on civic problems in real time, fostering community-driven solutions. Features include geotagged reports, admin dashboard, and instant notifications.",
		technologies: ["React", "Node.js", "MongoDB", "Maps API"],
		live: "#", // Add live link when deployed
		code: "#", // Add code link if public
	},
	{
		title: "MathVision – AI Equation & Vision Solver",
		image: mathVisionImg,
		description:
			"Developed an innovative AI system processing hand-drawn mathematical equations with 88% recognition accuracy. Created custom vision pipeline for Gemini LLM to solve complex equations, integrals, and derivatives in real-time. Backend built with FastAPI, integrates visual understanding and instant canvas-based response.",
		technologies: ["Gemini LLM", "FastAPI", "Custom Vision Pipeline"],
		live: "https://ipad-calci.vercel.app",
		code: "https://github.com/Mallik-vinukonda/ipad-calci-",
	},

	{
		title: "Legal Mitra – Constitution-Aware RAG Chatbot",
		image: legalMitraImg,
		description:
			"Engineered a specialized RAG chatbot using Gemini LLM with 93% accuracy on Indian Constitutional queries. Trained on the Indian Constitution, the chatbot reduced legal search time by 75% through a context-aware citation system. Developed a scalable Vector DB architecture with Chroma and Streamlit interface supporting multi-document analysis.",
		technologies: ["Gemini LLM", "Chroma", "Streamlit"],
		live: "https://vakeelsaab.streamlit.app/",
		code: "https://github.com/Mallik-vinukonda/Legal_RAG_chatBot",
	},
	{
		title: "DevHelper AI – Code Explainer and Debugger",
		image: devHelperImg,
		description:
			"Created an AI-powered Code assistant that explains and optimizes code with 90% accuracy across 7 programming languages. Accepts code input and returns structured markdown with explanations, bug insights, suggestions, and error handling.",
		technologies: ["AI", "Multi-language Support"],
		live: "https://dev-helper-ai.vercel.app/",
		code: "https://github.com/Mallik-vinukonda/devhelper-ai",
	},
];

export const CONTACT = {
	address: "Visakhapatnam, Andhra Pradesh, India",
	phoneNo: "+91 7416366978",
	email: "mallikvinukonda1704@gmail.com",
	linkedin: "https://www.linkedin.com/in/mallik-vinukonda/",
	portfolio: "https://mallik-portfolio.vercel.app/",
	github: "https://github.com/Mallik-vinukonda",
	leetcode: "https://leetcode.com/u/Jay_Mallik/",
};
