import React, { useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Location = ({ property }: any) => {
  const { isLoaded } = useJsApiLoader({
    // id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "450px",
    borderRadius: "0.5rem",
  };

  const mycenter = useMemo(
    () => ({
      lat: property?.lat || 13.226725,
      lng: property?.lng || 77.684483,
    }),
    []
  );

  console.log("isLoaded: ",isLoaded);

  return (
    <>
      <div id="floorplan" className="flex gap-2  items-center">
        <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
          Location
        </p>
      </div>

      {isLoaded && (
        <div className="relative mt-6">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mycenter}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ streetViewControl: false }}
          >
            <Marker
              key={property?._id}
              position={{
                lat: property?.lat || 13.226725,
                lng: property?.lng || 77.684483,
              }}
              icon={{
                scaledSize: new google.maps.Size(40, 40),
                url: "/assets/images/marker.svg",
              }}
            />
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default Location;
