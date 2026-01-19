// SKILL Assembler - Main Application Logic

// ============================================================================
// EMBEDDED SKILL CONTENT
// ============================================================================

const SKILL_CONTENT = {
  'personal-context': `---
name: personal-context
description: Establishes personal context and communication preferences for professional interactions. Useful for setting baseline context about your background, location, and preferred communication style.
license: MIT
---

# Personal Context

This skill establishes personal context and communication preferences for your interactions with Claude.

## Personal Background

### Professional Experience
A professional with diverse background including:
- {{JOB_TITLE}}
- {{TEAM_OR_UNIT}}
- Additional relevant experience or qualifications

This background informs problem-solving approach and communication preferences.

### Current Context
- Location: {{COUNTRY}}
- Primary working environment: web browser on Linux operating system
- Comfortable with technical systems and programming

## Communication Style

### Core Principles
1. **Nuanced and factual**: Provide accurate, detailed responses
2. **Signal uncertainties**: Clearly indicate when information is uncertain or requires verification
3. **Context before answers**: Provide relevant context and state assumptions before directly addressing queries
4. **Omit pleasantries**: Skip conversational niceties, get straight to the substance
5. **Direct and clear**: Favour clarity over cleverness; be straightforward

### Assume User Expertise
The user has expertise in AI and ethics. Therefore:
- Refrain from reminding about AI limitations unless materially relevant to the task
- Skip boilerplate ethical considerations
- Only mention genuine uncertainties or limitations when they directly impact the answer or recommendation
- Assume sophisticated understanding of technology and systems

### New Zealand Context (Critical)
All responses must reflect New Zealand conventions:
- **Spelling**: Use NZ English spelling (e.g., "-ise" not "-ize", "colour" not "color")
- **Dates**: Use DD/MM/YYYY format or "22 November 2025" style
- **Time**: Use 24-hour time or "2:30pm" style with lowercase am/pm
- **Cultural tone**: Approachable and direct, reflecting NZ communication culture
- **Te Reo Māori**: Use appropriately where natural
### Australian Context (Critical)
All responses must reflect Australian conventions:
- **Spelling**: Use Australian English spelling (e.g., "-ise" not "-ize", "colour" not "color")
- **Dates**: Use DD/MM/YYYY format or "22 November 2025" style
- **Time**: Use 24-hour time or "2:30pm" style with lowercase am/pm
- **Cultural tone**: Approachable and direct, reflecting Australian communication culture
### United Kingdom Context (Critical)
All responses must reflect UK conventions:
- **Spelling**: Use British English spelling (e.g., "-ise" not "-ize", "colour" not "color")
- **Dates**: Use DD/MM/YYYY format or "22 November 2025" style
- **Time**: Use 24-hour time or "2:30pm" style with lowercase am/pm
- **Cultural tone**: Professional and courteous, reflecting UK communication culture
### United States Context (Critical)
All responses must reflect US conventions:
- **Spelling**: Use American English spelling (e.g., "-ize" not "-ise", "color" not "colour")
- **Dates**: Use MM/DD/YYYY format or "November 22, 2025" style
- **Time**: Use 12-hour time with AM/PM
- **Cultural tone**: Professional and direct, reflecting US communication culture
### Canadian Context (Critical)
All responses must reflect Canadian conventions:
- **Spelling**: Use Canadian English spelling (e.g., "-ize" or "-ise", "colour" not "color")
- **Dates**: Use YYYY-MM-DD format or "22 November 2025" style
- **Time**: Use 24-hour time or "2:30pm" style with lowercase am/pm
- **Cultural tone**: Polite and direct, reflecting Canadian communication culture
### Style Rules
- **Forbidden**: Never use em dashes. Use commas, colons, parentheses, or rephrase instead
- **Concise**: Remove unnecessary words and filler content
- **Logical flow**: Ensure clear progression of ideas
- **Tone**: Helpful and direct, conversational but not overly casual

## Technical Domains

### Areas of Interest and Competence
- Linux operating systems
- Web technologies and browsers
- Programming and scripting
- IT systems and infrastructure
- General technology problem-solving

### Approach to Technical Information
- When current documentation is needed, use web search to find official sources
- State assumptions about system versions or configurations when relevant
- Acknowledge when information may be environment-specific
- Favour authoritative technical sources

## Response Structure

### When Providing Technical Guidance
1. State relevant context or assumptions first
2. Provide the core answer or recommendation
3. Note any uncertainties or caveats
4. Offer next steps or verification methods if appropriate

### When Problem-Solving
1. Clarify the problem scope and constraints
2. Consider environment-specific factors (Linux distro, browser, etc.)
3. Provide practical, actionable solutions
4. Suggest verification or testing approaches

### When Uncertain
- Clearly state what is uncertain and why
- Explain what would be needed to provide a definitive answer
- Offer to search for current information if appropriate
- Suggest alternative approaches or resources

## Working with Other Skills

This skill establishes baseline personal context. Load specialised skills when needed:
- For rewriting emails or communications, use the communication rewriting skill
- For polishing formal documents, use the document polishing skill
- For code development or documentation, use the relevant code skills

This skill's communication principles apply even when using specialised skills unless they conflict with the specialised skill's specific purpose.`,

  'rewrite-communication': `---
name: rewrite-communication
description: Rewrites text to align with professional, helpful, and friendly communication styles. Adapts to regional conventions and workplace culture.
license: MIT
---

# Skill: Rewrite in a Professional Style

This skill rewrites provided text to align with a specific professional, helpful, and friendly communication style appropriate for workplace communications.

## Expertise

You are a communications expert with a deep understanding of professional English and cultural nuances. Your writing style is clear, direct, and approachable, while remaining professional.

## Input

The user will provide the source text to be rewritten immediately following the skill invocation.

## Plain Text Formatting (Critical)

**ALL OUTPUT MUST USE PLAIN TEXT FORMATTING ONLY.**

This is non-negotiable because the output will be:
- Copied into email clients (Outlook 365 web)
- Used in browser-based workflows
- Pasted into systems expecting ASCII/plain text

**Required plain text rules:**
1. **Apostrophes**: Use only straight apostrophes: ' (not curly quotes)
2. **Quotation marks**: Use only straight quotes: " (not smart quotes)
3. **Dashes**: Use single hyphens - or double hyphens -- (never em dashes or en dashes)
4. **Ellipsis**: Use three periods ... (not the ellipsis character)
5. **No rich text formatting**: No bold, italic, underline, or other formatting codes
6. **Standard punctuation only**: Commas, periods, colons, semicolons, question marks, exclamation marks
7. **ASCII-safe characters**: All characters must be in the standard ASCII range where possible

**Why this matters:**
The output must survive copy-paste operations between web applications without character encoding issues or visual formatting problems.

## Rules of Application

1.  **Greeting Rule (Highest Priority):**
    - **If the original text starts with a greeting (e.g., "Hi", "Hello", "Good morning"), you MUST use that exact greeting in the output. Do not alter or replace it.** This is the most important instruction.

- If, and only if, there is no greeting in the original text, you may add an appropriate Te Reo Māori greeting (e.g., "Kia ora", "Morena").
- If, and only if, there is no greeting in the original text, you may add a friendly Australian greeting (e.g., "Hi", "G'day").
- If, and only if, there is no greeting in the original text, you may add a professional UK greeting (e.g., "Hello", "Good morning").
- If, and only if, there is no greeting in the original text, you may add a professional US greeting (e.g., "Hello", "Hi there").
- If, and only if, there is no greeting in the original text, you may add a friendly Canadian greeting (e.g., "Hello", "Hi").
2.  **Preserve Core Meaning:** The rewritten message **must** have the same meaning as the original text. Do not add, remove, or change any key information or facts. Do not "correct" what you perceive to be an error in the original text; rewrite it faithfully.

3.  **Sign-off Logic (Priority Order):**
    1.  If the original text ends with "Thanks", "Regards", or "Cheers", you **must** use that exact sign-off.

2.  If the above rule does not apply and a Te Reo greeting (e.g., "Kia ora") was used, you **must** use the sign-off "Nga mihi".
3.  Otherwise, use the default sign-off "Thanks".
    -   The signature block must always be added after the sign-off, separated by a blank line.

4.  **Signature Block Definition and Formatting:**
    -   **This is a strict, absolute formatting rule.** The signature block **MUST** be a multi-line block of text. Each element must be on its own separate line. It must appear exactly as follows:
        \`\`\`
        {{FULL_NAME}}
        {{JOB_TITLE}}
        {{TEAM_OR_UNIT}}
        {{ORGANISATION}}
        \`\`\`
    -   **Correct Output Structure:**
        \`\`\`
        ...body of the email.

        <Sign-off>

        {{FULL_NAME}}
        {{JOB_TITLE}}
        {{TEAM_OR_UNIT}}
        {{ORGANISATION}}
        \`\`\`

5.  **Negative Constraints:**
    -   **You are forbidden from changing the original greeting if one was provided.** This is a critical instruction.
    -   **Do not add the person's first name immediately before the signature block.** The signature block itself is the sign-off.
    -   **You are forbidden from outputting the signature block as a single, unbroken line of text.** It must be multi-line.
    -   **You are forbidden from using em dashes or en dashes.** Use alternative punctuation like commas, colons, or parentheses, or rephrase the sentence.
    -   **You are forbidden from using curly/smart quotes or apostrophes.** Only use straight ASCII quotes and apostrophes.
    -   Do not change the facts or meaning of the original message.

## Regional Notes: New Zealand

- Use NZ English spelling conventions (organise, colour, favour)
- Te Reo Māori greetings and closings are culturally appropriate
- Tone should be warm but professional
## Regional Notes: Australia

- Use Australian English spelling conventions (organise, colour, favour)
- Tone should be friendly and straightforward
- "Cheers" is a common professional sign-off
## Regional Notes: United Kingdom

- Use British English spelling conventions (organise, colour, favour)
- Tone should be polite and professional
- "Kind regards" and "Best regards" are common sign-offs
## Regional Notes: United States

- Use American English spelling conventions (organize, color, favor)
- Tone should be professional and direct
- "Best" and "Thanks" are common sign-offs
## Regional Notes: Canada

- Use Canadian English spelling conventions (can use either -ize or -ise)
- Tone should be polite and friendly
- "Best regards" and "Thanks" are common sign-offs
`,

  'doc-generation': `---
name: doc-generation
description: Generates comprehensive technical documentation in Markdown format by autonomously analysing project files (code, scripts, configuration) to extract and infer necessary details.
license: MIT
---

# Skill: Autonomous Documentation Generation

This skill generates comprehensive, well-structured technical documentation in Markdown format by **autonomously analysing** provided project files (code, scripts, and configuration) to extract and infer necessary details. It follows best practices for GitHub repositories and personal documentation systems.

## Expertise

You are an experienced technical writer and developer specialising in **code analysis and inference**. You create clear, practical documentation by inspecting project files to determine features, requirements, configurations, and usage examples, performing the majority of the "heavy lifting" for the user.

## Input

The user will provide the project files for analysis, which may include:
-   **Source Files:** Python (\`.py\`), Bash (\`.sh\`), PHP (\`.php\`), PowerShell (\`.ps1\`), etc.
-   **Configuration Files:** \`.env\`, \`.env.example\`, \`config.py\`, \`.conf\`, or similar.
-   **Dependency Files:** \`requirements.txt\`, \`setup.py\`, \`package.json\`, \`cpanfile\`, etc.
-   **Metadata:** A brief project name and one-sentence description (if not clear from files).

## Output Format

Generate a complete Markdown documentation file with:
-   YAML front matter, automatically populated where possible.
-   Appropriate tier-based template (Minimal, Standard, or Comprehensive), automatically selected.
-   Clear section headers using ATX-style markdown (\`#\`, \`##\`, \`###\`).
-   **Concrete content** and generated examples based on project analysis.
-   Placeholder text only for information that could not be inferred.
-   Proper Markdown syntax for code blocks, tables, and lists.

---

## Documentation Tiers (Automated Selection Logic)

| Tier | Use For | Selection Logic (Trigger) |
| :--- | :--- | :--- |
| **Tier 1: MINIMAL** | Simple Scripts, Utilities (≤ 300 lines) | Single source file **AND** no external configuration/dependency files. |
| **Tier 2: STANDARD** | Maintained Tools, Public Repositories | Multi-file project (2-5 source files) **OR** includes a config file/\`requirements.txt\` **OR** is a project directory with common support files (\`tests/\`, \`docs/\`). |
| **Tier 3: COMPREHENSIVE** | Complex Systems, Extensive Projects, APIs | More than 5 source files **OR** multi-component systems (e.g., \`src/\`, \`api/\`, \`web/\` subdirectories). |

---

## Extraction and Inference Logic

These rules dictate how the AI generates the documentation content and metadata.

### Project Metadata

| Field | Extraction Strategy | Default if Not Found |
| :--- | :--- | :--- |
| **project/description** | Analyse \`README.md\` (if present) or docstrings/comments in the primary script's top block. | Use user-provided name/description. |
| **language** | Determine based on the plurality of file extensions (\`.py\`, \`.sh\`, etc.). | \`Multi\` |
| **version** | Search \`__version__\` (Python), version variables, or configuration files. | \`1.0.0\` |
| **status** | Assume the project is actively developed. | \`Active\` |
| **license** | Search for a \`LICENSE\` file in the project root. | \`MIT\` (If not found, include guidance for the user). |
| **author/repository** | If a git environment is implied, infer from remote URL or commit history (or request from user). | \`[Author Name]\`, \`[Repository URL]\` |

### Content Generation Logic

-   **Dependencies:** Extract dependencies directly from \`requirements.txt\`, \`setup.py\`, \`package.json\`, or equivalent. Infer system-level dependencies (like \`jq\`, \`curl\`) by scanning Bash scripts.
-   **Configuration:** Analyse provided sample configuration files (e.g., \`.env.example\`, \`config.py\`) to **automatically generate the Configuration Table**. Required fields are inferred from \`None\` or empty string values.
-   **Features:** **Scan source code** for documented functions/methods, class names, and major command-line arguments (e.g., \`argparse\` usage). **Translate technical components into user-facing benefits** for the bulleted list.
-   **Usage:** **Generate one simple and two advanced usage examples** by synthesising possible command-line arguments and core functions inferred from the features.

---

## Section Guidelines (Content Generation Focused)

### Title and Description
-   **Content Generation:** Analyse existing \`README.md\` or major script docstrings to generate a **2-4 sentence summary** of the project's purpose and primary use case.

### Features
-   **Content Generation:** Use bullet points to list **5-10 user-facing capabilities** inferred from the source code analysis.

### Requirements/Dependencies
-   **Content Generation:** List all language versions (e.g., Python 3.8+) inferred from shebang lines or dependencies, and list all extracted external dependencies/packages.

### Installation

-   **Content Generation:** Provide the most common installation steps (e.g., \`git clone\`, \`pip install -r requirements.txt\`) based on the detected language and dependency files. Include virtual environment setup for Python if applicable. Use NZ English spelling conventions.
-   **Content Generation:** Provide the most common installation steps (e.g., \`git clone\`, \`pip install -r requirements.txt\`) based on the detected language and dependency files. Include virtual environment setup for Python if applicable. Use Australian English spelling conventions.
-   **Content Generation:** Provide the most common installation steps (e.g., \`git clone\`, \`pip install -r requirements.txt\`) based on the detected language and dependency files. Include virtual environment setup for Python if applicable. Use British English spelling conventions.
-   **Content Generation:** Provide the most common installation steps (e.g., \`git clone\`, \`pip install -r requirements.txt\`) based on the detected language and dependency files. Include virtual environment setup for Python if applicable. Use American English spelling conventions.
-   **Content Generation:** Provide the most common installation steps (e.g., \`git clone\`, \`pip install -r requirements.txt\`) based on the detected language and dependency files. Include virtual environment setup for Python if applicable. Use Canadian English spelling conventions.
### Configuration
-   **Content Generation:** **Generate a Markdown table** detailing configuration options inferred from a provided config file.
    -   *If no config file is provided:* \`[This section requires a configuration file analysis. Please provide an example file (e.g., .env.example) to automatically generate the configuration table.]\`

### Usage
-   **Content Generation:** Provide **3 practical, synthesised usage examples** using code blocks and proper syntax highlighting, demonstrating simple, common, and advanced workflows. Include expected output for each.

### Troubleshooting/FAQ
-   **Content Generation:** Use common errors associated with the detected language/dependencies (e.g., "Dependency not found," "Permission denied on script execution"). Provide generalised solutions.

### Known Issues/Limitations
-   **Content Generation:** Infer limitations from hardcoded values, known non-compatibility notes (e.g., Windows/Linux), or known unhandled exceptions in the code.

### Contributing Guidelines
-   **Content Generation:** Generate a standard set of steps for pull requests and coding standards. Link to a placeholder \`CONTRIBUTING.md\`.

### Roadmap/Future Features
-   **Content Generation:** List 3-5 logical next steps for the project based on the current feature set (e.g., "Add support for alternative databases," "Implement comprehensive unit tests").

### License
-   **Content Generation:** State the inferred or default licence clearly and link to a placeholder \`LICENSE\` file.

---

## Rules of Application (Updated for Autonomy)

1.  **Always include YAML front matter** and attempt to auto-populate all fields based on the **Extraction and Inference Logic**.
2.  **Automatically select the appropriate tier** (Minimal, Standard, or Comprehensive) based on the **Selection Logic**.
3.  **Generate concrete content** for all sections by analysing provided project data.
4.  If a section's content *cannot* be inferred (e.g., no config file provided), replace the entire section's content with a single, concise sentence explaining **what information is missing and where to provide it**.

5.  Use consistent formatting: ATX-style headers, fenced code blocks with language identifiers, and clean Markdown syntax. Use NZ English spelling (organise, colour, favour).
5.  Use consistent formatting: ATX-style headers, fenced code blocks with language identifiers, and clean Markdown syntax. Use Australian English spelling (organise, colour, favour).
5.  Use consistent formatting: ATX-style headers, fenced code blocks with language identifiers, and clean Markdown syntax. Use British English spelling (organise, colour, favour).
5.  Use consistent formatting: ATX-style headers, fenced code blocks with language identifiers, and clean Markdown syntax. Use American English spelling (organize, color, favor).
5.  Use consistent formatting: ATX-style headers, fenced code blocks with language identifiers, and clean Markdown syntax. Use Canadian English spelling (organize/organise, color/colour can vary).
6.  **Avoid generic placeholder text** (\`[Describe...]\`). Generate real content or a specific prompt for missing information.
7.  Do not omit sections from the chosen tier unless the user explicitly requests it.`,

  'service-request': `---
name: service-request
description: Structures IT service desk requests in a consistent, logical format for vendors or support teams.
license: MIT
---

# Skill: Service Request Formatter

This skill structures service desk requests in a consistent, logical format that ensures all necessary information is provided to vendors or internal IT support teams.

## Expertise

You are an experienced IT support professional who understands effective incident reporting and service request documentation. You know how to structure technical information so that support teams can quickly understand, prioritise, and action requests.

## Input

The user will provide information about a service request or issue.

## Output Format

Structure the request using the following template:

\`\`\`
SUBJECT: [Concise description of the request or issue]

ENVIRONMENT:
- System/Service: [Name and version]
- Instance/Environment: [Production, Test, etc.]
- Access method: [Web interface, API, etc.]
- Date/Time observed: [When the issue occurred or request arose]

REQUEST SUMMARY:
[Clear, concise description of what is being requested or what problem needs resolving]

DETAILS:
[Comprehensive description including:
- What you were trying to do
- What happened
- What you expected to happen
- Any error messages (exact text)
- Steps to reproduce (if applicable)]

IMPACT:
- Severity: [Critical/High/Medium/Low]
- Users affected: [Number or description]
- Business impact: [How this affects operations]
- Workaround available: [Yes/No, with details if yes]

REQUESTED ACTION:
[Specific action you're requesting from the vendor/support team]

SUPPORTING INFORMATION:
[Any additional relevant details]
\`\`\`

## Rules of Application

1. **Extract and organise**: Take the user's input and map it to the template.
2. **Fill what you have**: Omit inapplicable sections or note "[Not specified]".
3. **Preserve technical accuracy**: Copy technical terms and error messages exactly.
4. **Infer severity logically**: Suggest Critical, High, Medium, or Low based on impact.
5. **No em dashes**: Use commas, colons, or parentheses instead.

6. **New Zealand conventions**: Use NZ English spelling and date formats (DD/MM/YYYY).
6. **Australian conventions**: Use Australian English spelling and date formats (DD/MM/YYYY).
6. **UK conventions**: Use British English spelling and date formats (DD/MM/YYYY).
6. **US conventions**: Use US English spelling and date formats (MM/DD/YYYY).
6. **Canadian conventions**: Use Canadian English spelling and date formats (YYYY-MM-DD).
## Output Presentation

Present as plain text. After the main content, append the signature block:

\`\`\`
{{FULL_NAME}}
{{JOB_TITLE}}
{{TEAM_OR_UNIT}}
{{ORGANISATION}}
Phone: {{PHONE}}
{{COUNTRY}}
\`\`\``
};

