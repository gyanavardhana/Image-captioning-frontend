import React from 'react';
import Navbar from "../Homepage/Navbar";
const Travel = () => {
  // Example data for model metrics
  const modelMetrics = [
    { metric: 'Accuracy', value: '90%' },
    { metric: 'Precision', value: '88%' },
    { metric: 'Recall', value: '92%' },
    { metric: 'F1 Score', value: '89%' },
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Travel Guide Model</h2>

      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <p className="mb-4">
        The travel guide model automatically describes landmarks and scenic spots in travel photos,
        enriching travel guides and blogs with informative captions.
      </p>

      <h3 className="text-xl font-bold mb-2">Data Preprocessing</h3>
      <p className="mb-4">
        Data preprocessing involves cleaning and structuring travel photos and associated text data
        for model training.
      </p>

      <h3 className="text-xl font-bold mb-2">Image Preprocessing</h3>
      <p className="mb-4">
        Image preprocessing techniques include resizing, normalization, and enhancement to improve
        the quality of input images for the travel guide model.
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

export default Travel;
