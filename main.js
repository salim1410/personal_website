// Adding event listeners for the buttons
const resumeButton = document.getElementById('resume-button');
resumeButton.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/1uM7LdmCeKuv2FjXCe0XX8iJ3ZFxPaivE9FLIjzO678k/edit?usp=sharing', '_blank');
});

const linkedinButton = document.getElementById('linkedin-button');
linkedinButton.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/salim-shaikh-5310b71a5/', '_blank');
});

const githubButton = document.getElementById('github-button');
githubButton.addEventListener('click', () => {
    window.open('https://github.com/salim1410', '_blank');
});