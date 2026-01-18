# SKILL Assembler

A privacy-preserving, client-side web tool for personalising and packaging Claude SKILLs.

## What is This?

SKILL Assembler allows you to:
- Select one or more Claude SKILLs from a curated collection
- Personalise them with your details (name, job title, organisation, etc.)
- Adapt them to your regional conventions (NZ, AU, UK, US, CA)
- Download a ready-to-use ZIP package

**Privacy guarantee**: All processing happens entirely in your browser. No data is sent to any server.

## Features

- **Regional Adaptation**: Automatically adjusts SKILLs for New Zealand, Australia, United Kingdom, United States, or Canadian conventions
- **Smart Placeholders**: Only shows personalisation fields needed by your selected SKILLs
- **Clean Output**: Automatically removes unfilled placeholders and regional content you don't need
- **Zero Network Activity**: After initial page load, works completely offline
- **One-Click Download**: Generates properly formatted ZIP files ready for use

## Available SKILLs

### Personal Context
Establishes your personal background, communication preferences, and regional conventions for Claude interactions.

### Rewrite Communication
Rewrites emails and messages in a professional, regional-appropriate style with personalised signature blocks.

### Documentation Generation
Automatically generates comprehensive technical documentation by analysing project files and code.

## How to Use

1. Visit the live site: **[https://stonerough.github.io/skill-assembler](https://stonerough.github.io/skill-assembler)**
2. Select your region from the dropdown
3. Check the SKILLs you want to personalise
4. Fill in any personalisation fields (all optional)
5. Click "Build & Download ZIP"
6. Extract the ZIP and use your personalised SKILLs with Claude

## Technical Details

- **Framework**: Vanilla JavaScript (no build process required)
- **Dependencies**: JSZip (loaded from CDN)
- **Browser Support**: Firefox 115 ESR+, Chrome/Chromium 115+, Edge 115+
- **File Format**: Standard Anthropic SKILL format (Markdown with YAML front matter)

## Privacy & Security

- No cookies, localStorage, or tracking
- No telemetry or analytics
- No external API calls during personalisation
- All processing happens client-side
- Open source for verification

## Adding New SKILLs

To add a new SKILL to the collection:

1. Create your SKILL.md file following the [SKILL format specification](https://github.com/anthropics/anthropic-skill-library)
2. Add regional blocks where appropriate using HTML comments:
   ```markdown
   <!-- REGION:NZ -->
   NZ-specific content here
   <!-- END:REGION -->
   ```
3. Edit `app.js` to add your SKILL content to the `SKILL_CONTENT` object
4. Add an entry to the `SKILLS_MANIFEST` array
5. Commit and push to deploy via GitHub Pages

See the [Technical Requirements Document](TECHNICAL_SPEC.md) for detailed specifications.

## Development

This is a static site with no build process. To modify:

1. Clone the repository
2. Edit the HTML, CSS, or JS files directly
3. Test locally by opening `index.html` in your browser
4. Push to GitHub to deploy via GitHub Pages

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Acknowledgements

Built for the Claude community by someone who values privacy and practical tools.

---

**Version**: 1.0.0  
**Last Updated**: 17/01/2026
