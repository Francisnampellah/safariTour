import React from 'react';

const GoogleMapIframe = () => {
    const center = {
        lat: -3.3869254, // Latitude for Arusha
        lng: 36.6829927, // Longitude for Arusha
    };
    return (
        <section
            id="section-8" className="py-4 md:py-12 lg:py-24 px-4 md:px-12 lg:px-20 flex flex-col justify-center">

            <div className="w-full rounded-3xl h-[450px]">

                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075838018!2d${center.lat}!3d${center.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bfa896cbbd%3A0xd0a8c71d6011bb1c!2sNew%20York!5e0!3m2!1sen!2sus!4v1633964143720!5m2!1sen!2sus`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '24px' }}
                    allowFullScreen
                    loading="lazy"
                >

                </iframe>
            </div>
        </section>
    );
};

export default GoogleMapIframe;






