import React from 'react';
import Navbar from '../Homepage/Navbar';

const Xray = () => {
  // Example data for model metrics
  const modelMetrics = [
    { metric: 'Accuracy', value: '85%' },
    { metric: 'Precision', value: '82%' },
    { metric: 'Recall', value: '88%' },
    { metric: 'F1 Score', value: '85%' },
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">X-Ray Captioning Model</h2>

      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <p className="mb-4">
        X-ray captioning involves generating descriptive captions for medical X-ray images to aid in
        diagnostic processes and medical reporting.
      </p>

      <h3 className="text-xl font-bold mb-2">Data Preprocessing</h3>
      <p className="mb-4">
        Data preprocessing steps involve cleaning and preparing the X-ray images and associated text
        data for model training.
      </p>

      <h3 className="text-xl font-bold mb-2">Image Preprocessing</h3>
      <p className="mb-4">
        Image preprocessing techniques include resizing, normalization, and augmentation to enhance
        the quality and consistency of input images for the captioning model.
      </p>

      <h3 className="text-xl font-bold mb-2">Model Metrics</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metric
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {modelMetrics.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.metric}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Xray;
