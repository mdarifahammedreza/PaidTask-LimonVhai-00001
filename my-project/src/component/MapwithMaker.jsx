import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
// const containerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

const center = {
  lat: 23.8769,
  lng: 90.3202,
};

function MapWithMarker() {
  const Save_in_Local = (key, Data) => {
    localStorage.setItem(key, JSON.stringify(Data));
  };
  const get_from_Local = (key) => {
    const Data = localStorage.getItem(key);
    return JSON.parse(Data.value);
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyANM-S8csQhiY7y2RGmzCD1PDN0dIxFzlY",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  // const [marker, setMarker] = useState(null);
  const [markers, setMarkers] = useState([...get_from_Local("Map_Log")]);
  // Array to store markers
  const [selectedMarker, setSelectedMarker] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <></>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can access the state variables 'name', 'longitude', and 'latitude' to use the submitted data

    const newLat = parseFloat(latitude);
    const newLng = parseFloat(longitude);
    // Update markers state
    setMarkers([...markers, { lat: newLat, lng: newLng, name: name }]);
    // Reset form fields
    setName("");
    setLongitude("");
    setLatitude("");
    Save_in_Local("Map_Log", markers);
    // Close the modal (if needed)
    document.getElementById("my_modal_5").close();
  };

  return isLoaded ? (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={10}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {markers.map((marker, index) => (
            <Marker
              key={index} // Important for React lists
              position={marker}
              onClick={() => setSelectedMarker(marker)}
            >
              {selectedMarker === marker && (
                <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                  <div>{marker.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
        </HStack>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <div>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Search location
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Please input the info:</h3>
              <div className="modal-action">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div>
                    <input
                      type="text"
                      placeholder="Name of place"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mb-1 input input-bordered input-error border-gray-300 w-full rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="Longitude"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                      className="mb-1 input input-bordered input-error border-gray-300 w-full rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="Latitude"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                      className="mb-2 input input-bordered input-error border-gray-300 w-full rounded-md p-2"
                    />
                  </div>
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </Box>
    </Flex>
  ) : (
    <></>
  );
}

export default MapWithMarker;
