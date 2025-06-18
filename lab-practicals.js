// Initialize Lucide icons and application
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeLabPracticalsPage();
});

// Application state
let currentFilters = {
    branch: '',
    semester: '',
    subject: '',
    search: ''
};

let currentSort = 'name';
let displayedPracticals = [];
let allPracticals = [];
let currentPage = 1;
const practicalsPerPage = 12;

// Subject data for each branch and semester
const subjectData = {
    computer: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Programming in C'],
        3: ['Data Structures', 'Object Oriented Programming', 'Computer Graphics', 'Digital Electronics'],
        4: ['Database Management', 'Java Programming', 'Computer Networks', 'Operating Systems'],
        5: ['Advanced Java Programming', 'Web Technology', 'Software Engineering', 'Mobile Application Development'],
        6: ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing', 'Cyber Security']
    },
    it: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Programming in C'],
        3: ['Data Structures', 'Object Oriented Programming', 'Web Development', 'Database Fundamentals'],
        4: ['Database Management', 'Java Programming', 'Computer Networks', 'System Administration'],
        5: ['Advanced Web Technology', 'Mobile App Development', 'Software Testing', 'Network Security'],
        6: ['Cloud Computing', 'Big Data Analytics', 'IoT Applications', 'Project Management']
    },
    mechanical: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Workshop Technology'],
        3: ['Strength of Materials', 'Thermodynamics', 'Fluid Mechanics', 'Manufacturing Processes'],
        4: ['Machine Design', 'Heat Transfer', 'Production Technology', 'Metrology'],
        5: ['Automobile Engineering', 'Refrigeration & AC', 'Industrial Engineering', 'CAD/CAM'],
        6: ['Power Plant Engineering', 'Renewable Energy', 'Project Work', 'Industrial Training']
    },
    electrical: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Basic Electrical Engineering'],
        3: ['Electrical Machines', 'Electronic Devices', 'Electrical Measurements', 'Network Analysis'],
        4: ['Power Electronics', 'Control Systems', 'Electrical Installation', 'Microprocessors'],
        5: ['Power Systems', 'Industrial Electronics', 'Electrical Drives', 'PLC & SCADA'],
        6: ['Renewable Energy Systems', 'Smart Grid Technology', 'Project Work', 'Industrial Training']
    },
    electronics: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Basic Electronics'],
        3: ['Electronic Devices', 'Digital Electronics', 'Network Analysis', 'Electronic Measurements'],
        4: ['Microprocessors', 'Communication Systems', 'Control Systems', 'Power Electronics'],
        5: ['Embedded Systems', 'VLSI Design', 'Optical Communication', 'Digital Signal Processing'],
        6: ['IoT Applications', 'Robotics', 'Wireless Communication', 'Project Work']
    },
    civil: {
        1: ['Basic Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Engineering Graphics'],
        2: ['Applied Mathematics', 'Applied Physics', 'Applied Chemistry', 'Building Materials'],
        3: ['Surveying', 'Strength of Materials', 'Fluid Mechanics', 'Construction Technology'],
        4: ['Structural Analysis', 'Concrete Technology', 'Soil Mechanics', 'Highway Engineering'],
        5: ['Design of Structures', 'Water Supply Engineering', 'Environmental Engineering', 'Quantity Surveying'],
        6: ['Construction Management', 'Advanced Surveying', 'Project Work', 'Industrial Training']
    }
};

