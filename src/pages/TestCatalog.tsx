import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, IndianRupee, FileText, Calendar } from 'lucide-react';
import { diagnosticTests, testCategories } from '../utils/mockData';
import { Link } from 'react-router-dom';

const TestCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredTests = useMemo(() => {
    return diagnosticTests.filter(test => {
      const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          test.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || test.category === selectedCategory;
      const matchesPrice = test.price >= priceRange[0] && test.price <= priceRange[1];
      const matchesAvailability = !showAvailableOnly || test.availability;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
    });
  }, [searchTerm, selectedCategory, priceRange, showAvailableOnly]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diagnostic Test Catalog</h1>
          <p className="text-xl text-gray-600">
            Browse our comprehensive range of diagnostic tests and health packages
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tests..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {testCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>

            {/* Availability Filter */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="available-only"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
              />
              <label htmlFor="available-only" className="ml-2 text-sm font-medium text-gray-700">
                Show available only
              </label>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTests.length} of {diagnosticTests.length} tests
          </p>
        </div>

        {/* Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-600"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 flex-1">{test.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  test.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {test.availability ? 'Available' : 'Unavailable'}
                </span>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {test.category}
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">{test.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <IndianRupee className="h-4 w-4 mr-2 text-green-600" />
                  <span className="font-semibold text-green-600">₹{test.price}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{test.duration}</span>
                </div>
                {test.preparation && (
                  <div className="flex items-start text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-2 mt-0.5" />
                    <span>{test.preparation}</span>
                  </div>
                )}
              </div>

              <Link
                to={`/book-appointment?testId=${test.id}`}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                  test.availability
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={!test.availability ? (e) => e.preventDefault() : undefined}
              >
                {test.availability ? (
                  <>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </>
                ) : (
                  'Not Available'
                )}
              </Link>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tests found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse all available tests.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Test?</h3>
          <p className="text-blue-100 mb-6">
            Our healthcare experts are here to help you select the most appropriate diagnostic tests for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCatalog;