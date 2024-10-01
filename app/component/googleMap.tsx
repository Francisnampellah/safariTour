import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -3.3869254, // Latitude for Arusha
    lng: 36.6829927, // Longitude for Arusha
};

const GoogleMapComponent = () => {
    const [directions, setDirections] = useState(null);
    const [error, setError] = useState(null);

    // Error handler to prevent Google Maps error from displaying
    useEffect(() => {
        const originalConsoleError = console.error;
        
        console.error = function (message) {
            if (!message.includes("This page can't load Google Maps correctly.")) {
                originalConsoleError.apply(console, arguments);
            }
        };

        // Clean up the error handler on component unmount
        return () => {
            console.error = originalConsoleError;
        };
    }, []);

    const directionsCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirections(response);
            } else {
                setError(response);
            }
        }
    };

    return (
        <section id="section-8" className="py-4 md:py-12 lg:py-24 px-4 md:px-12 lg:px-20 flex flex-col justify-center">
            <div className="w-full rounded-3xl overflow-hidden h-auto">
                <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                    >
                        <DirectionsService
                            options={{
                                destination: 'destination address',
                                origin: 'origin address',
                                travelMode: "DRIVING",
                            }}
                            callback={directionsCallback}
                        />

                        {directions && (
                            <DirectionsRenderer
                                options={{
                                    directions: directions
                                }}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </section>
    );
};

export default GoogleMapComponent;