// Sample practical data
const practicalsData = [
    // Computer Engineering Practicals
    {
        id: 1,
        title: 'Experiment 1: Setup JDK and write a simple Java program',
        subject: 'Java Programming',
        branch: 'computer',
        semester: 4,
        fileType: 'PDF',
        downloads: 2847,
        views: 12450,
        uploadDate: '2025-01-10',
        description: 'Complete guide to setting up Java development environment and creating your first program.',
        icon: '☕',
        subjectClass: 'subject-java'
    },
    {
        id: 2,
        title: 'Experiment 2: Implement Stack using Arrays',
        subject: 'Data Structures',
        branch: 'computer',
        semester: 3,
        fileType: 'DOCX',
        downloads: 1923,
        views: 8760,
        uploadDate: '2025-01-08',
        description: 'Implementation of stack data structure with push, pop, and display operations.',
        icon: '📚',
        subjectClass: 'subject-cpp'
    },
    {
        id: 3,
        title: 'Experiment 3: Create a responsive webpage using HTML5 and CSS3',
        subject: 'Web Technology',
        branch: 'computer',
        semester: 5,
        fileType: 'ZIP',
        downloads: 3156,
        views: 15230,
        uploadDate: '2025-01-12',
        description: 'Build a modern responsive website with HTML5 semantic elements and CSS3 features.',
        icon: '🌐',
        subjectClass: 'subject-web'
    },
    {
        id: 4,
        title: 'Experiment 4: Database connectivity using JDBC',
        subject: 'Database Management',
        branch: 'computer',
        semester: 4,
        fileType: 'PDF',
        downloads: 2156,
        views: 9870,
        uploadDate: '2025-01-09',
        description: 'Connect Java applications to MySQL database using JDBC drivers.',
        icon: '🗄️',
        subjectClass: 'subject-database'
    },
    {
        id: 5,
        title: 'Experiment 5: Implement Binary Search Tree',
        subject: 'Data Structures',
        branch: 'computer',
        semester: 3,
        fileType: 'DOCX',
        downloads: 1789,
        views: 7650,
        uploadDate: '2025-01-07',
        description: 'Complete implementation of BST with insertion, deletion, and traversal operations.',
        icon: '🌳',
        subjectClass: 'subject-cpp'
    },
    {
        id: 6,
        title: 'Experiment 6: Socket Programming in Java',
        subject: 'Computer Networks',
        branch: 'computer',
        semester: 4,
        fileType: 'ZIP',
        downloads: 2456,
        views: 11230,
        uploadDate: '2025-01-11',
        description: 'Client-server communication using TCP and UDP sockets in Java.',
        icon: '🔗',
        subjectClass: 'subject-networking'
    },
    
    // IT Branch Practicals
    {
        id: 7,
        title: 'Experiment 1: Create dynamic web pages using PHP and MySQL',
        subject: 'Web Development',
        branch: 'it',
        semester: 3,
        fileType: 'ZIP',
        downloads: 2234,
        views: 10450,
        uploadDate: '2025-01-10',
        description: 'Build dynamic web applications with PHP backend and MySQL database.',
        icon: '🐘',
        subjectClass: 'subject-web'
    },
    {
        id: 8,
        title: 'Experiment 2: Implement user authentication system',
        subject: 'Web Development',
        branch: 'it',
        semester: 3,
        fileType: 'PDF',
        downloads: 1876,
        views: 8340,
        uploadDate: '2025-01-09',
        description: 'Secure login and registration system with session management.',
        icon: '🔐',
        subjectClass: 'subject-web'
    },
    {
        id: 9,
        title: 'Experiment 3: Mobile app development using Android Studio',
        subject: 'Mobile App Development',
        branch: 'it',
        semester: 5,
        fileType: 'ZIP',
        downloads: 3456,
        views: 16780,
        uploadDate: '2025-01-13',
        description: 'Create native Android applications with modern UI components.',
        icon: '📱',
        subjectClass: 'subject-mobile'
    },
    
    // Mechanical Engineering Practicals
    {
        id: 10,
        title: 'Experiment 1: Tensile test on mild steel specimen',
        subject: 'Strength of Materials',
        branch: 'mechanical',
        semester: 3,
        fileType: 'PDF',
        downloads: 1567,
        views: 6890,
        uploadDate: '2025-01-08',
        description: 'Determine mechanical properties of materials through tensile testing.',
        icon: '🔧',
        subjectClass: 'subject-mechanical'
    },
    {
        id: 11,
        title: 'Experiment 2: Heat transfer in fins',
        subject: 'Heat Transfer',
        branch: 'mechanical',
        semester: 4,
        fileType: 'DOCX',
        downloads: 1234,
        views: 5670,
        uploadDate: '2025-01-07',
        description: 'Study heat conduction and convection in extended surfaces.',
        icon: '🌡️',
        subjectClass: 'subject-thermal'
    },
    
    // Electrical Engineering Practicals
    {
        id: 12,
        title: 'Experiment 1: Characteristics of DC motor',
        subject: 'Electrical Machines',
        branch: 'electrical',
        semester: 3,
        fileType: 'PDF',
        downloads: 1789,
        views: 7890,
        uploadDate: '2025-01-09',
        description: 'Study speed-torque and speed-current characteristics of DC motors.',
        icon: '⚡',
        subjectClass: 'subject-electrical'
    },
    {
        id: 13,
        title: 'Experiment 2: Power measurement in 3-phase circuits',
        subject: 'Electrical Measurements',
        branch: 'electrical',
        semester: 3,
        fileType: 'DOCX',
        downloads: 1456,
        views: 6540,
        uploadDate: '2025-01-08',
        description: 'Measure active and reactive power in balanced and unbalanced loads.',
        icon: '📊',
        subjectClass: 'subject-electrical'
    },
    
    // Electronics Engineering Practicals
    {
        id: 14,
        title: 'Experiment 1: Amplifier circuits using Op-Amp',
        subject: 'Electronic Devices',
        branch: 'electronics',
        semester: 3,
        fileType: 'PDF',
        downloads: 2123,
        views: 9450,
        uploadDate: '2025-01-10',
        description: 'Design and test inverting and non-inverting amplifier circuits.',
        icon: '🔌',
        subjectClass: 'subject-electronics'
    },
    {
        id: 15,
        title: 'Experiment 2: Digital logic gates implementation',
        subject: 'Digital Electronics',
        branch: 'electronics',
        semester: 3,
        fileType: 'ZIP',
        downloads: 2567,
        views: 11230,
        uploadDate: '2025-01-11',
        description: 'Implement basic logic gates and combinational circuits.',
        icon: '💾',
        subjectClass: 'subject-digital'
    },
    
    // Civil Engineering Practicals
    {
        id: 16,
        title: 'Experiment 1: Concrete mix design',
        subject: 'Concrete Technology',
        branch: 'civil',
        semester: 4,
        fileType: 'PDF',
        downloads: 1345,
        views: 5890,
        uploadDate: '2025-01-08',
        description: 'Design concrete mix for specified strength and workability requirements.',
        icon: '🏗️',
        subjectClass: 'subject-civil'
    },
    {
        id: 17,
        title: 'Experiment 2: Soil classification tests',
        subject: 'Soil Mechanics',
        branch: 'civil',
        semester: 4,
        fileType: 'DOCX',
        downloads: 1123,
        views: 4560,
        uploadDate: '2025-01-07',
        description: 'Determine soil properties through various classification tests.',
        icon: '🌍',
        subjectClass: 'subject-civil'
    }
];

