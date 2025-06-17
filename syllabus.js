// Initialize Lucide icons and application
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeSyllabusPage();
});

// Application state
let selectedBranch = null;
let selectedSemester = null;

// Data
const branches = [
    {
        id: 'computer',
        name: 'Computer Engineering',
        icon: 'monitor',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'it',
        name: 'IT Engineering',
        icon: 'laptop-minimal',
        color: 'from-purple-500 to-purple-600'
    },
    {
        id: 'mechanical',
        name: 'Mechanical Engineering',
        icon: 'settings',
        color: 'from-orange-500 to-orange-600'
    },
    {
        id: 'civil',
        name: 'Civil Engineering',
        icon: 'building',
        color: 'from-green-500 to-green-600'
    },
    {
        id: 'electrical',
        name: 'Electrical Engineering',
        icon: 'zap',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        id: 'etc',
        name: 'E&TC Engineering',
        icon: 'radio',
        color: 'from-red-500 to-red-600'
    }
];

const semesters = [
    { id: 'sem1', name: 'Semester I', roman: 'I' },
    { id: 'sem2', name: 'Semester II', roman: 'II' },
    { id: 'sem3', name: 'Semester III', roman: 'III' },
    { id: 'sem4', name: 'Semester IV', roman: 'IV' },
    { id: 'sem5', name: 'Semester V', roman: 'V' },
    { id: 'sem6', name: 'Semester VI', roman: 'VI' }
];

