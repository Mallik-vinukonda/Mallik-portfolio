import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function App() {
	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-100 selection:text-cyan-900">
			<div className="fixed top-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
