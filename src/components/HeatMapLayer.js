/* global google */
import { useEffect, useState, useMemo } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

const HeatMapLayer = ({ geojson, radius, opacity }) => {
  const map = useMap();
  const visualization = useMapsLibrary("visualization");

  const heatmap = useMemo(() => {
    if (!visualization) return null;

    return new google.maps.visualization.HeatmapLayer({
      radius: radius,
      opacity: opacity,
    });
  }, [visualization, radius, opacity]);

  useEffect(() => {
    if (!heatmap) return;

    heatmap.setData(
      geojson.map((point) => {
        const lat = point.latitude;
        const lng = point.longitude;

        return {
          location: new google.maps.LatLng(lat, lng),
          weight: point.dispersion,
        };
      })
    );
  }, [heatmap, geojson]);

  useEffect(() => {
    if (!heatmap) return;

    heatmap.setMap(map);

    return () => {
      heatmap.setMap(null);
    };
  }, [heatmap, map]);

  return null; // This component only manages the heatmap
};

export default HeatMapLayer;
