import { Map, InfoWindow } from "@vis.gl/react-google-maps";
import { useState, useCallback } from "react";
import HeatMapLayer from "./HeatMapLayer";

const MapView = () => {
  const [infoWindowShown, setInfoWindowShown] = useState(true);
  const [infoWindowPosition, setInfoWindowPosition] = useState(null);

  // Result get back from ml
  const [mlResult, setMlResult] = useState(null);

  // If the simulation is loading or not
  const [loading, setLoading] = useState(false);

  const handleMapClick = useCallback((e) => {
    const latLng = e?.detail?.latLng;
    if (!latLng) return;
    setInfoWindowShown(true);
    setInfoWindowPosition(latLng);
  }, []);

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowShown(false);
    setInfoWindowPosition(null);
  }, []);

  const handleButtonClick = useCallback(() => {
    setLoading(true);
    // Prepare data to backend
    const payload = {
      longitude: infoWindowPosition.lng,
      latitude: infoWindowPosition.lat,
    };

    fetch("https://buhacks-model.vercel.app/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
        setMlResult(data.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [infoWindowPosition]);

  return (
    <div className="flex justify-center items-center mt-4">
      <Map
        style={{ width: "90vw", height: "80vh" }}
        defaultCenter={{ lat: 42.332335346, lng: -71.048499631 }}
        defaultZoom={8}
        mapId="DEMO_MAP_ID"
        onClick={handleMapClick}
      >
        {infoWindowShown && (
          <InfoWindow
            position={infoWindowPosition}
            onCloseClick={handleInfoWindowClose}
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                Wildfire Simulation
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Latitude: {infoWindowPosition?.lat.toFixed(6)} <br />
                Longitude: {infoWindowPosition?.lng.toFixed(6)}
              </p>
              <button
                disabled={loading}
                onClick={handleButtonClick}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? "Running Simulation..." : "Run Simulation"}
              </button>
              {mlResult && (
                <p className="mt-4 text-sm text-green-600">
                  Simulation complete!
                </p>
              )}
            </div>
          </InfoWindow>
        )}
        {mlResult && (
          <HeatMapLayer geojson={mlResult} radius={42} opacity={0.8} />
        )}
      </Map>
    </div>
  );
};

export default MapView;