// Sample syllabus data
const syllabusData = {
    computer: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22301', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22302', name: 'Digital Techniques', credits: 4 },
            { code: '22303', name: 'Programming in C', credits: 4 },
            { code: '22304', name: 'Computer Graphics', credits: 4 },
            { code: '22305', name: 'Electronic Devices & Circuits', credits: 4 },
            { code: '22306', name: 'Data Structure using C', credits: 4 }
        ],
        sem4: [
            { code: '22401', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22402', name: 'Java Programming', credits: 4 },
            { code: '22403', name: 'Software Engineering', credits: 4 },
            { code: '22404', name: 'Computer Networks', credits: 4 },
            { code: '22405', name: 'Database Management System', credits: 4 },
            { code: '22406', name: 'Microprocessor', credits: 4 }
        ],
        sem5: [
            { code: '22501', name: 'Advanced Java Programming', credits: 4 },
            { code: '22502', name: 'Software Testing', credits: 4 },
            { code: '22503', name: 'Web Programming', credits: 4 },
            { code: '22504', name: 'Operating System', credits: 4 },
            { code: '22505', name: 'Linux System Administration', credits: 4 },
            { code: '22506', name: 'Mobile Application Development', credits: 4 }
        ],
        sem6: [
            { code: '22601', name: 'Emerging Trends in Computer Technology', credits: 4 },
            { code: '22602', name: 'Software Project Management', credits: 4 },
            { code: '22603', name: 'Cyber Security', credits: 4 },
            { code: '22604', name: 'Artificial Intelligence', credits: 4 },
            { code: '22605', name: 'Project Work', credits: 8 },
            { code: '22606', name: 'Industrial Training', credits: 4 }
        ]
    },
    it: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22311', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22312', name: 'Digital Techniques', credits: 4 },
            { code: '22313', name: 'Programming Fundamentals', credits: 4 },
            { code: '22314', name: 'Computer Graphics', credits: 4 },
            { code: '22315', name: 'Electronic Devices & Circuits', credits: 4 },
            { code: '22316', name: 'Data Structure', credits: 4 }
        ],
        sem4: [
            { code: '22411', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22412', name: 'Object Oriented Programming', credits: 4 },
            { code: '22413', name: 'Software Engineering', credits: 4 },
            { code: '22414', name: 'Computer Networks', credits: 4 },
            { code: '22415', name: 'Database Management System', credits: 4 },
            { code: '22416', name: 'System Programming', credits: 4 }
        ],
        sem5: [
            { code: '22511', name: 'Web Technology', credits: 4 },
            { code: '22512', name: 'Software Testing', credits: 4 },
            { code: '22513', name: 'Network Security', credits: 4 },
            { code: '22514', name: 'Operating System', credits: 4 },
            { code: '22515', name: 'Enterprise Java', credits: 4 },
            { code: '22516', name: 'Mobile Computing', credits: 4 }
        ],
        sem6: [
            { code: '22611', name: 'Cloud Computing', credits: 4 },
            { code: '22612', name: 'Software Project Management', credits: 4 },
            { code: '22613', name: 'Information Security', credits: 4 },
            { code: '22614', name: 'Machine Learning', credits: 4 },
            { code: '22615', name: 'Project Work', credits: 8 },
            { code: '22616', name: 'Industrial Training', credits: 4 }
        ]
    },
    mechanical: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22321', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22322', name: 'Applied Mechanics', credits: 4 },
            { code: '22323', name: 'Strength of Materials', credits: 4 },
            { code: '22324', name: 'Production Technology', credits: 4 },
            { code: '22325', name: 'Thermal Engineering', credits: 4 },
            { code: '22326', name: 'Machine Drawing', credits: 4 }
        ],
        sem4: [
            { code: '22421', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22422', name: 'Theory of Machines', credits: 4 },
            { code: '22423', name: 'Manufacturing Processes', credits: 4 },
            { code: '22424', name: 'Fluid Mechanics', credits: 4 },
            { code: '22425', name: 'Material Technology', credits: 4 },
            { code: '22426', name: 'Mechanical Measurements', credits: 4 }
        ],
        sem5: [
            { code: '22521', name: 'Design of Machine Elements', credits: 4 },
            { code: '22522', name: 'Heat Transfer', credits: 4 },
            { code: '22523', name: 'Automobile Engineering', credits: 4 },
            { code: '22524', name: 'Refrigeration & Air Conditioning', credits: 4 },
            { code: '22525', name: 'Industrial Engineering', credits: 4 },
            { code: '22526', name: 'CAD/CAM', credits: 4 }
        ],
        sem6: [
            { code: '22621', name: 'Power Plant Engineering', credits: 4 },
            { code: '22622', name: 'Renewable Energy Sources', credits: 4 },
            { code: '22623', name: 'Quality Control', credits: 4 },
            { code: '22624', name: 'Entrepreneurship Development', credits: 4 },
            { code: '22625', name: 'Project Work', credits: 8 },
            { code: '22626', name: 'Industrial Training', credits: 4 }
        ]
    },
    civil: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22331', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22332', name: 'Applied Mechanics', credits: 4 },
            { code: '22333', name: 'Strength of Materials', credits: 4 },
            { code: '22334', name: 'Building Construction', credits: 4 },
            { code: '22335', name: 'Surveying', credits: 4 },
            { code: '22336', name: 'Building Drawing', credits: 4 }
        ],
        sem4: [
            { code: '22431', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22432', name: 'Theory of Structures', credits: 4 },
            { code: '22433', name: 'Concrete Technology', credits: 4 },
            { code: '22434', name: 'Fluid Mechanics', credits: 4 },
            { code: '22435', name: 'Highway Engineering', credits: 4 },
            { code: '22436', name: 'Structural Drawing', credits: 4 }
        ],
        sem5: [
            { code: '22531', name: 'Design of Concrete Structures', credits: 4 },
            { code: '22532', name: 'Water Supply Engineering', credits: 4 },
            { code: '22533', name: 'Geotechnical Engineering', credits: 4 },
            { code: '22534', name: 'Construction Management', credits: 4 },
            { code: '22535', name: 'Quantity Surveying', credits: 4 },
            { code: '22536', name: 'Computer Applications in Civil Engineering', credits: 4 }
        ],
        sem6: [
            { code: '22631', name: 'Environmental Engineering', credits: 4 },
            { code: '22632', name: 'Irrigation Engineering', credits: 4 },
            { code: '22633', name: 'Earthquake Engineering', credits: 4 },
            { code: '22634', name: 'Entrepreneurship Development', credits: 4 },
            { code: '22635', name: 'Project Work', credits: 8 },
            { code: '22636', name: 'Industrial Training', credits: 4 }
        ]
    },
    electrical: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22341', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22342', name: 'DC Machines & Transformers', credits: 4 },
            { code: '22343', name: 'Electrical Circuits', credits: 4 },
            { code: '22344', name: 'Electrical Installation', credits: 4 },
            { code: '22345', name: 'Electronic Devices & Circuits', credits: 4 },
            { code: '22346', name: 'Electrical Workshop', credits: 4 }
        ],
        sem4: [
            { code: '22441', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22442', name: 'AC Machines', credits: 4 },
            { code: '22443', name: 'Electrical Power Generation', credits: 4 },
            { code: '22444', name: 'Electrical Measurements', credits: 4 },
            { code: '22445', name: 'Power Electronics', credits: 4 },
            { code: '22446', name: 'Microprocessor', credits: 4 }
        ],
        sem5: [
            { code: '22541', name: 'Power System', credits: 4 },
            { code: '22542', name: 'Control Systems', credits: 4 },
            { code: '22543', name: 'Electrical Drives', credits: 4 },
            { code: '22544', name: 'Switch Gear & Protection', credits: 4 },
            { code: '22545', name: 'Industrial Electronics', credits: 4 },
            { code: '22546', name: 'Programmable Logic Controller', credits: 4 }
        ],
        sem6: [
            { code: '22641', name: 'Renewable Energy Systems', credits: 4 },
            { code: '22642', name: 'Energy Management & Audit', credits: 4 },
            { code: '22643', name: 'Industrial Automation', credits: 4 },
            { code: '22644', name: 'Entrepreneurship Development', credits: 4 },
            { code: '22645', name: 'Project Work', credits: 8 },
            { code: '22646', name: 'Industrial Training', credits: 4 }
        ]
    },
    etc: {
        sem1: [
            { code: '22101', name: 'Applied Mathematics', credits: 4 },
            { code: '22102', name: 'Applied Physics', credits: 4 },
            { code: '22103', name: 'Applied Chemistry', credits: 4 },
            { code: '22104', name: 'Engineering Drawing', credits: 4 },
            { code: '22105', name: 'English Communication', credits: 3 },
            { code: '22106', name: 'Basic Workshop Practice', credits: 2 }
        ],
        sem2: [
            { code: '22201', name: 'Applied Mathematics-II', credits: 4 },
            { code: '22202', name: 'Applied Physics-II', credits: 4 },
            { code: '22203', name: 'Applied Chemistry-II', credits: 4 },
            { code: '22204', name: 'Engineering Drawing-II', credits: 4 },
            { code: '22205', name: 'Communication Skills', credits: 3 },
            { code: '22206', name: 'Basic Electronics', credits: 4 }
        ],
        sem3: [
            { code: '22351', name: 'Applied Mathematics-III', credits: 4 },
            { code: '22352', name: 'Electronic Devices & Circuits', credits: 4 },
            { code: '22353', name: 'Digital Electronics', credits: 4 },
            { code: '22354', name: 'Network Analysis & Synthesis', credits: 4 },
            { code: '22355', name: 'Electronic Instruments', credits: 4 },
            { code: '22356', name: 'Programming in C', credits: 4 }
        ],
        sem4: [
            { code: '22451', name: 'Applied Mathematics-IV', credits: 4 },
            { code: '22452', name: 'Linear Integrated Circuits', credits: 4 },
            { code: '22453', name: 'Communication Systems', credits: 4 },
            { code: '22454', name: 'Microprocessor & Interfacing', credits: 4 },
            { code: '22455', name: 'Control Systems', credits: 4 },
            { code: '22456', name: 'Data Structure using C', credits: 4 }
        ],
        sem5: [
            { code: '22551', name: 'Microcontroller & Applications', credits: 4 },
            { code: '22552', name: 'Digital Signal Processing', credits: 4 },
            { code: '22553', name: 'Television Engineering', credits: 4 },
            { code: '22554', name: 'Computer Networks', credits: 4 },
            { code: '22555', name: 'Embedded Systems', credits: 4 },
            { code: '22556', name: 'VLSI Design', credits: 4 }
        ],
        sem6: [
            { code: '22651', name: 'Mobile Communication', credits: 4 },
            { code: '22652', name: 'Optical Communication', credits: 4 },
            { code: '22653', name: 'Satellite Communication', credits: 4 },
            { code: '22654', name: 'Entrepreneurship Development', credits: 4 },
            { code: '22655', name: 'Project Work', credits: 8 },
            { code: '22656', name: 'Industrial Training', credits: 4 }
        ]
    }
};

