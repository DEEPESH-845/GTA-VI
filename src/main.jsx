import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisProvider from './components/LenisProvider.js'

createRoot(document.getElementById("root")).render(
	<LenisProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</LenisProvider>
);
