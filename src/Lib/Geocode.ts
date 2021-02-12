//@ts-ignore
import Geocode from "react-geocode";
const api: string | undefined = process.env!.REACT_APP_GOOGLE_API_KEY;
//@ts-ignore
Geocode.setApiKey(api);

// set response language. Defaults to english.
//@ts-ignore
Geocode.setLanguage("en");
//@ts-ignore
Geocode.setLocationType("ROOFTOP");


// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
export default Geocode;
