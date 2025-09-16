import { DiagnosticTest, Patient, TestResult } from '../types';

export const diagnosticTests: DiagnosticTest[] = [
  {
    id: '1',
    name: 'Complete Blood Count (CBC)',
    category: 'Blood Tests',
    price: 299,
    duration: '30 minutes',
    description: 'Comprehensive blood test to check overall health and detect various conditions.',
    preparation: 'No special preparation required',
    availability: true
  },
  {
    id: '2',
    name: 'Lipid Profile',
    category: 'Blood Tests',
    price: 599,
    duration: '30 minutes',
    description: 'Measures cholesterol and triglyceride levels in blood.',
    preparation: '12-hour fasting required',
    availability: true
  },
  {
    id: '3',
    name: 'Chest X-Ray',
    category: 'Radiology',
    price: 450,
    duration: '15 minutes',
    description: 'X-ray imaging of chest to examine lungs, heart, and chest wall.',
    preparation: 'Remove jewelry and metal objects',
    availability: true
  },
  {
    id: '4',
    name: 'ECG (Electrocardiogram)',
    category: 'Cardiology',
    price: 350,
    duration: '20 minutes',
    description: 'Records electrical activity of heart to detect heart problems.',
    preparation: 'Wear loose, comfortable clothing',
    availability: true
  },
  {
    id: '5',
    name: 'Ultrasound Abdomen',
    category: 'Radiology',
    price: 1200,
    duration: '45 minutes',
    description: 'Non-invasive imaging of abdominal organs.',
    preparation: '6-hour fasting required',
    availability: true
  },
  {
    id: '6',
    name: 'Thyroid Function Test',
    category: 'Hormone Tests',
    price: 850,
    duration: '30 minutes',
    description: 'Tests to check thyroid gland function.',
    preparation: 'No special preparation required',
    availability: true
  },
  {
    id: '7',
    name: 'Diabetes Panel',
    category: 'Blood Tests',
    price: 699,
    duration: '30 minutes',
    description: 'Comprehensive diabetes screening including glucose and HbA1c.',
    preparation: '12-hour fasting required',
    availability: true
  },
  {
    id: '8',
    name: 'MRI Brain',
    category: 'Radiology',
    price: 5500,
    duration: '60 minutes',
    description: 'Detailed brain imaging using magnetic resonance.',
    preparation: 'Remove all metal objects',
    availability: false
  }
];

export const testCategories = [
  'All Categories',
  'Blood Tests',
  'Radiology',
  'Cardiology',
  'Hormone Tests'
];

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

// Mock patient data (in real app, this would come from backend)
export const mockPatient: Patient = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 9876543210',
  dateOfBirth: '1985-05-15',
  appointments: [
    {
      id: '1',
      patientName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      testId: '1',
      testName: 'Complete Blood Count (CBC)',
      date: '2025-01-25',
      time: '10:00',
      status: 'scheduled'
    }
  ]
};

export const mockTestResults: TestResult[] = [
  {
    id: '1',
    appointmentId: '1',
    testName: 'Complete Blood Count (CBC)',
    date: '2025-01-20',
    status: 'ready',
    reportUrl: '#'
  }
];