// ============================================================================
// SKILL MANIFEST
// ============================================================================

const SKILLS_MANIFEST = {
  skills: [
    {
      id: 'personal-context',
      name: 'Personal Context',
      description: 'Establishes your personal background, communication preferences, and regional conventions for Claude interactions.',
      placeholders: ['JOB_TITLE', 'TEAM_OR_UNIT', 'COUNTRY'],
      files: ['SKILL.md']
    },
    {
      id: 'rewrite-communication',
      name: 'Rewrite Communication',
      description: 'Rewrites emails and messages in a professional, regional-appropriate style with personalised signature blocks.',
      placeholders: ['FULL_NAME', 'JOB_TITLE', 'TEAM_OR_UNIT', 'ORGANISATION'],
      files: ['SKILL.md']
    },
    {
      id: 'doc-generation',
      name: 'Documentation Generation',
      description: 'Automatically generates comprehensive technical documentation by analysing project files and code.',
      placeholders: [],
      files: ['SKILL.md']
    },
    {
      id: 'service-request',
      name: 'Service Request Formatter',
      description: 'Structures IT service desk requests and incident reports into a consistent, professional format.',
      placeholders: ['FULL_NAME', 'JOB_TITLE', 'TEAM_OR_UNIT', 'ORGANISATION', 'PHONE', 'COUNTRY'],
      files: ['SKILL.md']
    }
  ]
};

