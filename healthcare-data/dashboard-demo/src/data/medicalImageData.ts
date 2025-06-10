export interface MedicalImage {
  id: string;
  thumbnailUrl: string;
  fullUrl: string;
  title: string;
  description: string;
  analysis: {
    findings: string[];
    confidence: number;
    highlightedRegions: Array<{ top: string; left: string; width: string; height: string }>;
  };
}

export const medicalImageData: MedicalImage[] = [
  {
    id: 'mri-001',
    thumbnailUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=Brain+MRI',
    fullUrl: 'https://via.placeholder.com/600x400/0000FF/808080?Text=Brain+MRI+Scan',
    title: 'Brain MRI Scan',
    description: 'T2-weighted axial view of a human brain.',
    analysis: {
      findings: ['Suspected Glioblastoma Multiforme (Grade IV)', 'Minor cerebral microbleeds'],
      confidence: 0.89,
      highlightedRegions: [
        { top: '35%', left: '45%', width: '20%', height: '25%' },
      ],
    },
  },
  {
    id: 'xray-001',
    thumbnailUrl: 'https://via.placeholder.com/150/808080/FFFFFF?Text=Chest+X-Ray',
    fullUrl: 'https://via.placeholder.com/600x400/808080/FFFFFF?Text=Chest+X-Ray',
    title: 'Chest X-Ray (PA view)',
    description: 'Posterior-anterior view of the thoracic cavity.',
    analysis: {
      findings: ['Possible Pneumonia in the right lung', 'No signs of pneumothorax'],
      confidence: 0.76,
      highlightedRegions: [
        { top: '50%', left: '25%', width: '25%', height: '30%' },
      ],
    },
  },
  {
    id: 'ct-001',
    thumbnailUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Abdominal+CT',
    fullUrl: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?Text=Abdominal+CT+Scan',
    title: 'Abdominal CT Scan',
    description: 'Axial view of the abdomen with contrast.',
    analysis: {
      findings: ['Small lesion detected on the liver', 'Kidneys appear normal'],
      confidence: 0.95,
      highlightedRegions: [
        { top: '40%', left: '55%', width: '15%', height: '15%' },
      ],
    },
  },
]; 