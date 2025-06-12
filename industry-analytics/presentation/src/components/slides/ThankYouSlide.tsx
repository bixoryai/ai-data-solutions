import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ThankYouSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="slide bg-gray-900 p-12 rounded-lg text-center flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white mb-4">Thank You</h1>
      <p className="text-2xl text-gray-400 mb-12">For Your Attention</p>
      
      <div className="flex justify-center items-center space-x-12 mb-12">
        <div className="flex flex-col items-center">
          <Mail size={32} className="text-blue-400 mb-2" />
          <span className="text-white text-lg">develop@bixory.ai</span>
        </div>
        <div className="flex flex-col items-center">
          <Phone size={32} className="text-blue-400 mb-2" />
          <span className="text-white text-lg">(408) 658-8538</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe size={32} className="text-blue-400 mb-2" />
          <span className="text-white text-lg">bixory.ai</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <img src={`${process.env.PUBLIC_URL}/images/favicon.png`} alt="Bixing Technology Logo" className="w-16 h-16" />
        <span className="text-3xl font-semibold text-white">Bixing AI Technology</span>
      </div>
    </div>
  );
};

export default ThankYouSlide; 