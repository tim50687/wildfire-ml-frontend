import { APIProvider } from "@vis.gl/react-google-maps";
import MapView from "./components/MapView";
function App() {
  return (
    <div className="App">
      <APIProvider
        apiKey="AIzaSyBhkzrYLG_rVdX6i2gklZUORQe22J_3MvY"
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <h1>Hello, world!</h1>
        <MapView />
      </APIProvider>
    </div>
  );
}

export default App;
