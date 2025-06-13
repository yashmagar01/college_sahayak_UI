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
  MapPin,
  TrendingUp,
  Bell,
  ExternalLink,
  Download,
  Eye,
  ThumbsUp,
  Calendar,
  AlertCircle,
  Award,
  BookmarkPlus,
  MessageSquare,
  User,
  LogIn
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

  const trendingMaterials = [
    {
      id: 1,
      title: 'Data Structures & Algorithms Complete Notes',
      subject: 'Computer Engineering',
      semester: 'Semester 4',
      downloads: 2847,
      views: 12450,
      rating: 4.9,
      uploadDate: '2 days ago',
      trending: true,
      type: 'Notes'
    },
    {
      id: 2,
      title: 'Engineering Mechanics Lab Manual 2025',
      subject: 'Mechanical Engineering',
      semester: 'Semester 3',
      downloads: 1923,
      views: 8760,
      rating: 4.8,
      uploadDate: '1 week ago',
      trending: true,
      type: 'Lab Manual'
    },
    {
      id: 3,
      title: 'Digital Electronics Micro-Project Collection',
      subject: 'Electronics Engineering',
      semester: 'Semester 5',
      downloads: 3156,
      views: 15230,
      rating: 4.9,
      uploadDate: '3 days ago',
      trending: true,
      type: 'Projects'
    },
    {
      id: 4,
      title: 'Construction Technology Assignment Solutions',
      subject: 'Civil Engineering',
      semester: 'Semester 4',
      downloads: 1456,
      views: 6890,
      rating: 4.7,
      uploadDate: '5 days ago',
      trending: false,
      type: 'Assignments'
    }
  ];

  const officialUpdates = [
    {
      id: 1,
      title: 'MSBTE Summer 2025 Exam Schedule Released',
      description: 'Check your exam dates and prepare accordingly. Download the complete timetable.',
      date: '2025-01-15',
      type: 'Exam Schedule',
      priority: 'high',
      link: '#'
    },
    {
      id: 2,
      title: 'New Curriculum Updates for AY 2024-25',
      description: 'Updated syllabus for Computer and Electronics Engineering branches.',
      date: '2025-01-12',
      type: 'Curriculum',
      priority: 'medium',
      link: '#'
    },
    {
      id: 3,
      title: 'Online Practical Submission Guidelines',
      description: 'Important instructions for submitting lab practicals online.',
      date: '2025-01-10',
      type: 'Guidelines',
      priority: 'high',
      link: '#'
    }
  ];

  const importantLinks = [
    { name: 'MSBTE Official Portal', url: 'https://msbte.org.in', description: 'Official MSBTE website' },
    { name: 'Student Login Portal', url: '#', description: 'Access your student dashboard' },
    { name: 'Exam Results', url: '#', description: 'Check your semester results' },
    { name: 'Admission Information', url: '#', description: 'Polytechnic admission details' },
    { name: 'Scholarship Portal', url: '#', description: 'Apply for scholarships' },
    { name: 'Academic Calendar', url: '#', description: 'Important academic dates' }
  ];

  const recentReviews = [
    {
      id: 1,
      userName: 'Priya S.',
      branch: 'Computer Engineering',
      rating: 5,
      comment: 'Amazing collection of notes! Helped me score 85% in my semester exams.',
      date: '2 days ago',
      materialTitle: 'Java Programming Notes'
    },
    {
      id: 2,
      userName: 'Rahul M.',
      branch: 'Mechanical Engineering',
      rating: 5,
      comment: 'Lab manuals are very detailed and easy to understand. Highly recommended!',
      date: '1 week ago',
      materialTitle: 'Thermodynamics Lab Manual'
    },
    {
      id: 3,
      userName: 'Sneha K.',
      branch: 'Electronics Engineering',
      rating: 4,
      comment: 'Great micro-project ideas. Successfully completed my semester project.',
      date: '3 days ago',
      materialTitle: 'IoT Project Collection'
    }
  ];

  const handleShowMaterials = () => {
    if (selectedBranch && selectedSemester) {
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
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <span>Home</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <LogIn className="w-4 h-4" />
                <span>Login/Register</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>About Us</span>
              </a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>Feedback</span>
              </a>
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

      {/* Trending Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trending Study Materials</h2>
            </div>
            <p className="text-lg text-gray-600">Most popular downloads this week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingMaterials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.trending ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.trending ? 'TRENDING' : item.type}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{item.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{item.subject}</p>
                <p className="text-xs text-gray-500 mb-4">{item.semester}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <span>{item.uploadDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Download Now
                  </button>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Updates from MSBTE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bell className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Official Updates from MSBTE</h2>
            </div>
            <p className="text-lg text-gray-600">Stay updated with the latest announcements and important information</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {officialUpdates.map((update) => (
              <div
                key={update.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    update.priority === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {update.type}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(update.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {update.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {update.description}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={update.link}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {update.priority === 'high' && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Students Say</h2>
            </div>
            <p className="text-lg text-gray-600">Real reviews from polytechnic students across Maharashtra</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {review.userName.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{review.userName}</div>
                      <div className="text-xs text-gray-500">{review.branch}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">{review.materialTitle}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookmarkPlus className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Important Links</h2>
            </div>
            <p className="text-lg text-gray-600">Quick access to essential polytechnic resources</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-200 cursor-pointer group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {link.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </a>
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