import React, { useState, useEffect } from 'react';
import { medicalImageData, MedicalImage } from '../data/medicalImageData';
import { Scan, TestTube2, CheckCircle } from 'lucide-react';

interface PageProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    title: 'AI-Assisted Medical Imaging',
    subtitle: 'Select a medical scan from the gallery and run a simulated AI analysis to detect potential anomalies.',
    gallery: 'Image Gallery',
    selectAnImage: 'Select an Image',
    selectFromGallery: 'Select an image from the gallery',
    runAnalysis: 'Run AI Analysis',
    analyzing: 'Analyzing...',
    analysisComplete: 'Analysis Complete',
    confidence: 'Confidence',
    clickToSeeResults: 'Click "Run AI Analysis" to see results.'
  },
  zh: {
    title: 'AI辅助医疗影像',
    subtitle: '从图库中选择一个医疗扫描，并运行模拟的AI分析以检测潜在的异常。',
    gallery: '影像库',
    selectAnImage: '选择影像',
    selectFromGallery: '请从影像库中选择一个影像',
    runAnalysis: '运行AI分析',
    analyzing: '分析中...',
    analysisComplete: '分析完成',
    confidence: '置信度',
    clickToSeeResults: '点击"运行AI分析"查看结果。'
  }
};

const MedicalImagingPage: React.FC<PageProps> = ({ language }) => {
  const t = translations[language];
  const [selectedImage, setSelectedImage] = useState<MedicalImage | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<MedicalImage['analysis'] | null>(null);

  useEffect(() => {
    // Set a default image on initial load
    if (medicalImageData.length > 0) {
      setSelectedImage(medicalImageData[0]);
    }
  }, []);

  const handleSelectImage = (image: MedicalImage) => {
    setSelectedImage(image);
    setAnalysisResult(null); // Clear previous results
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate AI processing time
    setTimeout(() => {
      setAnalysisResult(selectedImage.analysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600 mb-6">{t.subtitle}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Gallery */}
        <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t.gallery}</h2>
          <div className="space-y-3">
            {medicalImageData.map(image => (
              <div
                key={image.id}
                className={`p-2 rounded-lg cursor-pointer border-2 ${selectedImage?.id === image.id ? 'border-blue-500 bg-blue-50' : 'border-transparent hover:bg-gray-100'}`}
                onClick={() => handleSelectImage(image)}
              >
                <img src={image.thumbnailUrl} alt={image.title} className="rounded-md w-full" />
                <p className="text-sm font-semibold mt-2">{image.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Analysis View */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">{selectedImage?.title || t.selectAnImage}</h2>
            <div className="relative bg-gray-900 rounded-lg flex items-center justify-center min-h-[400px]">
              {selectedImage ? (
                <img src={selectedImage.fullUrl} alt={selectedImage.title} className="max-h-[400px] rounded-lg" />
              ) : (
                <p className="text-white">{t.selectFromGallery}</p>
              )}

              {/* Highlighted Regions */}
              {analysisResult && selectedImage && analysisResult.highlightedRegions.map((region, index) => (
                <div
                  key={index}
                  className="absolute border-4 border-red-500 rounded-md animate-pulse"
                  style={{ ...region }}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <button
                onClick={handleAnalyze}
                disabled={!selectedImage || isAnalyzing}
                className="w-full flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
              >
                {isAnalyzing ? (
                  <>
                    <TestTube2 className="animate-spin mr-3" />
                    {t.analyzing}
                  </>
                ) : (
                  <>
                    <Scan className="mr-3" />
                    {t.runAnalysis}
                  </>
                )}
              </button>
            </div>
            
            <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
              {analysisResult ? (
                <div>
                  <h3 className="text-lg font-bold flex items-center mb-2"><CheckCircle className="text-green-500 mr-2" />{t.analysisComplete}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {analysisResult.findings.map((finding, i) => <li key={i}>{finding}</li>)}
                  </ul>
                  <p className="text-lg font-bold mt-3">{t.confidence}: <span className="text-green-600">{(analysisResult.confidence * 100).toFixed(0)}%</span></p>
                </div>
              ) : (
                 <p className="text-gray-500 text-center pt-4">{t.clickToSeeResults}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalImagingPage; 