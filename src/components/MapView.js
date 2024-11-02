import { Map, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import { useState, useEffect, useCallback } from "react";

const MapView = () => {
  const [infoWindowShown, setInfoWindowShown] = useState(true);
  const [infoWindowPosition, setInfoWindowPosition] = useState(null);

  const handleMapClick = useCallback((e) => {
    const latLng = e?.detail?.latLng;

    if (!latLng) return;
    setInfoWindowShown(true);
    setInfoWindowPosition(latLng);
  });

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowShown(false);
  });
  return (
    <Map
      style={{ width: "100vw", height: "100vh" }}
      defaultCenter={{ lat: 42.332335346, lng: -71.048499631 }}
      defaultZoom={8}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      mapId="DEMO_MAP_ID"
      onClick={handleMapClick}
    >
      {infoWindowShown && (
        <InfoWindow
          position={infoWindowPosition}
          onClose={handleInfoWindowClose}
        >
          <h2>InfoWindow content!</h2>
          <p>
            lat: {infoWindowPosition?.lat} Lng:{infoWindowPosition?.lng}
          </p>
          <button></button>
        </InfoWindow>
      )}
    </Map>
  );
};

export default MapView;
