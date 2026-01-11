"use client";

import Lenis from "lenis";
import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";



interface LenisProviderProps {
	children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  
	  
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.06,
				duration: 2.4, // Duration of the scroll animation
				smoothWheel: true, // Enable smooth scrolling with the mouse wheel
				syncTouch: true, // Correct touch option
				syncTouchLerp: 0.06, // Touch inertia lerp
				touchInertiaExponent: 0.9, // Touch inertia strength
				touchMultiplier: 0.8, // Touch event multiplier
				wheelMultiplier: 0.6,
				gestureOrientation: "vertical",
				autoRaf: true,
			}}
		>
			{children}
		</ReactLenis>
	);
}
