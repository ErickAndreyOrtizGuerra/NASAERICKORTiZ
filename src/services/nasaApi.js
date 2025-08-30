const API_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const API_KEY = 'DEMO_KEY'; // Para producción, usar tu propia API key

export const fetchMarsPhotos = async (earthDate = '2015-6-3') => {
  try {
    const url = `${API_BASE_URL}/curiosity/photos?earth_date=${earthDate}&api_key=${API_KEY}`;
    console.log('Fetching from:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    
    return data.photos || [];
  } catch (error) {
    console.error('Error fetching Mars photos:', error);
    throw error;
  }
};

export const getRoverInfo = (photo) => {
  return {
    roverName: photo.rover.name,
    landingDate: photo.rover.landing_date,
    launchDate: photo.rover.launch_date,
    status: photo.rover.status,
    sol: photo.sol,
    earthDate: photo.earth_date,
    camera: photo.camera.full_name,
    cameraAbbr: photo.camera.name
  };
};