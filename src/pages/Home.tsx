import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Shield, Clock, Award, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import PagePopup from '../components/PagePopup';
import lalLabsLogo from '../assets/lal labs.png';
import metropolisLogo from '../assets/metropolis.png';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Accurate Results',
      description: 'State-of-the-art equipment and expert technicians ensure precise diagnostic results.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Fast Turnaround',
      description: 'Quick processing and delivery of test results with most reports available within 24 hours.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Certified Lab',
      description: 'NABL accredited laboratory meeting the highest standards of quality and safety.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Experienced pathologists and technicians dedicated to providing excellent service.'
    }
  ];

  const services = [
    'Complete Blood Count (CBC)',
    'Lipid Profile',
    'Liver Function Test',
    'Kidney Function Test',
    'Thyroid Profile',
    'Diabetes Panel',
    'X-Ray Services',
    'Ultrasound Scanning'
  ];

  const offers = [
    {
      title: 'Health Checkup Package',
      discount: '30% OFF',
      price: '₹2,499',
      originalPrice: '₹3,499',
      description: 'Comprehensive health screening with 25+ tests'
    },
    {
      title: 'Diabetes Care Package',
      discount: '25% OFF',
      price: '₹899',
      originalPrice: '₹1,199',
      description: 'Complete diabetes monitoring panel'
    },
    {
      title: 'Women\'s Health Package',
      discount: '35% OFF',
      price: '₹1,999',
      originalPrice: '₹2,999',
      description: 'Specialized tests for women\'s health'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Health,
                <span className="text-yellow-400"> Our Priority</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Advanced diagnostic services with accurate results, fast turnaround, and compassionate care. 
                Book your appointment today for a healthier tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Book Appointment
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/tests"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  View Tests
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <p className="text-lg mb-6">Emergency Services Available</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">50,000+</div>
                      <p className="text-sm text-blue-100">Tests Completed</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">99.9%</div>
                      <p className="text-sm text-blue-100">Accuracy Rate</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">15+</div>
                      <p className="text-sm text-blue-100">Years Experience</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">24hrs</div>
                      <p className="text-sm text-blue-100">Report Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted Partners
            </h2>
            <p className="text-gray-600">
              Collaborating with leading healthcare organizations
            </p>
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="inline-flex items-center justify-center">
              <div className="bg-white px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-500 hover:scale-105">
                <img src={metropolisLogo} alt="Metropolis Healthcare" className="h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="inline-flex items-center justify-center">
              <div className="bg-white px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-500 hover:scale-105">
                <img src={lalLabsLogo} alt="Dr. Lal PathLabs" className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600">
              Limited time offers on comprehensive health packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-green-600">
                <div className="text-center">
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                    {offer.discount}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-3xl font-bold text-green-600">{offer.price}</span>
                    <span className="text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                  <Link
                    to="/book-appointment"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yashpath?
            </h2>
            <p className="text-xl text-gray-600">
              We are committed to providing the highest quality diagnostic services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:bg-blue-50 p-6 rounded-xl transition-colors">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Diagnostic Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From basic blood tests to advanced imaging, we offer a complete range of diagnostic services 
                to meet all your healthcare needs.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/tests"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                View All Tests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Testimonial</h3>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Excellent service! The staff was professional, the facilities were clean, and I received my 
                test results quickly. Highly recommend Yashpath for all diagnostic needs."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  SJ
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sanya Jain</p>
                  <p className="text-gray-600 text-sm">Regular Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience professional diagnostic services 
            with accurate results and caring support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Appointment
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <PagePopup  title="Quick Inquiry" 
       message="Drop your details and we’ll call you back!"  />
    </div>
  );
};

export default Home;