// Initialize the lab practicals page
function initializeLabPracticalsPage() {
    allPracticals = [...practicalsData];
    setupEventListeners();
    showDefaultMessage();
}

// Setup event listeners
function setupEventListeners() {
    // Filter dropdowns
    document.getElementById('branch-select').addEventListener('change', handleBranchChange);
    document.getElementById('semester-select').addEventListener('change', handleSemesterChange);
    document.getElementById('subject-select').addEventListener('change', handleSubjectChange);
    
    // Search input
    document.getElementById('search-input').addEventListener('input', handleSearchInput);
    
    // Sort dropdown
    document.getElementById('sort-select').addEventListener('change', handleSortChange);
    
    // Clear filters button
    document.getElementById('clear-filters').addEventListener('click', clearAllFilters);
    
    // Load more button
    document.getElementById('load-more-btn').addEventListener('click', loadMorePracticals);
}

// Handle branch selection change
function handleBranchChange(e) {
    const selectedBranch = e.target.value;
    currentFilters.branch = selectedBranch;
    
    // Reset dependent filters
    currentFilters.semester = '';
    currentFilters.subject = '';
    
    // Update UI
    document.getElementById('semester-select').value = '';
    updateSubjectDropdown();
    
    // Add visual feedback
    e.target.classList.toggle('filter-active', selectedBranch !== '');
    
    // Apply filters
    applyFilters();
}

// Handle semester selection change
function handleSemesterChange(e) {
    const selectedSemester = e.target.value;
    currentFilters.semester = selectedSemester;
    
    // Reset subject filter
    currentFilters.subject = '';
    
    // Update subject dropdown
    updateSubjectDropdown();
    
    // Add visual feedback
    e.target.classList.toggle('filter-active', selectedSemester !== '');
    
    // Apply filters
    applyFilters();
}

