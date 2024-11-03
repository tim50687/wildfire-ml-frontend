
# **Dev Log: Frontend Development for Wildfire Risk Map Project**


### **Project Overview**

The Wildfire Risk Map is a web application designed to visualize wildfire risk levels using an interactive Google Map. The primary functionality includes allowing users to click on locations on the map, triggering a simulation that overlays a heatmap representing wildfire risk in the selected area.



### **Key Accomplishments**

1. **Google Maps Integration**:
   - Integrated Google Maps into the React application using `@vis.gl/react-google-maps`.
   - Configured map settings like default center, zoom level, and map ID.
   - Added an `APIProvider` component to manage the Google Maps API key and load the map efficiently.

2. **User Interaction**:
   - Implemented click functionality on the map so users can select a location.
   - Upon clicking a location, an `InfoWindow` displays with details about the selected coordinates (latitude and longitude).
   - Added a button within the `InfoWindow` to trigger a machine learning simulation for wildfire risk.

3. **Machine Learning Simulation Trigger**:
   - Created a `handleButtonClick` function to send the selected coordinates as a payload in a POST request to the backend (`https://buhacks-model.vercel.app/simulate`).
   - Managed loading states to give users feedback while the simulation is running.
   - Once the simulation completes, the result is received and displayed as a heatmap overlay on the map.

4. **Heatmap Overlay**:
   - Integrated a `HeatMapLayer` component to visualize the machine learning results using the Google Maps Visualization library.
   - The heatmap is dynamically rendered based on data returned from the backend simulation, which highlights areas likely affected by wildfire.

5. **UI and Styling**:
   - Designed the application layout with Tailwind CSS for responsive and modern styling.
   - Built a navigation bar with project branding, as well as links to "About This Project" and "Dev Log" pages.
   - Styled the map with a centered layout, rounded corners, and shadow effects for a polished appearance.

6. **Environment Variable Setup**:
   - For security, the Google Maps API key was stored as an environment variable (`REACT_APP_GOOGLE_MAPS_API_KEY`), and local `.env` setup was configured to keep sensitive data secure.
   - In preparation for deployment on Vercel, set up environment variables on Vercel to avoid exposing the API key in the codebase.



