import React from 'react';
import { Award, Users, Heart, Target, Eye, Shield, Clock, CheckCircle } from 'lucide-react';
import PagePopup from '../components/PagePopup';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Pathologist',
      qualification: 'MD Pathology, 20+ years experience',
      image: 'RK'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Senior Radiologist',
      qualification: 'MD Radiology, 15+ years experience',
      image: 'PS'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Lab Director',
      qualification: 'PhD Biochemistry, 18+ years experience',
      image: 'AP'
    },
    {
      name: 'Ms. Sneha Gupta',
      position: 'Quality Manager',
      qualification: 'MSc Medical Technology, 12+ years experience',
      image: 'SG'
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'NABL Accredited',
      description: 'Certified by National Accreditation Board for Testing and Calibration Laboratories'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'ISO 15189 Certified',
      description: 'International standard for quality and competence in medical laboratories'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '50,000+ Patients',
      description: 'Successfully served over 50,000 patients with accurate diagnostic services'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Services',
      description: 'Round-the-clock emergency diagnostic services and home collection'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and personalized attention.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Quality Excellence',
      description: 'Committed to maintaining the highest standards of accuracy and reliability.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our interactions and services.'
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: 'Innovation',
      description: 'Continuously adopting latest technology and best practices in diagnostics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Yashpath Diagnostic Center</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading the way in diagnostic excellence for over 15 years, providing accurate and reliable 
            medical testing services with state-of-the-art technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide accurate, reliable, and timely diagnostic services that empower patients and 
                  healthcare providers to make informed decisions about health and treatment. We are committed 
                  to excellence in every test, every result, and every interaction.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted diagnostic center in the region, recognized for our commitment to 
                  quality, innovation, and patient-centered care. We envision a future where advanced 
                  diagnostic technology makes quality healthcare accessible to everyone.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <p className="text-gray-700">Patients Served</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <p className="text-gray-700">Tests Available</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
                <p className="text-gray-700">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your health and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Recognition and certifications that validate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 2009 by Dr. Rajesh Kumar, Yashpath Diagnostic Center began with a simple 
                  vision: to provide world-class diagnostic services with a personal touch. What started 
                  as a small laboratory has grown into a comprehensive diagnostic center serving thousands 
                  of patients across the region.
                </p>
                <p className="mb-4">
                  Over the years, we have continuously invested in the latest technology, expanded our 
                  test menu, and built a team of highly qualified professionals. Our commitment to quality 
                  has earned us NABL accreditation and ISO certification, making us one of the most 
                  trusted diagnostic centers in the area.
                </p>
                <p>
                  Today, we offer over 200 different tests and health packages, from basic blood work to 
                  advanced imaging studies. Our state-of-the-art facility, combined with our experienced 
                  team, ensures that every patient receives accurate results and exceptional care.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'NABL accredited laboratory with ISO certification',
                  'State-of-the-art equipment and latest technology',
                  'Experienced team of pathologists and technicians',
                  'Fast turnaround time with most reports in 24 hours',
                  'Home sample collection service available',
                  'Competitive pricing with transparent billing',
                  'Digital reports accessible through patient portal',
                  '24/7 emergency diagnostic services'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience the Yashpath Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their diagnostic needs. 
            Book your appointment today and experience excellence in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-appointment"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <PagePopup message="15+ years of trusted diagnostic excellence." />
    </div>
  );
};

export default About;