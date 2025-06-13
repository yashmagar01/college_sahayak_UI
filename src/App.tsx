import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Settings, 
  Lightbulb, 
  ClipboardList,
  ChevronRight,
  Star,
  Clock,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const branches = [
    { id: 'computer', name: 'Computer Engineering', icon: '💻' },
    { id: 'mechanical', name: 'Mechanical Engineering', icon: '⚙️' },
    { id: 'electrical', name: 'Electrical Engineering', icon: '⚡' },
    { id: 'civil', name: 'Civil Engineering', icon: '🏗️' },
    { id: 'electronics', name: 'Electronics Engineering', icon: '📡' },
    { id: 'automobile', name: 'Automobile Engineering', icon: '🚗' }
  ];

  const semesters = [
    { id: '1', name: 'Semester 1' },
    { id: '2', name: 'Semester 2' },
    { id: '3', name: 'Semester 3' },
    { id: '4', name: 'Semester 4' },
    { id: '5', name: 'Semester 5' },
    { id: '6', name: 'Semester 6' }
  ];

  const quickResources = [
    { id: 'syllabus', name: 'Syllabus', icon: BookOpen, color: 'bg-blue-500', description: 'Latest curriculum' },
    { id: 'practicals', name: 'Lab Practicals', icon: Settings, color: 'bg-green-500', description: 'Hands-on experiments' },
    { id: 'assignments', name: 'Assignments', icon: FileText, color: 'bg-purple-500', description: 'Practice problems' },
    { id: 'projects', name: 'Micro-Projects', icon: Lightbulb, color: 'bg-orange-500', description: 'Project ideas' },
    { id: 'papers', name: 'Question Papers', icon: ClipboardList, color: 'bg-red-500', description: 'Previous year papers' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'Advanced Java Programming Lab Manual',
      subject: 'Computer Engineering',
      type: 'Lab Manual',
      rating: 4.8,
      downloads: 1250,
      isNew: true
    },
    {
      id: 2,
      title: 'Engineering Mechanics Question Bank',
      subject: 'Mechanical Engineering',
      type: 'Question Papers',
      rating: 4.6,
      downloads: 890,
      isNew: false
    },
    {
      id: 3,
      title: 'Digital Electronics Micro-Project Ideas',
      subject: 'Electronics Engineering',
      type: 'Projects',
      rating: 4.9,
      downloads: 2100,
      isNew: true
    },
    {
      id: 4,
      title: 'Concrete Technology Assignment Solutions',
      subject: 'Civil Engineering',
      type: 'Assignments',
      rating: 4.7,
      downloads: 670,
      isNew: false
    }
  ];

  const handleShowMaterials = () => {
    if (selectedBranch && selectedSemester) {
      // Navigate to materials page
      console.log(`Showing materials for ${selectedBranch} - ${selectedSemester}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">College Sahayak</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Diploma Studies,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Simplified
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Get access to the latest syllabus, practicals, assignments, and micro-projects for your branch. 
                Everything you need for your polytechnic journey, in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore Resources Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Study Materials</h3>
                    <p className="text-sm text-gray-600">Latest & Updated</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Computer Engineering</span>
                    <span className="text-xs text-blue-600 font-semibold">350+ Files</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Mechanical Engineering</span>
                    <span className="text-xs text-green-600 font-semibold">280+ Files</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Electrical Engineering</span>
                    <span className="text-xs text-purple-600 font-semibold">320+ Files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Quick Access Resources</h2>
            <p className="mt-4 text-lg text-gray-600">Jump directly to what you need</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {quickResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.name}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    <span>Access Now</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Find Your Materials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get Started: Find Your Study Material</h2>
            <p className="mt-4 text-lg text-gray-600">Select your branch and semester to access tailored resources</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            {/* Step 1: Choose Branch */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Choose Your Branch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-md ${
                      selectedBranch === branch.id
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{branch.icon}</span>
                      <div>
                        <div className={`font-medium ${selectedBranch === branch.id ? 'text-blue-900' : 'text-gray-900'}`}>
                          {branch.name}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Semester */}
            {selectedBranch && (
              <div className="mb-8 animate-fadeIn">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Choose Your Semester
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {semesters.map((semester) => (
                    <button
                      key={semester.id}
                      onClick={() => setSelectedSemester(semester.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                        selectedSemester === semester.id
                          ? 'border-orange-500 bg-orange-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-orange-300'
                      }`}
                    >
                      <div className={`font-medium text-center ${selectedSemester === semester.id ? 'text-orange-900' : 'text-gray-900'}`}>
                        {semester.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Show Materials Button */}
            {selectedBranch && selectedSemester && (
              <div className="text-center animate-fadeIn">
                <button
                  onClick={handleShowMaterials}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Show Materials
                  <ChevronRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recently Added</h2>
            <p className="mt-4 text-lg text-gray-600">Popular resources this week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1"
              >
                {item.isNew && (
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.subject}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{item.downloads} downloads</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About College Sahayak */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">College Sahayak</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Empowering polytechnic diploma students across Maharashtra with comprehensive study materials, 
                practicals, and resources for academic excellence.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>support@collegesahayak.com</span>
                </div>
              </div>
            </div>

            {/* Essential Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Essential Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-300 text-sm mb-4">
                Follow us for updates, study tips, and educational content.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 College Sahayak. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;