import React from 'react';
import Navbar from "../Homepage/Navbar";
const CCTV = () => {
  // Example data for model metrics
  const modelMetrics = [
    { metric: 'Accuracy', value: '95%' },
    { metric: 'Precision', value: '92%' },
    { metric: 'Recall', value: '96%' },
    { metric: 'F1 Score', value: '94%' },
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">CCTV Analysis Model</h2>

      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <p className="mb-4">
        The CCTV analysis model analyzes CCTV camera footage to detect and describe activities and
        events, enhancing security monitoring and incident response.
      </p>

      <h3 className="text-xl font-bold mb-2">Data Preprocessing</h3>
      <p className="mb-4">
        Data preprocessing involves cleaning and organizing CCTV footage and associated metadata
        for model training.
      </p>

      <h3 className="text-xl font-bold mb-2">Image Preprocessing</h3>
      <p className="mb-4">
        Image preprocessing techniques include frame extraction, normalization, and object detection
        for enhancing the quality of input video frames.
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

export default CCTV;
