export interface ClinicalNote {
  id: string;
  title: string;
  content: string;
  summary: {
    Symptoms: string[];
    Medications: string[];
    Diagnoses: string[];
  };
  department: string;
}

export interface PatientFeedback {
  id: string;
  comment: string;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  department: string;
}

interface NlpData {
  clinicalNotes: ClinicalNote[];
  patientFeedback: PatientFeedback[];
}

export const nlpData: NlpData = {
  clinicalNotes: [
    {
      id: 'note-01',
      title: 'ER Admission Note - J. Doe',
      content: 'Patient John Doe, a 68-year-old male, presents to the emergency department with chief complaints of chest pain and shortness of breath starting this morning. Patient describes the pain as a "crushing" sensation radiating to his left arm. He has a known history of hypertension and is currently taking Lisinopril 20mg daily. Physical examination reveals diaphoresis and tachycardia. EKG shows ST-segment elevation in leads V1-V4. Initial diagnosis is acute myocardial infarction. Administered aspirin 325mg and sublingual nitroglycerin. Cardiology consult has been paged.',
      summary: {
        Symptoms: ['Chest pain', 'Shortness of breath', 'Diaphoresis', 'Tachycardia'],
        Medications: ['Lisinopril 20mg', 'Aspirin 325mg', 'Nitroglycerin'],
        Diagnoses: ['Acute Myocardial Infarction', 'Hypertension'],
      },
      department: 'Emergency',
    },
  ],
  patientFeedback: [
    { id: 'fb-01', comment: 'The nursing staff in the surgical ward were incredibly attentive and kind.', sentiment: 'Positive', department: 'Surgery' },
    { id: 'fb-02', comment: 'Waiting time in the emergency room was over 4 hours, which was very frustrating.', sentiment: 'Negative', department: 'Emergency' },
    { id: 'fb-03', comment: 'The billing department was helpful in explaining the charges on my statement.', sentiment: 'Positive', department: 'Billing' },
    { id: 'fb-04', comment: 'The food was okay, but the room could have been cleaner.', sentiment: 'Neutral', department: 'Inpatient Services' },
    { id: 'fb-05', comment: 'Dr. Smith took the time to answer all my questions. Excellent care.', sentiment: 'Positive', department: 'Cardiology' },
  ],
}; 