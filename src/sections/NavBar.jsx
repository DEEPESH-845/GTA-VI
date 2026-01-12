import { useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
	{ name: "Jason Duval", img: "/images/jason-1.webp" },
	{ name: "Lucia Caminos", img: "/images/lucia-2.webp" },
	{ name: "Cal Hampton", img: "/images/Cal_Hampton_square.svg" },
	{ name: "Boobie Ike", img: "/images/Boobie_Ike_square.svg" },
	{ name: "Dre'Quan Priest", img: "/images/DreQuan_Priest_square.svg" },
	{ name: "Real Dimez", img: "/images/Real_Dimez_square.svg" },
	{ name: "Raul Bautista", img: "/images/Raul_Bautista_square.svg" },
	{ name: "Brian Heder", img: "/images/Brian_Heder_square.svg" },
];

const NavBar = () => {
	const menuRef = useRef(null);
	const itemsRef = useRef([]);
	const [open, setOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(null);


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
				className={`fixed inset-0 z-[90] grid grid-cols-2 bg-[radial-gradient(circle_at_top,#1b1c2a_0%,#0b0c14_65%)] transition-transform duration-300 ease-in-out ${
					open ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				{/* --- NEW: BACKGROUND IMAGE LAYER --- */}

				<div className="hidden md:block relative h-full w-full overflow-hidden border-r border-white/10">
					{/* 1. IDLE LOGO (Visible when NOT hovering) */}
					<img
						src="/images/logo.png" 
						alt="Logo"
						className={` object-contain transition-opacity duration-500 ease-in-out ${
							activeImage ? "opacity-0" : "opacity-100"
						}`}
					/>

					{navItems.map((item) => (
						<img
							key={item.name + "-img"}
							src={item.img}
							alt=""
							className="absolute inset-0 w-full h-full object-cover"
							style={{
								opacity: activeImage === item.img ? 1 : 0,
								transform: activeImage === item.img ? "scale(1.1)" : "scale(1)",
								transition: "opacity 0.4s ease-in-out, transform 7s ease-out",
							}}
						/>
					))}
				</div>

				{/* --- RIGHT COLUMN: TEXT NAVIGATION --- */}
				<div className="flex flex-col justify-center pl-20">
					{navItems.map((item, i) => (
						<div
							key={item.name}
							className="relative z-20 text-[clamp(3rem,3.5vw,3.5rem)] font-long text-[#e6e7ee] leading-[1.05] cursor-pointer hover:text-amber-100 transition-colors w-fit uppercase"
							ref={(el) => (itemsRef.current[i] = el)}
							onMouseEnter={() => setActiveImage(item.img)}
							onMouseLeave={() => setActiveImage(null)}
						>
							{item.name}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NavBar;
