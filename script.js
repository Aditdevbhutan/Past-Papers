// PDF file paths - Update these paths to match your actual PDF files
const pdfLinks = {
    7: {
        'Mathematics': {
            //'2023': 'papers/class7/mathematics_2023.pdf',
            '2024': 'papers/class7/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class7/english_2023.pdf',
            //'2024': 'papers/class7/english_2024.pdf'
        },
        'Science': {
            '2023': 'papers/class7/science_2023.pdf',
            '2024': 'papers/class7/science_2024.pdf'
        },
        'Geography': {
            //'2023': 'papers/class7/social_studies_2023.pdf',
            //'2024': 'papers/class7/social_studies_2024.pdf'
        },
        'ICT': {
            //'2023': 'papers/class7/ICT_2023.pdf',
            '2025': 'papers/class7/ICT_2025.pdf'
        },
        'Dzongkha': {
            'Dzo1': 'papers/class7/dzo1.pdf',
            'Dzo2': 'papers/class7/dzo2.pdf'
        },
        'History': {
            //'2023': 'papers/class7/mathematics_2023.pdf',
            //'2024': 'papers/class7/mathematics_2024.pdf'
        },
    },
    8: {
        'Mathematics': {
            //'2023': 'papers/class8/mathematics_2023.pdf',
            //'2024': 'papers/class8/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class8/english_2023.pdf',
            //'2024': 'papers/class8/english_2024.pdf'
        },
        'Science': {
            //'2023': 'papers/class8/science_2023.pdf',
            //'2024': 'papers/class8/science_2024.pdf'
        },
        'Social Studies': {
            //'2023': 'papers/class8/social_studies_2023.pdf',
            //'2024': 'papers/class8/social_studies_2024.pdf'
        },
        'Hindi': {
            //'2023': 'papers/class8/hindi_2023.pdf',
            //2024': 'papers/class8/hindi_2024.pdf'
        }
    },
    9: {
        'Mathematics': {
            //'2023': 'papers/class9/mathematics_2023.pdf',
            //'2024': 'papers/class9/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class9/english_2023.pdf',
            //'2024': 'papers/class9/english_2024.pdf'
        },
        'Physics': {
            //'2023': 'papers/class9/physics_2023.pdf',
            //'2024': 'papers/class9/physics_2024.pdf'
        },
        'Chemistry': {
            //'2023': 'papers/class9/chemistry_2023.pdf',
            //'2024': 'papers/class9/chemistry_2024.pdf'
        },
        'Biology': {
            //'2023': 'papers/class9/biology_2023.pdf',
            //'2024': 'papers/class9/biology_2024.pdf'
        },
        'Social Studies': {
            //'2023': 'papers/class9/social_studies_2023.pdf',
            //'2024': 'papers/class9/social_studies_2024.pdf'
        },
        'Hindi': {
            //'2023': 'papers/class9/hindi_2023.pdf',
            //'2024': 'papers/class9/hindi_2024.pdf'
        }
    },
    10: {
        'Mathematics': {
            //'2023': 'papers/class10/mathematics_2023.pdf',
            '2024': 'papers/class10/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class10/english_2023.pdf',
            //'2024': 'papers/class10/english_2024.pdf'
        },
        'Physics': {
            //'2023': 'papers/class10/physics_2023.pdf',
            //'2024': 'papers/class10/physics_2024.pdf'
        },
        'Chemistry': {
            //'2023': 'papers/class10/chemistry_2023.pdf',
            //'2024': 'papers/class10/chemistry_2024.pdf'
        },
        'Biology': {
            //'2023': 'papers/class10/biology_2023.pdf',
            //'2024': 'papers/class10/biology_2024.pdf'
        },
        'Social Studies': {
            //'2023': 'papers/class10/social_studies_2023.pdf',
            //'2024': 'papers/class10/social_studies_2024.pdf'
        },
        'Hindi': {
            //'2023': 'papers/class10/hindi_2023.pdf',
            //'2024': 'papers/class10/hindi_2024.pdf'
        }
    },
    11: {
        'Mathematics': {
            //'2023': 'papers/class11/mathematics_2023.pdf',
            //'2024': 'papers/class11/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class11/english_2023.pdf',
            //'2024': 'papers/class11/english_2024.pdf'
        },
        'Physics': {
            //'2023': 'papers/class11/physics_2023.pdf',
            //'2024': 'papers/class11/physics_2024.pdf'
        },
        'Chemistry': {
            //'2023': 'papers/class11/chemistry_2023.pdf',
            //'2024': 'papers/class11/chemistry_2024.pdf'
        },
        'Biology': {
            //'2023': 'papers/class11/biology_2023.pdf',
            //'2024': 'papers/class11/biology_2024.pdf'
        },
        'Computer Science': {
            //'2023': 'papers/class11/computer_science_2023.pdf',
            //'2024': 'papers/class11/computer_science_2024.pdf'
        },
        'Economics': {
            //'2023': 'papers/class11/economics_2023.pdf',
            //'2024': 'papers/class11/economics_2024.pdf'
        },
        'Business Studies': {
            //'2023': 'papers/class11/business_studies_2023.pdf',
            //'2024': 'papers/class11/business_studies_2024.pdf'
        }
    },
    12: {
        'Mathematics': {
            //'2023': 'papers/class12/mathematics_2023.pdf',
            //'2024': 'papers/class12/mathematics_2024.pdf'
        },
        'English': {
            //'2023': 'papers/class12/english_2023.pdf',
            //'2024': 'papers/class12/english_2024.pdf'
        },
        'Physics': {
            //'2023': 'papers/class12/physics_2023.pdf',
            //'2024': 'papers/class12/physics_2024.pdf'
        },
        'Chemistry': {
            //'2023': 'papers/class12/chemistry_2023.pdf',
            //'2024': 'papers/class12/chemistry_2024.pdf'
        },
        'Biology': {
            //'2023': 'papers/class12/biology_2023.pdf',
            //'2024': 'papers/class12/biology_2024.pdf'
        },
        'Computer Science': {
            //'2023': 'papers/class12/computer_science_2023.pdf',
            //'2024': 'papers/class12/computer_science_2024.pdf'
        },
        'Economics': {
            //'2023': 'papers/class12/economics_2023.pdf',
            //'2024': 'papers/class12/economics_2024.pdf'
        },
        'Business Studies': {
            //'2023': 'papers/class12/business_studies_2023.pdf',
            //'2024': 'papers/class12/business_studies_2024.pdf'
        }
    }
};

