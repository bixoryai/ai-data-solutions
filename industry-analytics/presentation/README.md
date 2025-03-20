# Industry-specific AI Analytics Presentation

This project contains a presentation showcasing industry-specific AI analytics capabilities.

## Implementation Notice

There are currently two different presentation implementations in this codebase:

1. **React-based implementation** (`src/components/Presentation.tsx`)
   - Modern React component with styling in `Presentation.css`
   - Used when starting the project with `npm start`

2. **Static HTML with Reveal.js** (`index.html`)
   - Direct implementation using Reveal.js
   - Can be opened directly in a browser without React

## Recommended Approach

To maintain a consistent codebase, we recommend choosing one approach:

### Option 1: Standardize on React Implementation (Recommended)
- Use the React component-based approach for better code organization and maintainability
- Remove or archive the standalone `index.html` file
- This approach integrates better with the rest of your React-based codebase

### Option 2: Standardize on Static HTML
- If preferring a simpler deployment without React dependencies
- Convert to a fully static implementation
- Remove or archive the React components

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Dependencies

- React
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

- `src/components/Presentation.tsx` - Main presentation React component
- `src/components/Presentation.css` - Styling for the presentation
- `public/images/` - Images used in the presentation
