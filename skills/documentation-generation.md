---
name: documentation-generation
description: Automatically generates comprehensive technical documentation by analysing project files and code
license: Complete terms in LICENSE.txt
---

# Documentation Generation

This skill generates comprehensive technical documentation by analysing project files, code structure, and implementation details.

## Purpose

Automatically create professional documentation that:
- Explains project purpose and architecture
- Documents APIs, functions, and components
- Provides setup and usage instructions
- Includes examples and best practices

## Documentation Style

Target audience: {{TARGET_AUDIENCE}}
Preferred style: {{DOCUMENTATION_STYLE}}

## Process

When asked to generate documentation:

1. **Analyse the codebase**: Examine file structure, dependencies, and implementation
2. **Identify key components**: Functions, classes, modules, APIs
3. **Extract patterns**: Common usage patterns, configuration options
4. **Structure documentation**: Logical flow from overview to details
5. **Include examples**: Practical code examples and use cases

## Documentation Structure

### Standard Sections

1. **Overview**
   - Project purpose and goals
   - Key features
   - Technology stack

2. **Getting Started**
   - Prerequisites
   - Installation steps
   - Basic configuration

3. **Architecture**
   - System design
   - Component relationships
   - Data flow

4. **API Reference** (if applicable)
   - Endpoints or functions
   - Parameters and return values
   - Error handling

5. **Usage Examples**
   - Common use cases
   - Code samples
   - Best practices

6. **Configuration**
   - Available options
   - Environment variables
   - Default values

7. **Troubleshooting**
   - Common issues
   - Solutions and workarounds

8. **Contributing** (if applicable)
   - Development setup
   - Coding standards
   - Submission process

## Output Format

### For README Files
- Clear, scannable structure
- Code blocks with syntax highlighting
- Links to detailed documentation
- Badges for build status, version, etc. (when relevant)

### For API Documentation
- Consistent format for all endpoints/functions
- Parameter tables
- Response examples
- Error codes and meanings

### For User Guides
- Step-by-step instructions
- Screenshots or diagrams (described, not generated)
- Common workflows
- Tips and warnings

## Code Analysis Guidelines

When examining code:
- Identify exported functions/classes
- Note required vs optional parameters
- Extract JSDoc, docstrings, or comments
- Recognise common patterns and idioms
- Identify dependencies and their purposes

## Regional Adaptations

<!-- REGION:NZ -->
- Use NZ English spelling throughout
- Date formats: DD/MM/YYYY
- Follow local coding conventions where applicable
<!-- END:REGION -->

<!-- REGION:AU -->
- Use Australian English spelling throughout
- Date formats: DD/MM/YYYY
- Follow local coding conventions where applicable
<!-- END:REGION -->

<!-- REGION:UK -->
- Use British English spelling throughout
- Date formats: DD/MM/YYYY
- Follow UK coding conventions where applicable
<!-- END:REGION -->

<!-- REGION:US -->
- Use American English spelling throughout
- Date formats: MM/DD/YYYY
- Follow US coding conventions where applicable
<!-- END:REGION -->

<!-- REGION:CA -->
- Use Canadian English spelling throughout
- Date formats: DD/MM/YYYY
- Follow Canadian coding conventions where applicable
<!-- END:REGION -->

## Best Practices

1. **Clarity over cleverness**: Write for understanding, not to impress
2. **Show, don't just tell**: Include working examples
3. **Maintain consistency**: Use consistent terminology and formatting
4. **Keep it current**: Note version-specific behaviour when relevant
5. **Consider the audience**: Adjust technical depth appropriately

## Maintenance Notes

Documentation should:
- Live close to the code it describes
- Be updated with code changes
- Include version information
- Note deprecated features

## Integration with Other Skills

This skill works alongside:
- Personal context skills (for regional preferences)
- Code analysis skills (for deeper technical insight)
- Communication skills (for clarity and structure)
