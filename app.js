// SKILL Assembler - Restructured for external SKILL files
// All processing happens client-side for privacy

// Configuration
const SKILLS_DIR = 'skills/';
const MANIFEST_FILE = 'skills/skills-manifest.json';

// State
let manifest = null;
let selectedSkills = new Set();
let skillContent = {}; // Cache for loaded SKILL files

// DOM elements
const regionSelect = document.getElementById('region-select');
const skillList = document.getElementById('skill-list');
const personalisationSection = document.getElementById('personalisation-section');
const personalisationForm = document.getElementById('personalisation-form');
const downloadBtn = document.getElementById('download-btn');
const messageArea = document.getElementById('message-area');

// Initialise on page load
document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        await loadManifest();
        renderSkillList();
        setupEventListeners();
    } catch (error) {
        showError('Failed to load SKILL manifest: ' + error.message);
    }
}

// Load the manifest file
async function loadManifest() {
    const response = await fetch(MANIFEST_FILE);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    manifest = await response.json();
}

// Render the SKILL selection checkboxes
function renderSkillList() {
    skillList.innerHTML = '';
    
    manifest.skills.forEach(skill => {
        const label = document.createElement('label');
        label.className = 'skill-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = skill.id;
        checkbox.addEventListener('change', handleSkillSelection);
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'skill-title';
        titleSpan.textContent = skill.title;
        
        const descSpan = document.createElement('span');
        descSpan.className = 'skill-description';
        descSpan.textContent = skill.description;
        
        label.appendChild(checkbox);
        label.appendChild(titleSpan);
        label.appendChild(descSpan);
        
        skillList.appendChild(label);
    });
}

// Handle SKILL selection changes
function handleSkillSelection(event) {
    const skillId = event.target.value;
    
    if (event.target.checked) {
        selectedSkills.add(skillId);
    } else {
        selectedSkills.delete(skillId);
    }
    
    updatePersonalisationForm();
    updateDownloadButton();
}

// Update the personalisation form based on selected SKILLs
function updatePersonalisationForm() {
    if (selectedSkills.size === 0) {
        personalisationSection.style.display = 'none';
        personalisationForm.innerHTML = '';
        return;
    }
    
    personalisationSection.style.display = 'block';
    
    // Collect all unique fields from selected SKILLs
    const allFields = new Map();
    
    selectedSkills.forEach(skillId => {
        const skill = manifest.skills.find(s => s.id === skillId);
        if (skill && skill.fields) {
            skill.fields.forEach(field => {
                // Use field name as key to avoid duplicates
                if (!allFields.has(field.name)) {
                    allFields.set(field.name, field);
                }
            });
        }
    });
    
    // Build form
    personalisationForm.innerHTML = '';
    
    allFields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = field.label + ':';
        
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 3;
        } else {
            input = document.createElement('input');
            input.type = field.type || 'text';
        }
        
        input.id = field.name;
        input.name = field.name;
        input.placeholder = field.placeholder || '';
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        personalisationForm.appendChild(formGroup);
    });
}

// Update download button state
function updateDownloadButton() {
    downloadBtn.disabled = selectedSkills.size === 0;
}

// Setup event listeners
function setupEventListeners() {
    downloadBtn.addEventListener('click', handleDownload);
}

// Handle download button click
async function handleDownload() {
    try {
        showMessage('Building your SKILL package...', 'info');
        downloadBtn.disabled = true;
        
        // Load selected SKILL files
        await loadSelectedSkills();
        
        // Get personalisation data
        const formData = getFormData();
        const selectedRegion = regionSelect.value;
        
        // Process SKILLs
        const processedSkills = processSkills(formData, selectedRegion);
        
        // Create ZIP
        const zip = new JSZip();
        
        processedSkills.forEach(skill => {
            zip.file(skill.filename, skill.content);
        });
        
        // Add LICENSE
        zip.file('LICENSE.txt', generateLicense());
        
        // Generate and download
        const blob = await zip.generateAsync({ type: 'blob' });
        downloadBlob(blob, 'claude-skills.zip');
        
        showMessage('✓ SKILL package downloaded successfully!', 'success');
        
    } catch (error) {
        showError('Download failed: ' + error.message);
    } finally {
        downloadBtn.disabled = false;
    }
}