// Handle subject selection change
function handleSubjectChange(e) {
    const selectedSubject = e.target.value;
    currentFilters.subject = selectedSubject;
    
    // Add visual feedback
    e.target.classList.toggle('filter-active', selectedSubject !== '');
    
    // Apply filters
    applyFilters();
}

// Handle search input
function handleSearchInput(e) {
    currentFilters.search = e.target.value.toLowerCase().trim();
    
    // Add visual feedback
    e.target.classList.toggle('filter-active', currentFilters.search !== '');
    
    // Debounce search
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        applyFilters();
    }, 300);
}

// Handle sort change
function handleSortChange(e) {
    currentSort = e.target.value;
    applyFilters();
}

// Update subject dropdown based on branch and semester
function updateSubjectDropdown() {
    const subjectSelect = document.getElementById('subject-select');
    const { branch, semester } = currentFilters;
    
    // Clear existing options
    subjectSelect.innerHTML = '<option value="">Choose Subject</option>';
    
    if (branch && semester && subjectData[branch] && subjectData[branch][semester]) {
        const subjects = subjectData[branch][semester];
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
        subjectSelect.disabled = false;
    } else {
        subjectSelect.disabled = true;
    }
    
    subjectSelect.classList.remove('filter-active');
}

// Apply all filters
function applyFilters() {
    let filteredPracticals = [...allPracticals];
    
    // Apply branch filter
    if (currentFilters.branch) {
        filteredPracticals = filteredPracticals.filter(practical => 
            practical.branch === currentFilters.branch
        );
    }
    
    // Apply semester filter
    if (currentFilters.semester) {
        filteredPracticals = filteredPracticals.filter(practical => 
            practical.semester.toString() === currentFilters.semester
        );
    }
    
    // Apply subject filter
    if (currentFilters.subject) {
        filteredPracticals = filteredPracticals.filter(practical => 
            practical.subject === currentFilters.subject
        );
    }
    
    // Apply search filter
    if (currentFilters.search) {
        filteredPracticals = filteredPracticals.filter(practical => 
            practical.title.toLowerCase().includes(currentFilters.search) ||
            practical.subject.toLowerCase().includes(currentFilters.search) ||
            practical.description.toLowerCase().includes(currentFilters.search)
        );
    }
    
    // Apply sorting
    filteredPracticals = sortPracticals(filteredPracticals, currentSort);
    
    // Update display
    displayedPracticals = filteredPracticals;
    currentPage = 1;
    renderPracticals();
    updateResultsCount();
}

// Sort practicals based on selected criteria
function sortPracticals(practicals, sortBy) {
    switch (sortBy) {
        case 'name':
            return practicals.sort((a, b) => a.title.localeCompare(b.title));
        case 'subject':
            return practicals.sort((a, b) => a.subject.localeCompare(b.subject));
        case 'downloads':
            return practicals.sort((a, b) => b.downloads - a.downloads);
        case 'recent':
            return practicals.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        default:
            return practicals;
    }
}