// Subject data with only 2023 and 2024 papers
const subjects = {
    7: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Science', icon: '🔬', papers: ['2024', '2023'] },
        { name: 'Geography', icon: '🌍', papers: ['2024', '2023'] },
        { name: 'ICT', icon: '', papers: ['2025', '2025'] },
        { name: 'Dzongkha', icon: '', papers: ['Dzo1', 'Dzo2'] },
        { name: 'History', icon: '', papers: ['2024', '2023'] }
    ],
    8: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Science', icon: '🔬', papers: ['2024', '2023'] },
        { name: 'Social Studies', icon: '🌍', papers: ['2024', '2023'] },
        { name: 'Hindi', icon: '🇮🇳', papers: ['2024', '2023'] }
    ],
    9: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Physics', icon: '⚛️', papers: ['2024', '2023'] },
        { name: 'Chemistry', icon: '🧪', papers: ['2024', '2023'] },
        { name: 'Biology', icon: '🧬', papers: ['2024', '2023'] },
        { name: 'Social Studies', icon: '🌍', papers: ['2024', '2023'] },
        { name: 'Hindi', icon: '🇮🇳', papers: ['2024', '2023'] }
    ],
    10: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Physics', icon: '⚛️', papers: ['2024', '2023'] },
        { name: 'Chemistry', icon: '🧪', papers: ['2024', '2023'] },
        { name: 'Biology', icon: '🧬', papers: ['2024', '2023'] },
        { name: 'Social Studies', icon: '🌍', papers: ['2024', '2023'] },
        { name: 'Hindi', icon: '🇮🇳', papers: ['2024', '2023'] }
    ],
    11: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Physics', icon: '⚛️', papers: ['2024', '2023'] },
        { name: 'Chemistry', icon: '🧪', papers: ['2024', '2023'] },
        { name: 'Biology', icon: '🧬', papers: ['2024', '2023'] },
        { name: 'Computer Science', icon: '💻', papers: ['2024', '2023'] },
        { name: 'Economics', icon: '📈', papers: ['2024', '2023'] },
        { name: 'Business Studies', icon: '💼', papers: ['2024', '2023'] }
    ],
    12: [
        { name: 'Mathematics', icon: '🔢', papers: ['2024', '2023'] },
        { name: 'English', icon: '📚', papers: ['2024', '2023'] },
        { name: 'Physics', icon: '⚛️', papers: ['2024', '2023'] },
        { name: 'Chemistry', icon: '🧪', papers: ['2024', '2023'] },
        { name: 'Biology', icon: '🧬', papers: ['2024', '2023'] },
        { name: 'Computer Science', icon: '💻', papers: ['2024', '2023'] },
        { name: 'Economics', icon: '📈', papers: ['2024', '2023'] },
        { name: 'Business Studies', icon: '💼', papers: ['2024', '2023'] }
    ]
};

