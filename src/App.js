import { APIProvider } from "@vis.gl/react-google-maps";
import MapView from "./components/MapView";
import "./index.css";
import Navbar from "./components/NavBar";
import { useState } from "react";
import AboutModal from "./components/AboutModal";
import DevLogModal from "./components/DevLogModal";

function App() {
  // State for modals
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDevLogOpen, setIsDevLogOpen] = useState(false);

  // Handlers to open/close modals
  const openAboutModal = () => setIsAboutOpen(true);
  const closeAboutModal = () => setIsAboutOpen(false);

  const openDevLogModal = () => setIsDevLogOpen(true);
  const closeDevLogModal = () => setIsDevLogOpen(false);

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <APIProvider
        apiKey="AIzaSyBhkzrYLG_rVdX6i2gklZUORQe22J_3MvY"
        onLoad={() => console.log("Maps API has loaded.")}
      >
        {/* Navbar with handlers */}
        <Navbar onOpenAbout={openAboutModal} onOpenDevLog={openDevLogModal} />

        {/* Modals */}
        {isAboutOpen && <AboutModal onClose={closeAboutModal} />}
        {isDevLogOpen && <DevLogModal onClose={closeDevLogModal} />}

        {/* Map View */}
        <MapView />

        <div className="fixed bottom-4 right-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </APIProvider>
    </div>
  );
}

export default App;