// Load selected SKILL files from server
async function loadSelectedSkills() {
    const loadPromises = Array.from(selectedSkills).map(async skillId => {
        // Skip if already cached
        if (skillContent[skillId]) {
            return;
        }
        
        const skill = manifest.skills.find(s => s.id === skillId);
        if (!skill) {
            throw new Error(`SKILL not found: ${skillId}`);
        }
        
        const response = await fetch(SKILLS_DIR + skill.file);
        if (!response.ok) {
            throw new Error(`Failed to load ${skill.file}: HTTP ${response.status}`);
        }
        
        skillContent[skillId] = await response.text();
    });
    
    await Promise.all(loadPromises);
}

// Get form data as object
function getFormData() {
    const data = {};
    const inputs = personalisationForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        const value = input.value.trim();
        if (value) {
            data[input.name] = value;
        }
    });
    
    return data;
}

// Process SKILLs with personalisation and regional filtering
function processSkills(formData, region) {
    const processed = [];
    
    selectedSkills.forEach(skillId => {
        const skill = manifest.skills.find(s => s.id === skillId);
        let content = skillContent[skillId];
        
        // Replace placeholders
        content = replacePlaceholders(content, formData);
        
        // Filter regional content
        content = filterRegionalContent(content, region);
        
        // Clean up empty placeholders
        content = cleanUnusedPlaceholders(content);
        
        processed.push({
            filename: skill.file,
            content: content
        });
    });
    
    return processed;
}

// Replace {{PLACEHOLDER}} with form values
function replacePlaceholders(content, formData) {
    let result = content;
    
    Object.keys(formData).forEach(key => {
        const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        result = result.replace(placeholder, formData[key]);
    });
    
    return result;
}

// Filter regional content blocks
function filterRegionalContent(content, selectedRegion) {
    // Remove all regional blocks except the selected one
    const regionPattern = /<!-- REGION:(\w+) -->([\s\S]*?)<!-- END:REGION -->/g;
    
    let result = content;
    let match;
    
    // First, collect all regional blocks
    const blocks = [];
    while ((match = regionPattern.exec(content)) !== null) {
        blocks.push({
            fullMatch: match[0],
            region: match[1],
            content: match[2]
        });
    }
    
    // Replace each block
    blocks.forEach(block => {
        if (block.region === selectedRegion) {
            // Keep content, remove markers
            result = result.replace(block.fullMatch, block.content.trim());
        } else {
            // Remove entire block
            result = result.replace(block.fullMatch, '');
        }
    });
    
    return result;
}

// Remove unused placeholders and clean up formatting
function cleanUnusedPlaceholders(content) {
    // Remove lines that contain only unfilled placeholders
    let lines = content.split('\n');
    lines = lines.filter(line => {
        const trimmed = line.trim();
        // Keep line if it doesn't match placeholder-only pattern
        return !(/^[-*]\s*[A-Z_]+:\s*\{\{[A-Z_]+\}\}\s*$/.test(trimmed) ||
                /^[A-Z_]+:\s*\{\{[A-Z_]+\}\}\s*$/.test(trimmed));
    });
    
    let result = lines.join('\n');
    
    // Remove any remaining standalone placeholders
    result = result.replace(/\{\{[A-Z_]+\}\}/g, '');
    
    // Clean up excessive blank lines (more than 2 consecutive)
    result = result.replace(/\n{3,}/g, '\n\n');
    
    return result.trim();
}

// Generate license file
function generateLicense() {
    return `MIT License

Copyright (c) ${new Date().getFullYear()} SKILL Assembler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
}

// Download blob as file
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Show message to user
function showMessage(message, type = 'info') {
    messageArea.innerHTML = `<div class="message message-${type}">${message}</div>`;
    messageArea.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            messageArea.style.display = 'none';
        }, 5000);
    }
}

// Show error message
function showError(message) {
    showMessage('✗ ' + message, 'error');
}