// Function to show subjects for a specific class
function showSubjects(classNum) {
    const mainContent = document.getElementById('mainContent');
    const subjectPage = document.getElementById('subjectPage');
    const subjectContent = document.getElementById('subjectContent');

    // Hide main content and show subject page
    mainContent.style.display = 'none';
    subjectPage.style.display = 'block';

    // Generate subject cards
    const classSubjects = subjects[classNum];
    let subjectHTML = `<h2 style="color: white; text-align: center; margin-bottom: 30px; font-size: 2rem;">Class ${classNum} - Past Papers</h2>`;
    subjectHTML += '<div class="subject-grid">';

    classSubjects.forEach(subject => {
        subjectHTML += `
            <div class="subject-card">
                <h4>
                    <div class="subject-icon">${subject.icon}</div>
                    ${subject.name}
                </h4>
                <div class="papers-list">
                    ${subject.papers.map(year => {
                        const isAvailable = pdfLinks[classNum]?.[subject.name]?.[year];
                        return `
                            <div class="paper-item">
                                <span class="paper-year">${year} Paper</span>
                                <button class="download-link ${!isAvailable ? 'unavailable' : ''}" 
                                        onclick="downloadPaper('${subject.name}', '${year}', ${classNum})"
                                        ${!isAvailable ? 'disabled' : ''}>
                                    ${isAvailable ? 'Download PDF' : 'Coming Soon'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    subjectHTML += '</div>';
    subjectContent.innerHTML = subjectHTML;

    // Add animation delay to cards
    setTimeout(() => {
        const cards = document.querySelectorAll('.subject-card');
        cards.forEach((card, index) => {
            card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        });
    }, 100);
}

// Function to go back to main page
function goBack() {
    const mainContent = document.getElementById('mainContent');
    const subjectPage = document.getElementById('subjectPage');

    subjectPage.style.display = 'none';
    mainContent.style.display = 'block';
}

// Function to download PDF papers
function downloadPaper(subject, year, classNum) {
    const fileUrl = pdfLinks[classNum]?.[subject]?.[year];
    
    if (fileUrl) {
        // Create download link
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `Class${classNum}_${subject.replace(/\s+/g, '_')}_${year}.pdf`;
        link.target = '_blank'; // Opens in new tab if download fails
        
        // Add link to page, click it, then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success notification
        showNotification(`Downloading ${subject} ${year} paper for Class ${classNum}...`);
    } else {
        // Show error notification
        showNotification(`Sorry, ${subject} ${year} paper is not available yet.`);
    }
}

// Function to show notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add stagger animation to class cards when page loads
window.addEventListener('load', () => {
    const classCards = document.querySelectorAll('.class-card');
    classCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});