// Render practicals grid
function renderPracticals() {
    const grid = document.getElementById('practicals-grid');
    const defaultMessage = document.getElementById('default-message');
    const noResults = document.getElementById('no-results');
    const loadMoreSection = document.getElementById('load-more-section');
    
    // Hide all sections first
    defaultMessage.classList.add('hidden');
    noResults.classList.add('hidden');
    grid.classList.add('hidden');
    loadMoreSection.classList.add('hidden');
    
    // Check if we should show default message
    if (!currentFilters.branch && !currentFilters.semester && !currentFilters.search) {
        showDefaultMessage();
        return;
    }
    
    // Check if no results
    if (displayedPracticals.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    // Show results
    grid.classList.remove('hidden');
    
    // Get practicals to display (pagination)
    const startIndex = 0;
    const endIndex = currentPage * practicalsPerPage;
    const practicalsToShow = displayedPracticals.slice(startIndex, endIndex);
    
    // Render practical cards
    grid.innerHTML = practicalsToShow.map((practical, index) => `
        <div class="practical-card" style="animation-delay: ${(index % practicalsPerPage) * 0.05}s">
            <div class="p-6">
                <!-- Subject Icon -->
                <div class="subject-icon ${practical.subjectClass}">
                    ${practical.icon}
                </div>
                
                <!-- Practical Title -->
                <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg">
                    ${practical.title}
                </h3>
                
                <!-- Subject Name -->
                <p class="text-blue-600 font-medium mb-3">${practical.subject}</p>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    ${practical.description}
                </p>
                
                <!-- File Type Tag -->
                <div class="mb-4">
                    <span class="file-type-tag file-type-${practical.fileType.toLowerCase()}">
                        ${practical.fileType}
                    </span>
                </div>
                
                <!-- Stats -->
                <div class="practical-stats mb-4">
                    <div class="stat-item">
                        <i data-lucide="download" class="w-3 h-3"></i>
                        <span>${formatNumber(practical.downloads)}</span>
                    </div>
                    <div class="stat-item">
                        <i data-lucide="eye" class="w-3 h-3"></i>
                        <span>${formatNumber(practical.views)}</span>
                    </div>
                    <div class="stat-item">
                        <i data-lucide="calendar" class="w-3 h-3"></i>
                        <span>${formatDate(practical.uploadDate)}</span>
                    </div>
                </div>
                
                <!-- Download Button -->
                <button class="download-btn" onclick="downloadPractical(${practical.id})">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    <span>Download Now</span>
                </button>
            </div>
        </div>
    `).join('');
    
    // Show load more button if there are more practicals
    if (endIndex < displayedPracticals.length) {
        loadMoreSection.classList.remove('hidden');
    }
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// Show default message
function showDefaultMessage() {
    document.getElementById('default-message').classList.remove('hidden');
    document.getElementById('practicals-grid').classList.add('hidden');
    document.getElementById('no-results').classList.add('hidden');
    document.getElementById('load-more-section').classList.add('hidden');
}

// Update results count
function updateResultsCount() {
    const countElement = document.getElementById('results-count');
    const count = displayedPracticals.length;
    
    if (count === 0 && (currentFilters.branch || currentFilters.semester || currentFilters.search)) {
        countElement.textContent = 'No practicals found';
    } else if (count > 0) {
        countElement.textContent = `${count} practical${count !== 1 ? 's' : ''} found`;
        countElement.classList.add('results-count-update');
        setTimeout(() => {
            countElement.classList.remove('results-count-update');
        }, 300);
    } else {
        countElement.textContent = 'Select filters to view practicals';
    }
}

// Clear all filters
function clearAllFilters() {
    // Reset filter state
    currentFilters = {
        branch: '',
        semester: '',
        subject: '',
        search: ''
    };
    
    // Reset UI elements
    document.getElementById('branch-select').value = '';
    document.getElementById('semester-select').value = '';
    document.getElementById('subject-select').value = '';
    document.getElementById('search-input').value = '';
    document.getElementById('sort-select').value = 'name';
    
    // Remove active classes
    document.querySelectorAll('.filter-active').forEach(el => {
        el.classList.remove('filter-active');
    });
    
    // Update subject dropdown
    updateSubjectDropdown();
    
    // Reset sort
    currentSort = 'name';
    
    // Show default message
    showDefaultMessage();
    updateResultsCount();
}

// Load more practicals
function loadMorePracticals() {
    currentPage++;
    renderPracticals();
}

// Download practical function
function downloadPractical(practicalId) {
    const practical = allPracticals.find(p => p.id === practicalId);
    if (practical) {
        // Simulate download
        alert(`Downloading: ${practical.title}\nFile Type: ${practical.fileType}\n\nThis would typically start the download of the practical file.`);
        
        // Update download count (in real app, this would be done on server)
        practical.downloads++;
        
        // Re-render if this practical is currently visible
        if (displayedPracticals.some(p => p.id === practicalId)) {
            renderPracticals();
        }
    }
}

// Utility functions
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
}

// Add some interactive effects
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.practical-card')) {
        const card = e.target.closest('.practical-card');
        card.style.transform = 'translateY(-4px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.practical-card')) {
        const card = e.target.closest('.practical-card');
        card.style.transform = 'translateY(0)';
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Clear search if focused
        const searchInput = document.getElementById('search-input');
        if (document.activeElement === searchInput) {
            searchInput.value = '';
            handleSearchInput({ target: searchInput });
        }
    }
});