// Initialize the syllabus page
function initializeSyllabusPage() {
    renderBranches();
    setupEventListeners();
}

// Render branches
function renderBranches() {
    const container = document.getElementById('branches-container');
    container.innerHTML = branches.map(branch => `
        <div class="branch-card bg-white rounded-xl p-6 border-2 border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer" data-branch="${branch.id}">
            <div class="flex items-center space-x-4">
                <div class="branch-icon w-12 h-12 bg-gradient-to-br ${branch.color} rounded-lg flex items-center justify-center text-white">
                    <i data-lucide="${branch.icon}" class="w-6 h-6"></i>
                </div>
                <div>
                    <h3 class="branch-name font-semibold text-gray-900 text-lg">${branch.name}</h3>
                    <p class="text-sm text-gray-600">View curriculum</p>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Render semesters
function renderSemesters() {
    const container = document.getElementById('semesters-container');
    container.innerHTML = semesters.map(semester => `
        <button class="semester-btn bg-white rounded-lg p-4 border-2 border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer" data-semester="${semester.id}">
            <div class="text-center">
                <div class="font-semibold text-gray-900">${semester.name}</div>
            </div>
        </button>
    `).join('');
}

// Render syllabus
function renderSyllabus() {
    const branchData = branches.find(b => b.id === selectedBranch);
    const semesterData = semesters.find(s => s.id === selectedSemester);
    const subjects = syllabusData[selectedBranch]?.[selectedSemester] || [];

    // Update title
    const titleElement = document.getElementById('syllabus-title');
    titleElement.textContent = `${branchData.name} - ${semesterData.name} Syllabus`;

    // Render subjects table
    const tableBody = document.getElementById('subjects-table-body');
    tableBody.innerHTML = subjects.map((subject, index) => `
        <tr class="subject-row border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
            <td class="py-4 px-2 font-mono text-sm text-gray-700">${subject.code}</td>
            <td class="py-4 px-2 font-medium text-gray-900">${subject.name}</td>
            <td class="py-4 px-2 text-center text-gray-700">${subject.credits}</td>
            <td class="py-4 px-2 text-center">
                <div class="flex items-center justify-center space-x-2">
                    <button class="action-btn download-btn px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                        <i data-lucide="download" class="w-4 h-4"></i>
                        <span class="hidden sm:inline">Download</span>
                    </button>
                    <button class="action-btn topics-btn px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                        <i data-lucide="star" class="w-4 h-4"></i>
                        <span class="hidden sm:inline">Topics</span>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    // Show syllabus display section
    const syllabusDisplay = document.getElementById('syllabus-display');
    syllabusDisplay.style.display = 'block';
    syllabusDisplay.classList.add('syllabus-fade-in');
    
    // Scroll to syllabus section
    syllabusDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Recreate icons for new elements
    lucide.createIcons();
}

// Setup event listeners
function setupEventListeners() {
    // Branch selection
    document.addEventListener('click', function(e) {
        const branchCard = e.target.closest('.branch-card');
        if (branchCard) {
            const branchId = branchCard.dataset.branch;
            
            // Remove previous selection
            document.querySelectorAll('.branch-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selection to clicked branch
            branchCard.classList.add('selected');
            selectedBranch = branchId;
            
            // Show semester section
            const semesterSection = document.getElementById('semester-section');
            semesterSection.style.display = 'block';
            renderSemesters();
            
            // Hide view syllabus button and syllabus display
            document.getElementById('view-syllabus-section').style.display = 'none';
            document.getElementById('syllabus-display').style.display = 'none';
            selectedSemester = null;
            
            // Update step indicator
            const stepIndicator = semesterSection.querySelector('.step-indicator');
            if (stepIndicator) {
                stepIndicator.classList.add('completed');
            }
        }
        
        // Semester selection
        const semesterBtn = e.target.closest('.semester-btn');
        if (semesterBtn) {
            const semesterId = semesterBtn.dataset.semester;
            
            // Remove previous selection
            document.querySelectorAll('.semester-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selection to clicked semester
            semesterBtn.classList.add('selected');
            selectedSemester = semesterId;
            
            // Show view syllabus button
            const viewSyllabusSection = document.getElementById('view-syllabus-section');
            viewSyllabusSection.style.display = 'block';
        }
        
        // View syllabus button
        if (e.target.closest('#view-syllabus-btn')) {
            if (selectedBranch && selectedSemester) {
                renderSyllabus();
            }
        }
        
        // Download syllabus button
        if (e.target.closest('.download-btn')) {
            const row = e.target.closest('.subject-row');
            const subjectName = row.querySelector('td:nth-child(2)').textContent;
            alert(`Downloading syllabus for: ${subjectName}\n\nThis would typically trigger a PDF download.`);
        }
        
        // View topics button
        if (e.target.closest('.topics-btn')) {
            const row = e.target.closest('.subject-row');
            const subjectName = row.querySelector('td:nth-child(2)').textContent;
            alert(`Viewing important topics for: ${subjectName}\n\nThis would typically open a modal or navigate to a topics page.`);
        }
        
        // Download complete syllabus button
        if (e.target.textContent && e.target.textContent.includes('Download Complete Syllabus')) {
            const branchData = branches.find(b => b.id === selectedBranch);
            const semesterData = semesters.find(s => s.id === selectedSemester);
            alert(`Downloading complete syllabus for:\n${branchData.name} - ${semesterData.name}\n\nThis would typically download a comprehensive PDF with all subjects.`);
        }
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('branch-card') || e.target.classList.contains('semester-btn')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Add focus management for accessibility
document.addEventListener('focusin', function(e) {
    if (e.target.classList.contains('branch-card') || e.target.classList.contains('semester-btn')) {
        e.target.style.outline = '2px solid #2563eb';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    if (e.target.classList.contains('branch-card') || e.target.classList.contains('semester-btn')) {
        e.target.style.outline = 'none';
    }
});