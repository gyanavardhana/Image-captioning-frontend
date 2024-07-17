import React from "react";
import UsecaseCard from "./Usecasecard"; // Adjust path as needed
import XRay from "../../assets/xray.jpg"; // Adjust paths for images
import TravelGuide from "../../assets/travel-guide.jpg";
import CCTV from "../../assets/cctv1.jpg";

const Usecases = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Use Cases</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full sm:w-80 md:w-80 lg:w-80">
            <UsecaseCard
              title="Travel Guide"
              subheader="Tourism Enhancement"
              image={TravelGuide}
              description="Automatically describing landmarks and scenic spots in travel photos, enriching travel guides and blogs with informative captions."
              navigateTo='/travel'
            />
          </div>
          <div className="w-full sm:w-80 md:w-80 lg:w-80">
            <UsecaseCard
              title="X-Ray Captioning"
              subheader="Medical Imaging"
              image={XRay}
              description="Generating detailed and accurate captions for medical x-ray images, aiding in diagnostic processes and medical reporting."
              navigateTo='/xray'
            />
          </div>

          <div className="w-full sm:w-80 md:w-80 lg:w-80">
            <UsecaseCard
              title="CCTV  Analysis"
              subheader="Security Monitoring"
              image={CCTV}
              description="Analyzing CCTV camera footage to detect and describe activities and events, enhancing security monitoring and incident response."
              navigateTo='/cctv'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usecases;
