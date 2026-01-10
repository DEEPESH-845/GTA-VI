import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import { useMaskSettings } from "../../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {

	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const videoId = "VQRLujxTm3c";

    
    
	const { initialMaskPos, initialMaskSize, maskPosition, maskSize } =
		useMaskSettings();

	useGSAP(() => {
		gsap.set(".mask-wrapper", {
			maskPosition: initialMaskPos,
			maskSize: initialMaskSize,
		});

		gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });

		gsap.set(".entrance-message", { marginTop: "0vh" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-section",
				start: "top top",
				scrub: 2.5,
				end: "+=200%",
				pin: true,
			},
		});

		tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
			.to(".scale-out", { scale: 1, ease: "power1.inOut" })
			.to(".mask-wrapper", { maskSize, ease: "power1.inOut" }, "<")
			.to(".mask-wrapper", { opacity: 0 })
			.to(
				".overlay-logo",
				{
					opacity: 1,
					onComplete: () => {
						gsap.to(".overlay-logo", { opacity: 0 });
					},
				},
				"<"
			)
			.to(
				".entrance-message",
				{
					duration: 1,
					ease: "power1.inOut",
					maskImage:
						"radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
				},
				"<"
			);
	});

	return (
		<section className="hero-section relative">
			<div className="size-full mask-wrapper relative z-50">
				<img
					src="/images/hero-bg.webp"
					alt="background"
					className="scale-out"
				/>

				<img
					src="/images/hero-text.webp"
					alt="hero-logo"
					className="title-logo fade-out"
				/>

				<img
					src="/images/watch-trailer.png"
					alt="trailer"
					className="trailer-logo fade-out"
				/>

				<div
					className="play-img fade-out cursor-pointer hover:scale-110 transition-transform "
					onClick={() => {
						console.log("Play button clicked!");
						setIsVideoOpen(true);
					}}
				>
					<img src="/images/play.png" alt="play" className="w-7 ml-1" />
				</div>
			</div>

			<div className="relative z-10 pointer-events-none">
				<img
					src="/images/big-hero-text.svg"
					alt="logo"
					className="size-full object-cover mask-logo"
				/>
			</div>

			<div className="fake-logo-wrapper">
				<img src="/images/big-hero-text.svg" className="overlay-logo" />
			</div>

			{/* --- VIDEO PLAYER MODAL --- */}
			{isVideoOpen && (
				<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 isolate">
				
					<div
						className="absolute inset-0 z-0 cursor-pointer"
						onClick={() => setIsVideoOpen(false)}
						title="Click anywhere to close"
					></div>

					{/* The Video Player */}
					<div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 relative bg-black">
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
							title="YouTube video player"
							className="w-full h-full border-none"
							allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			)}

			<ComingSoon />
		</section>
	);
};
        
        

export default Hero;
