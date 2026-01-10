import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


import NavBar from "./sections/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<NavBar />
		</main>
	);
};

export default App;