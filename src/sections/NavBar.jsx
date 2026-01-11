import { useRef, useState } from "react";
import gsap from "gsap";

const NavBar = () => {
	const menuRef = useRef(null);
	const itemsRef = useRef([]);
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		if (!open) {
			gsap.set(menuRef.current, { yPercent: -100 });
			gsap.set(itemsRef.current, { y: 60, opacity: 0 });

			gsap
				.timeline()
				.to(menuRef.current, {
					yPercent: 0,
					duration: 0.9,
					ease: "power4.out",
				})
				.to(
					itemsRef.current,
					{
						y: 0,
						opacity: 1,
						stagger: 0.08,
						duration: 0.8,
						ease: "power3.out",
					},
					"-=0.3"
				);

			document.body.style.overflow = "hidden";
		} else {
			gsap
				.timeline()
				.to(itemsRef.current, {
					y: 40,
					opacity: 0,
					stagger: 0.05,
					duration: 0.4,
					ease: "power2.in",
				})
				.to(menuRef.current, {
					yPercent: -100,
					duration: 0.7,
					ease: "power4.inOut",
				});

			document.body.style.overflow = "";
		}

		setOpen(!open);
	};

	return (
		<>
			<nav>
				<img src="/images/nav-logo.svg" className="scale-90" />
				<button
					className="bg-none border-0 cursor-pointer"
					onClick={toggleMenu}
				>
					<img src="/images/menu.svg" className="w-10" />
				</button>
			</nav>

			<div
				ref={menuRef}
				className={`fixed inset-0 z-[90] flex flex-col justify-center pl-[12vw] bg-[radial-gradient(circle_at_top,#1b1c2a_0%,#0b0c14_65%)] transition-transform duration-300 ease-in-out ${
					open ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				{["Home", "Jason", "Lucia", "Media", "About"].map((item, i) => (
					<div
						key={item}
						className=" text-[clamp(3rem,6vw,6rem)] font-bold tracking-[-0.03em] text-[#e6e7ee] leading-[1.05] cursor-pointer hover:text-amber-100 transition-colors"
						ref={(el) => (itemsRef.current[i] = el)}
					>
						{item}
					</div>
				))}
			</div>
		</>
	);
};

export default NavBar;
