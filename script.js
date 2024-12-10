// Function to dynamically add research interest input
function addResearchInterest() {
    const list = document.getElementById('research-interests-list');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a research interest';
    input.className = 'w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none my-2';
    list.appendChild(input);
}

// Function to dynamically add research activity textarea
function addResearchActivity() {
    const list = document.getElementById('research-activities-list');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter a research activity';
    textarea.className = 'w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-2';
    textarea.rows = 2;
    list.appendChild(textarea);
}

// Function to dynamically add a project section
function addProject() {
    const list = document.getElementById('projects-list');
    const container = document.createElement('div');
    container.className = 'bg-gray-100 p-4 rounded-lg shadow-md';
    container.innerHTML = `
        <label class="block text-gray-600 font-medium mb-1">Title</label>
        <input type="text" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Project title">
        <label class="block text-gray-600 font-medium mb-1 mt-2">Image</label>
        <input type="file" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" accept="image/*">
        <label class="block text-gray-600 font-medium mb-1 mt-2">Link to Project/Publication</label>
        <input type="url" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Project link">
        <label class="block text-gray-600 font-medium mb-1 mt-2">GitHub Repo</label>
        <input type="url" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="GitHub link">
    `;
    list.appendChild(container);
}

// Logout function placeholder
function logout() {
    alert('You have logged out successfully!');
    // Add further actions like clearing session or redirecting to a login page.
    window.location.href = '/login.html'; // Redirect to login page
}
