import React from "react";
import Navbar from "./Navbar";
import Surf from "../../assets/surf.jpg";
import Workflow from "../../assets/workflow.png";
import Extraction from "../../assets/extraction.png";
import Context from "../../assets/Context.jpg";
import Example from "../../assets/Example.jpg";
import Usecases from "./Usecases";
import GrowingPlant from "../GrwoingPlant";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 text-white px-4 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Image Captioning</h2>
          <img
            src={Surf}
            alt="Sample"
            className="h-auto mb-4 rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-2">
            Caption: Surfer surfing the sea
          </h3>
          <p className="text-lg mb-6">
            Image captioning is an advanced technology that bridges the gap
            between computer vision and natural language processing. It involves
            generating descriptive and contextually relevant text captions for
            images, enabling machines to understand and articulate visual
            content in human language.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            How Does Image Captioning Work?
          </h3>
          <img
            src={Workflow}
            alt="Sample"
            className="h-auto mb-4 rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-semibold mb-2">
            Basic workflow of Image Captioning
          </h3>
          <p className="text-lg mb-4">
            Image captioning systems leverage deep learning models, particularly
            convolutional neural networks (CNNs) for image feature extraction
            and recurrent neural networks (RNNs) or transformers for language
            generation. The process involves:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5">
            <div className="col-span-1">
              <img
                src={Extraction}
                alt="Extraction"
                className="h-80 w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={Context}
                alt="Context"
                className="h-80 w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={Example}
                alt="Example"
                className="h-80 w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <ul className="list-disc list-inside mb-4">
            <li>
              Feature Extraction: Analyzing the image to identify objects,
              actions, and scenes using a pre-trained CNN.
            </li>

            <li>
              Contextual Understanding: Integrating the extracted features into
              an RNN or transformer model to understand the relationships and
              context within the image.
            </li>

            <li>
              Caption Generation: Producing a coherent and contextually accurate
              textual description based on the visual analysis.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            Applications of Image Captioning
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Accessibility: Enhancing accessibility for visually impaired
              individuals by providing textual descriptions of images.
            </li>
            <li>
              Content Management: Automating the tagging and categorization of
              images in large databases.
            </li>
            <li>
              E-commerce: Enriching product listings with automatic
              descriptions.
            </li>
            <li>
              Social Media: Automatically generating captions for user-uploaded
              images.
            </li>
            <li>
              Surveillance and Security: Analyzing and describing surveillance
              footage.
            </li>
          </ul>
          <Usecases />
        </div>
      </div>
    </>
    // <>
    // <GrowingPlant />
    // </>
  );
};

export default Home;
