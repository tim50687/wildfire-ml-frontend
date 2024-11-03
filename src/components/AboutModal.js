const AboutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">About This Project</h2>
          <p className="text-gray-700">
            {/* Insert your project description here */}
            This application visualizes wildfire risks based on user-selected
            locations. Click on the map to simulate and display areas that might
            be affected by wildfires.
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
