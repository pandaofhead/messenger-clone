'use client';

import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <ClipLoader size={40} color="#0284c7" />
        <p className="mt-4 text-gray-600 text-sm">Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;