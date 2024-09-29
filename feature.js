// Toggle sidebar visibility
function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var chatContainer = document.getElementById('chatContainer');
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '260px';
        chatContainer.style.marginLeft = '260px';
    } else {
        sidebar.style.width = "0";
        chatContainer.style.marginLeft = '0';
    }
}


const answerFiles = ['profilesummary1.html', 'profilesummary2.html', 'profilesummary3.html'];


const randomIndex = Math.floor(Math.random() * answerFiles.length);

fetch(answerFiles[randomIndex])
    .then(response => response.text())
    .then(data => {
        document.getElementById('answerbox').innerHTML = data;
    })
    .catch(error => console.log('Error loading answer:', error));





//The code down below is not properly checked. Need to be modified as required.
// Load content into the main section
function loadContent(content) {
    const mainContent = document.getElementById('main-content');
    
    switch(content) {
        case 'profile':
            mainContent.innerHTML = '<h2>Profile Content Loaded</h2>';
            break;
        case 'projects':
            mainContent.innerHTML = '<h2>Finished Projects Content Loaded</h2>';
            break;
        case 'contact':
            mainContent.innerHTML = '<h2>Contact Form Loaded</h2>';
            break;
        default:
            mainContent.innerHTML = '<h2>Welcome</h2>';
    }
}