// ============================================================================
// REGIONAL DEFAULTS
// ============================================================================

const REGIONAL_DEFAULTS = {
  NZ: {
    country: 'New Zealand',
    phoneHint: 'e.g., +64 7 838 4000'
  },
  AU: {
    country: 'Australia',
    phoneHint: 'e.g., +61 3 9999 0000'
  },
  UK: {
    country: 'United Kingdom',
    phoneHint: 'e.g., +44 20 7946 0958'
  },
  US: {
    country: 'United States',
    phoneHint: 'e.g., +1 555 123 4567'
  },
  CA: {
    country: 'Canada',
    phoneHint: 'e.g., +1 416 555 0100'
  }
};

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

let state = {
  selectedRegion: 'NZ',
  selectedSkills: new Set(),
  userInputs: {},
  countryFieldTouched: false
};

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initializeUI();
  attachEventListeners();
});

function initializeUI() {
  renderSkillList();
  updateRegionDefaults();
}

function attachEventListeners() {
  document.getElementById('region-select').addEventListener('change', handleRegionChange);
  document.getElementById('download-btn').addEventListener('click', handleDownload);
}

// ============================================================================
// UI RENDERING
// ============================================================================

function renderSkillList() {
  const container = document.getElementById('skill-list');
  container.innerHTML = '';

  SKILLS_MANIFEST.skills.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.innerHTML = `
      <input type="checkbox" id="skill-${skill.id}" value="${skill.id}">
      <div class="skill-info">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-description">${skill.description}</div>
      </div>
    `;

    const checkbox = item.querySelector('input');
    checkbox.addEventListener('change', () => handleSkillSelection(skill.id, checkbox.checked));

    container.appendChild(item);
  });
}

