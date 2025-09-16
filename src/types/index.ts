export interface DiagnosticTest {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  preparation?: string;
  availability: boolean;
}

export interface Appointment {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  testId: string;
  testName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  appointments: Appointment[];
}

export interface TestResult {
  id: string;
  appointmentId: string;
  testName: string;
  date: string;
  status: 'pending' | 'ready' | 'delivered';
  reportUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}