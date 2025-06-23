// Data Structure
const assignmentsData = {
    branches: [
        {
            id: 'computer',
            name: 'Computer Engineering',
            icon: 'monitor',
            color: 'bg-blue-50 hover:bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            id: 'mechanical',
            name: 'Mechanical Engineering',
            icon: 'settings',
            color: 'bg-green-50 hover:bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            id: 'electrical',
            name: 'Electrical Engineering',
            icon: 'zap',
            color: 'bg-yellow-50 hover:bg-yellow-100',
            iconColor: 'text-yellow-600'
        },
        {
            id: 'civil',
            name: 'Civil Engineering',
            icon: 'building',
            color: 'bg-orange-50 hover:bg-orange-100',
            iconColor: 'text-orange-600'
        },
        {
            id: 'electronics',
            name: 'Electronics Engineering',
            icon: 'cpu',
            color: 'bg-purple-50 hover:bg-purple-100',
            iconColor: 'text-purple-600'
        },
        {
            id: 'automobile',
            name: 'Automobile Engineering',
            icon: 'car',
            color: 'bg-red-50 hover:bg-red-100',
            iconColor: 'text-red-600'
        }
    ],
    
    semesters: [
        {
            id: 'sem1',
            number: 1,
            name: 'First Semester',
            description: 'Foundation assignments covering basic engineering concepts'
        },
        {
            id: 'sem2',
            number: 2,
            name: 'Second Semester',
            description: 'Core engineering assignments with practical applications'
        },
        {
            id: 'sem3',
            number: 3,
            name: 'Third Semester',
            description: 'Specialized branch assignments and problem-solving'
        },
        {
            id: 'sem4',
            number: 4,
            name: 'Fourth Semester',
            description: 'Advanced assignments with industry-relevant problems'
        },
        {
            id: 'sem5',
            number: 5,
            name: 'Fifth Semester',
            description: 'Complex assignments focusing on real-world applications'
        },
        {
            id: 'sem6',
            number: 6,
            name: 'Sixth Semester',
            description: 'Final semester assignments and comprehensive problems'
        }
    ],
    
    assignments: [
        // Computer Engineering - Semester 1
        {
            id: 'comp-sem1-1',
            name: 'Programming Fundamentals',
            subject: 'Programming in C',
            description: 'Basic programming exercises covering variables, data types, control structures, and functions.',
            priority: 'High',
            totalQuestions: 15,
            estimatedTime: '3-4 hours',
            topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Arrays'],
            assignmentUrl: '/assignments/computer/sem1/programming-fundamentals.pdf',
            solutionUrl: '/assignments/computer/sem1/programming-fundamentals-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-2',
            name: 'Engineering Mathematics I',
            subject: 'Mathematics',
            description: 'Mathematical problems covering calculus, algebra, and differential equations.',
            priority: 'High',
            totalQuestions: 20,
            estimatedTime: '4-5 hours',
            topics: ['Calculus', 'Linear Algebra', 'Differential Equations', 'Matrices'],
            assignmentUrl: '/assignments/computer/sem1/engineering-mathematics-1.pdf',
            solutionUrl: '/assignments/computer/sem1/engineering-mathematics-1-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-3',
            name: 'Digital Logic Design',
            subject: 'Digital Electronics',
            description: 'Logic gate problems, Boolean algebra, and combinational circuit design.',
            priority: 'Medium',
            totalQuestions: 12,
            estimatedTime: '2-3 hours',
            topics: ['Logic Gates', 'Boolean Algebra', 'Combinational Circuits', 'Truth Tables'],
            assignmentUrl: '/assignments/computer/sem1/digital-logic-design.pdf',
            solutionUrl: '/assignments/computer/sem1/digital-logic-design-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-4',
            name: 'Engineering Graphics',
            subject: 'Technical Drawing',
            description: 'Drawing exercises including orthographic projections and 3D modeling.',
            priority: 'Medium',
            totalQuestions: 8,
            estimatedTime: '3-4 hours',
            topics: ['Orthographic Projections', '3D Modeling', 'Sectional Views', 'Dimensioning'],
            assignmentUrl: '/assignments/computer/sem1/engineering-graphics.pdf',
            solutionUrl: '/assignments/computer/sem1/engineering-graphics-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        
        // Computer Engineering - Semester 2
        {
            id: 'comp-sem2-1',
            name: 'Data Structures & Algorithms',
            subject: 'Data Structures',
            description: 'Implementation and analysis of various data structures and algorithms.',
            priority: 'High',
            totalQuestions: 18,
            estimatedTime: '4-5 hours',
            topics: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees', 'Sorting Algorithms'],
            assignmentUrl: '/assignments/computer/sem2/data-structures-algorithms.pdf',
            solutionUrl: '/assignments/computer/sem2/data-structures-algorithms-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-2',
            name: 'Object-Oriented Programming',
            subject: 'OOP Concepts',
            description: 'Programming assignments covering classes, objects, inheritance, and polymorphism.',
            priority: 'High',
            totalQuestions: 16,
            estimatedTime: '4-5 hours',
            topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
            assignmentUrl: '/assignments/computer/sem2/object-oriented-programming.pdf',
            solutionUrl: '/assignments/computer/sem2/object-oriented-programming-solutions.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        
        // Mechanical Engineering - Semester 1
        {
            id: 'mech-sem1-1',
            name: 'Engineering Mechanics',
            subject: 'Mechanics',
            description: 'Problems on statics, dynamics, and force analysis of mechanical systems.',
            priority: 'High',
            totalQuestions: 22,
            estimatedTime: '4-5 hours',
            topics: ['Statics', 'Dynamics', 'Force Analysis', 'Equilibrium'],
            assignmentUrl: '/assignments/mechanical/sem1/engineering-mechanics.pdf',
            solutionUrl: '/assignments/mechanical/sem1/engineering-mechanics-solutions.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-2',
            name: 'Strength of Materials',
            subject: 'Material Science',
            description: 'Analysis of stress, strain, and material properties under various loading conditions.',
            priority: 'High',
            totalQuestions: 18,
            estimatedTime: '3-4 hours',
            topics: ['Stress & Strain', 'Bending Moments', 'Torsion', 'Material Properties'],
            assignmentUrl: '/assignments/mechanical/sem1/strength-of-materials.pdf',
            solutionUrl: '/assignments/mechanical/sem1/strength-of-materials-solutions.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-3',
            name: 'Thermodynamics',
            subject: 'Thermal Engineering',
            description: 'Problems on heat transfer, thermodynamic cycles, and energy conversion.',
            priority: 'Medium',
            totalQuestions: 15,
            estimatedTime: '3-4 hours',
            topics: ['Heat Transfer', 'Thermodynamic Cycles', 'Energy Conversion', 'Entropy'],
            assignmentUrl: '/assignments/mechanical/sem1/thermodynamics.pdf',
            solutionUrl: '/assignments/mechanical/sem1/thermodynamics-solutions.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        
        // Electrical Engineering - Semester 1
        {
            id: 'elec-sem1-1',
            name: 'Circuit Analysis',
            subject: 'Electrical Circuits',
            description: 'DC and AC circuit analysis using various network theorems and methods.',
            priority: 'High',
            totalQuestions: 20,
            estimatedTime: '4-5 hours',
            topics: ['Ohms Law', 'Kirchhoffs Laws', 'Network Theorems', 'AC Analysis'],
            assignmentUrl: '/assignments/electrical/sem1/circuit-analysis.pdf',
            solutionUrl: '/assignments/electrical/sem1/circuit-analysis-solutions.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-2',
            name: 'Electrical Machines',
            subject: 'Machines',
            description: 'Problems on DC machines, transformers, and AC machines operation.',
            priority: 'High',
            totalQuestions: 16,
            estimatedTime: '3-4 hours',
            topics: ['DC Machines', 'Transformers', 'AC Machines', 'Motor Control'],
            assignmentUrl: '/assignments/electrical/sem1/electrical-machines.pdf',
            solutionUrl: '/assignments/electrical/sem1/electrical-machines-solutions.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-3',
            name: 'Power Electronics',
            subject: 'Electronics',
            description: 'Analysis of power electronic devices and converter circuits.',
            priority: 'Medium',
            totalQuestions: 14,
            estimatedTime: '3 hours',
            topics: ['Power Diodes', 'Thyristors', 'Converters', 'Inverters'],
            assignmentUrl: '/assignments/electrical/sem1/power-electronics.pdf',
            solutionUrl: '/assignments/electrical/sem1/power-electronics-solutions.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        
        // Civil Engineering - Semester 1
        {
            id: 'civil-sem1-1',
            name: 'Structural Analysis',
            subject: 'Structures',
            description: 'Analysis of beams, trusses, and frames under various loading conditions.',
            priority: 'High',
            totalQuestions: 18,
            estimatedTime: '4-5 hours',
            topics: ['Beam Analysis', 'Truss Analysis', 'Frame Analysis', 'Load Calculations'],
            assignmentUrl: '/assignments/civil/sem1/structural-analysis.pdf',
            solutionUrl: '/assignments/civil/sem1/structural-analysis-solutions.pdf',
            branchId: 'civil',
            semesterId: 'sem1'
        },
        {
            id: 'civil-sem1-2',
            name: 'Concrete Technology',
            subject: 'Materials',
            description: 'Mix design, testing, and properties of concrete and construction materials.',
            priority: 'Medium',
            totalQuestions: 12,
            estimatedTime: '2-3 hours',
            topics: ['Mix Design', 'Concrete Testing', 'Material Properties', 'Quality Control'],
            assignmentUrl: '/assignments/civil/sem1/concrete-technology.pdf',
            solutionUrl: '/assignments/civil/sem1/concrete-technology-solutions.pdf',
            branchId: 'civil',
            semesterId: 'sem1'
        },
        
        // Electronics Engineering - Semester 1
        {
            id: 'elec-eng-sem1-1',
            name: 'Analog Electronics',
            subject: 'Electronics',
            description: 'Analysis and design of analog circuits using operational amplifiers.',
            priority: 'High',
            totalQuestions: 16,
            estimatedTime: '3-4 hours',
            topics: ['Op-Amp Circuits', 'Amplifiers', 'Filters', 'Oscillators'],
            assignmentUrl: '/assignments/electronics/sem1/analog-electronics.pdf',
            solutionUrl: '/assignments/electronics/sem1/analog-electronics-solutions.pdf',
            branchId: 'electronics',
            semesterId: 'sem1'
        },
        {
            id: 'elec-eng-sem1-2',
            name: 'Microprocessor Systems',
            subject: 'Microprocessors',
            description: 'Programming and interfacing problems for 8085 and 8086 microprocessors.',
            priority: 'High',
            totalQuestions: 14,
            estimatedTime: '4 hours',
            topics: ['8085 Programming', '8086 Architecture', 'Interfacing', 'Assembly Language'],
            assignmentUrl: '/assignments/electronics/sem1/microprocessor-systems.pdf',
            solutionUrl: '/assignments/electronics/sem1/microprocessor-systems-solutions.pdf',
            branchId: 'electronics',
            semesterId: 'sem1'
        },
        
        // Automobile Engineering - Semester 1
        {
            id: 'auto-sem1-1',
            name: 'Automotive Engines',
            subject: 'Engine Technology',
            description: 'Problems on engine performance, combustion, and emission control systems.',
            priority: 'High',
            totalQuestions: 16,
            estimatedTime: '3-4 hours',
            topics: ['Engine Performance', 'Combustion Analysis', 'Emission Control', 'Fuel Systems'],
            assignmentUrl: '/assignments/automobile/sem1/automotive-engines.pdf',
            solutionUrl: '/assignments/automobile/sem1/automotive-engines-solutions.pdf',
            branchId: 'automobile',
            semesterId: 'sem1'
        },
        {
            id: 'auto-sem1-2',
            name: 'Vehicle Dynamics',
            subject: 'Dynamics',
            description: 'Analysis of vehicle motion, suspension systems, and braking performance.',
            priority: 'Medium',
            totalQuestions: 12,
            estimatedTime: '3 hours',
            topics: ['Vehicle Motion', 'Suspension Systems', 'Braking Systems', 'Steering Geometry'],
            assignmentUrl: '/assignments/automobile/sem1/vehicle-dynamics.pdf',
            solutionUrl: '/assignments/automobile/sem1/vehicle-dynamics-solutions.pdf',
            branchId: 'automobile',
            semesterId: 'sem1'
        }
    ]
};

// Application State
let appState = {
    currentView: 'branches',
    selectedBranch: null,
    selectedSemester: null
};

// DOM Elements
const branchSelectionView = document.getElementById('branch-selection');
const semesterSelectionView = document.getElementById('semester-selection');
const assignmentListingView = document.getElementById('assignment-listing');

const branchesGrid = document.getElementById('branches-grid');
const semestersGrid = document.getElementById('semesters-grid');
const assignmentsGrid = document.getElementById('assignments-grid');
const noAssignmentsMessage = document.getElementById('no-assignments');

// Breadcrumb elements
const breadcrumbBranch = document.getElementById('breadcrumb-branch');
const breadcrumbBranchBtn = document.getElementById('breadcrumb-branch-btn');
const breadcrumbSemester = document.getElementById('breadcrumb-semester');
const breadcrumbSemesterText = document.getElementById('breadcrumb-semester-text');
const breadcrumbAssignments = document.getElementById('breadcrumb-assignments');

// Text elements
const selectedBranchName = document.getElementById('selected-branch-name');
const selectedBranchNameAssignments = document.getElementById('selected-branch-name-assignments');
const selectedSemesterName = document.getElementById('selected-semester-name');
const selectedSemesterNumber = document.getElementById('selected-semester-number');

// Utility Functions
function hideAllViews() {
    branchSelectionView.classList.add('hidden');
    semesterSelectionView.classList.add('hidden');
    assignmentListingView.classList.add('hidden');
}

function showView(viewName) {
    hideAllViews();
    
    switch(viewName) {
        case 'branches':
            branchSelectionView.classList.remove('hidden');
            branchSelectionView.classList.add('fade-in');
            break;
        case 'semesters':
            semesterSelectionView.classList.remove('hidden');
            semesterSelectionView.classList.add('fade-in');
            break;
        case 'assignments':
            assignmentListingView.classList.remove('hidden');
            assignmentListingView.classList.add('fade-in');
            break;
    }
}

function updateBreadcrumb() {
    // Reset breadcrumb
    breadcrumbBranch.classList.add('hidden');
    breadcrumbSemester.classList.add('hidden');
    
    // Update based on current state
    if (appState.selectedBranch) {
        breadcrumbBranch.classList.remove('hidden');
        breadcrumbBranchBtn.textContent = appState.selectedBranch.name;
        
        if (appState.currentView === 'semesters') {
            breadcrumbBranchBtn.classList.add('text-blue-600', 'font-medium');
        } else {
            breadcrumbBranchBtn.classList.remove('text-blue-600', 'font-medium');
        }
    }
    
    if (appState.selectedSemester) {
        breadcrumbSemester.classList.remove('hidden');
        breadcrumbSemesterText.textContent = appState.selectedSemester.name;
    }
}

// Render Functions
function renderBranches() {
    branchesGrid.innerHTML = '';
    
    assignmentsData.branches.forEach(branch => {
        const branchCard = document.createElement('div');
        branchCard.className = `branch-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${branch.color} border border-gray-100 cursor-pointer group`;
        branchCard.setAttribute('data-branch-id', branch.id);
        
        branchCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="${branch.icon}" class="w-8 h-8 ${branch.iconColor}"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    ${branch.name}
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                    Subject-wise assignments and practice problems
                </p>
                <button class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Select Branch
                    <i data-lucide="chevron-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        
        branchCard.addEventListener('click', () => handleBranchSelect(branch));
        branchesGrid.appendChild(branchCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

function renderSemesters() {
    semestersGrid.innerHTML = '';
    
    assignmentsData.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group';
        semesterCard.setAttribute('data-semester-id', semester.id);
        
        semesterCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="clipboard-list" class="w-8 h-8 text-blue-600"></i>
                </div>
                <div class="mb-4">
                    <div class="text-2xl font-bold text-blue-600 mb-1">
                        Semester ${semester.number}
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                        ${semester.name}
                    </h3>
                </div>
                <p class="text-gray-600 text-sm mb-6">
                    ${semester.description}
                </p>
                <button class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    View Assignments
                    <i data-lucide="chevron-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        
        semesterCard.addEventListener('click', () => handleSemesterSelect(semester));
        semestersGrid.appendChild(semesterCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

function renderAssignments() {
    const assignments = getAssignmentsByBranchAndSemester(appState.selectedBranch.id, appState.selectedSemester.id);
    
    assignmentsGrid.innerHTML = '';
    
    if (assignments.length === 0) {
        noAssignmentsMessage.classList.remove('hidden');
        return;
    }
    
    noAssignmentsMessage.classList.add('hidden');
    
    assignments.forEach(assignment => {
        const assignmentCard = document.createElement('div');
        assignmentCard.className = 'assignment-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100';
        
        const priorityClass = assignment.priority.toLowerCase() === 'high' ? 'priority-high' : 
                             assignment.priority.toLowerCase() === 'medium' ? 'priority-medium' : 'priority-low';
        
        assignmentCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                                <i data-lucide="clipboard-check" class="w-5 h-5 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    ${assignment.name}
                                </h3>
                                <p class="text-sm text-gray-500">
                                    ${assignment.subject} • ${assignment.totalQuestions} Questions
                                </p>
                            </div>
                        </div>
                    </div>
                    <span class="px-2 py-1 text-xs rounded-md font-medium ${priorityClass}">
                        ${assignment.priority} Priority
                    </span>
                </div>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                    ${assignment.description}
                </p>
                <div class="mb-4">
                    <div class="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span><i data-lucide="clock" class="w-4 h-4 inline mr-1"></i>Estimated Time: ${assignment.estimatedTime}</span>
                        <span><i data-lucide="hash" class="w-4 h-4 inline mr-1"></i>${assignment.totalQuestions} Questions</span>
                    </div>
                </div>
                <div class="mb-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Topics Covered:</p>
                    <div class="flex flex-wrap gap-2">
                        ${assignment.topics.map(topic => `
                            <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                                ${topic}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn-primary flex-1" onclick="handleAssignmentDownload('${assignment.assignmentUrl}')">
                        <i data-lucide="download" class="w-4 h-4 mr-2"></i>
                        Download Assignment
                    </button>
                    <button class="btn-secondary flex-1" onclick="handleSolutionDownload('${assignment.solutionUrl}')">
                        <i data-lucide="key" class="w-4 h-4 mr-2"></i>
                        Get Solutions
                    </button>
                </div>
            </div>
        `;
        
        assignmentsGrid.appendChild(assignmentCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

// Event Handlers
function handleBranchSelect(branch) {
    appState.selectedBranch = branch;
    appState.currentView = 'semesters';
    
    selectedBranchName.textContent = branch.name;
    
    showView('semesters');
    updateBreadcrumb();
    renderSemesters();
}

function handleSemesterSelect(semester) {
    appState.selectedSemester = semester;
    appState.currentView = 'assignments';
    
    selectedSemesterName.textContent = semester.name;
    selectedSemesterNumber.textContent = semester.number;
    selectedBranchNameAssignments.textContent = appState.selectedBranch.name;
    
    showView('assignments');
    updateBreadcrumb();
    renderAssignments();
}

function handleNavigateToBranches() {
    appState.currentView = 'branches';
    appState.selectedBranch = null;
    appState.selectedSemester = null;
    
    showView('branches');
    updateBreadcrumb();
}

function handleNavigateToSemesters() {
    if (appState.selectedBranch) {
        appState.currentView = 'semesters';
        appState.selectedSemester = null;
        
        showView('semesters');
        updateBreadcrumb();
        renderSemesters();
    }
}

function handleAssignmentDownload(url) {
    // In a real application, this would handle the actual download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

function handleSolutionDownload(url) {
    // In a real application, this would handle the solution download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

// Utility function to get assignments by branch and semester
function getAssignmentsByBranchAndSemester(branchId, semesterId) {
    return assignmentsData.assignments.filter(assignment => 
        assignment.branchId === branchId && assignment.semesterId === semesterId
    );
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    renderBranches();
    
    // Breadcrumb navigation
    breadcrumbAssignments.addEventListener('click', handleNavigateToBranches);
    breadcrumbBranchBtn.addEventListener('click', handleNavigateToSemesters);
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Global functions for inline event handlers
window.handleAssignmentDownload = handleAssignmentDownload;
window.handleSolutionDownload = handleSolutionDownload;