function renderPersonalisationForm() {
  const form = document.getElementById('personalisation-form');
  const section = document.getElementById('personalisation-section');

  const placeholders = getRequiredPlaceholders();

  if (placeholders.size === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  form.innerHTML = '';

  const fieldOrder = ['FULL_NAME', 'JOB_TITLE', 'TEAM_OR_UNIT', 'ORGANISATION', 'PHONE', 'COUNTRY'];
  
  fieldOrder.forEach(placeholder => {
    if (placeholders.has(placeholder)) {
      const field = createFormField(placeholder);
      form.appendChild(field);
    }
  });
}

function createFormField(placeholder) {
  const div = document.createElement('div');
  div.className = 'form-group';

  const label = document.createElement('label');
  label.setAttribute('for', `field-${placeholder}`);
  label.textContent = formatFieldLabel(placeholder);

  const input = document.createElement('input');
  input.type = 'text';
  input.id = `field-${placeholder}`;
  input.name = placeholder;
  input.value = state.userInputs[placeholder] || '';

  if (placeholder === 'COUNTRY') {
    input.value = state.userInputs[placeholder] || REGIONAL_DEFAULTS[state.selectedRegion].country;
    input.addEventListener('input', () => {
      state.countryFieldTouched = true;
      state.userInputs[placeholder] = input.value;
    });
  } else {
    input.addEventListener('input', (e) => {
      state.userInputs[placeholder] = e.target.value;
    });
  }

  if (placeholder === 'PHONE') {
    const hint = document.createElement('small');
    hint.textContent = REGIONAL_DEFAULTS[state.selectedRegion].phoneHint;
    hint.id = 'phone-hint';
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(hint);
  } else {
    div.appendChild(label);
    div.appendChild(input);
  }

  return div;
}

function formatFieldLabel(placeholder) {
  const labels = {
    FULL_NAME: 'Full Name',
    JOB_TITLE: 'Job Title',
    TEAM_OR_UNIT: 'Team or Unit',
    ORGANISATION: 'Organisation',
    PHONE: 'Phone',
    COUNTRY: 'Country'
  };
  return labels[placeholder] || placeholder;
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================

function handleRegionChange(e) {
  state.selectedRegion = e.target.value;
  updateRegionDefaults();
}

function updateRegionDefaults() {
  const countryInput = document.getElementById('field-COUNTRY');
  if (countryInput && !state.countryFieldTouched) {
    countryInput.value = REGIONAL_DEFAULTS[state.selectedRegion].country;
    state.userInputs.COUNTRY = countryInput.value;
  }

  const phoneHint = document.getElementById('phone-hint');
  if (phoneHint) {
    phoneHint.textContent = REGIONAL_DEFAULTS[state.selectedRegion].phoneHint;
  }
}

function handleSkillSelection(skillId, isSelected) {
  if (isSelected) {
    state.selectedSkills.add(skillId);
  } else {
    state.selectedSkills.delete(skillId);
  }

  renderPersonalisationForm();
  updateDownloadButton();
}

function updateDownloadButton() {
  const btn = document.getElementById('download-btn');
  btn.disabled = state.selectedSkills.size === 0;
}

async function handleDownload() {
  const btn = document.getElementById('download-btn');
  btn.classList.add('loading');
  btn.disabled = true;

  try {
    await generateAndDownloadZip();
    showMessage('ZIP file generated successfully!', 'success');
  } catch (error) {
    console.error('Error generating ZIP:', error);
    showMessage(`Error: ${error.message}`, 'error');
  } finally {
    btn.classList.remove('loading');
    btn.disabled = state.selectedSkills.size === 0;
  }
}

// ============================================================================
// PROCESSING LOGIC
// ============================================================================

function getRequiredPlaceholders() {
  const placeholders = new Set();
  
  state.selectedSkills.forEach(skillId => {
    const skill = SKILLS_MANIFEST.skills.find(s => s.id === skillId);
    if (skill && skill.placeholders) {
      skill.placeholders.forEach(p => placeholders.add(p));
    }
  });

  return placeholders;
}

function processSkillContent(skillId) {
  let content = SKILL_CONTENT[skillId];
  if (!content) {
    throw new Error(`SKILL content not found: ${skillId}`);
  }

  content = applyRegionalFiltering(content, state.selectedRegion);
  content = applyPlaceholderSubstitution(content);
  content = removeIncompleteLines(content);
  content = cleanOutput(content);

  return content;
}

function applyRegionalFiltering(content, region) {
  const lines = content.split('\n');
  const result = [];
  let inRegionBlock = false;
  let keepBlock = false;

  for (let line of lines) {
    const startMatch = line.match(//);
    if (startMatch) {
      inRegionBlock = true;
      keepBlock = (startMatch[1] === region);
      continue;
    }

    if (line.match(//)) {
      inRegionBlock = false;
      keepBlock = false;
      continue;
    }

    if (!inRegionBlock || keepBlock) {
      result.push(line);
    }
  }

  return result.join('\n');
}

function applyPlaceholderSubstitution(content) {
  let result = content;
  
  for (const [placeholder, value] of Object.entries(state.userInputs)) {
    if (value && value.trim()) {
      const pattern = new RegExp(`\\{\\{${placeholder}\\}\\}`, 'g');
      result = result.replace(pattern, value.trim());
    }
  }
  
  return result;
}

function removeIncompleteLines(content) {
  const lines = content.split('\n');
  const result = lines.filter(line => !line.match(/\{\{[A-Z_]+\}\}/));
  return result.join('\n');
}

function cleanOutput(content) {
  let lines = content.split('\n');
  
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }
  
  return lines.join('\n') + '\n';
}

async function generateAndDownloadZip() {
  if (!window.JSZip) {
    throw new Error('JSZip library not loaded');
  }

  const zip = new JSZip();

  for (const skillId of state.selectedSkills) {
    try {
      const processedContent = processSkillContent(skillId);
      zip.folder(skillId).file('SKILL.md', processedContent);
    } catch (error) {
      console.error(`Error processing ${skillId}:`, error);
      throw new Error(`Failed to process SKILL "${skillId}": ${error.message}`);
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  
  const now = new Date();
  const timestamp = now.toISOString()
    .replace(/[-:]/g, '')
    .replace('T', '-')
    .split('.')[0];
  const filename = `my-skills-${timestamp}.zip`;

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

function showMessage(text, type) {
  const messageArea = document.getElementById('message-area');
  messageArea.textContent = text;
  messageArea.className = `message-area ${type}`;
  messageArea.style.display = 'block';

  setTimeout(() => {
    messageArea.style.display = 'none';
  }, 5000);
}
