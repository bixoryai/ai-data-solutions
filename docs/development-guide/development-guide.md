# AI Data Solutions Development Guide

This guide provides development standards, workflows, and best practices for contributing to the AI Data Solutions repository. Following these guidelines ensures consistent code quality and maintainability across all solution components.

## Table of Contents

- [Development Environment Setup](#development-environment-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Development Workflow](#development-workflow)
- [Component Development](#component-development)
- [Styling Guidelines](#styling-guidelines)
- [Testing Standards](#testing-standards)
- [Building and Deployment](#building-and-deployment)
- [Troubleshooting](#troubleshooting)

## Development Environment Setup

### Prerequisites

- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher
- **Git**: For version control
- **Code Editor**: VS Code recommended with the following extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript support

### Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bixoryai/ai-data-solutions.git
   cd ai-data-solutions
   ```

2. Select the specific project you want to work on:
   ```bash
   cd industry-analytics/presentation  # or another project directory
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

The repository follows a modular structure with each solution in its own directory:

```
ai-data-solutions/
├── index.html                   # Demo Portal entry interface
├── common/                      # Shared utilities and components
├── industry-analytics/          # Industry-specific AI Analytics
│   ├── dashboard-demo/          # Dashboard implementation
│   └── presentation/            # Presentation implementation
├── synthetic-data-generator/    # Synthetic Data Generation tools
├── domain-dataset-curation/     # Domain Dataset Curation
└── docs/                        # Documentation
```

Each project follows a standardized structure:

```
project-name/
├── public/                      # Static assets
├── src/
│   ├── components/              # React components
│   ├── data/                    # Mock data files
│   ├── utils/                   # Utility functions
│   └── index.tsx                # Entry point
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## Coding Standards

### General Principles

1. **Readability** over cleverness
2. **Consistency** in style and patterns
3. **Modularity** with clear component boundaries
4. **Documentation** for complex logic

### JavaScript/TypeScript

- Use **TypeScript** for all new components
- Use **functional components** with hooks for React
- Use **ES6+ features** (destructuring, spread syntax, arrow functions)
- Follow **camelCase** for variables and functions
- Follow **PascalCase** for component names and classes

### Example Component Structure

```tsx
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  property1: string;
  property2: number;
}

const ComponentName: React.FC<ComponentNameProps> = ({ property1, property2 }) => {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // Side effect logic
  }, [dependency]);
  
  const handleEvent = (): void => {
    // Event handling logic
  };
  
  return (
    <div className="component-name">
      {/* JSX structure */}
    </div>
  );
};

export default ComponentName;
```

## Development Workflow

### Git Workflow

1. **Branch Naming**:
   - Feature branches: `feature/short-description`
   - Bug fixes: `fix/issue-description`
   - Documentation: `docs/what-changed`

2. **Commit Messages**:
   - Use present tense ("Add feature" not "Added feature")
   - Be descriptive but concise
   - Reference issue numbers when applicable

3. **Pull Request Process**:
   - Create PRs against the `develop` branch
   - Include a description of changes
   - Ensure all checks pass before requesting review

### Project Management

- Use GitHub Issues for task tracking
- Use GitHub Projects for sprint planning and roadmap
- Label issues appropriately (bug, enhancement, documentation)

## Component Development

### Component Design Principles

1. **Single Responsibility**: Each component should do one thing well
2. **Reusability**: Design components to be reusable when appropriate
3. **Composition**: Prefer composition over inheritance
4. **Props Interface**: Define clear prop interfaces with TypeScript

### State Management

- Use **React Hooks** for local component state
- Use **Context API** for shared state across components
- Structure state to minimize re-renders
- Consider data fetching libraries for remote data

### Custom Hooks

Create custom hooks for reusable logic, following this pattern:

```tsx
import { useState, useEffect } from 'react';

export const useCustomHook = (param1: string, param2: number) => {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // Logic here
  }, [param1, param2]);
  
  const helperFunction = () => {
    // Helper logic
  };
  
  return {
    state,
    helperFunction
  };
};
```

### Dashboard UI/UX Standardization

All dashboard demos in AI Data Solutions now follow a unified UI/UX standard for a consistent user experience. This standard includes:

- A standardized Header (fixed, gradient background, home/menu icons, title, subtitle, language toggle)
- A standardized Sidebar (fixed, dark theme, navigation icons/labels, "Return Home" button, company branding)
- A language toggle button (top right in header) with preference stored in localStorage under the key `language`
- Sidebar is open by default and toggled via the header
- Main content layout with consistent padding/margin logic
- **All dashboards and the main portal are now fully mobile responsive.**

**Implementation:**
- Use the shared `Header.tsx` and `Sidebar.tsx` components as the base for all dashboards.
- Follow the interface and prop patterns as described in the [Dashboard UI/UX Standardization Guide](./dashboard-ui-standard.md).
- Always use the `language` key for language preference in localStorage.
- Refer to the [Component Audit](../improvements/component-audit.md) for the rationale and history of these standards.

**Why this matters:**
- Ensures a seamless experience for users switching between solutions
- Simplifies maintenance and onboarding for new contributors
- Reduces UI/UX inconsistencies and technical debt

## Styling Guidelines

### Tailwind CSS

- Use Tailwind CSS for styling components
- Follow utility-first approach
- Use consistent color palette from design system
- Create custom Tailwind components for repeated patterns

### CSS Organization

For custom CSS (when needed):
- Use modular CSS with component-scoped files
- Follow BEM naming convention for classes
- Organize properties by type (positioning, display, dimensions)
- Use CSS variables for theme values

### Responsive Design

- Design mobile-first and scale up to larger screens
- Use Tailwind's responsive prefixes consistently
- Test on multiple screen sizes and devices
- **All dashboards and the main portal are now fully mobile responsive.**

## Testing Standards

### Unit Testing

- Write unit tests for all new components and utilities
- Use React Testing Library and Jest
- Test component rendering and interactions
- Aim for reasonable test coverage (70%+)

### Test Structure

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName property1="test" property2={42} />);
    expect(screen.getByText('expected text')).toBeInTheDocument();
  });
  
  it('handles interactions properly', () => {
    render(<ComponentName property1="test" property2={42} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('new state')).toBeInTheDocument();
  });
});
```

## Building and Deployment

### Local Build

```bash
# Navigate to project directory
cd project-directory

# Run build
npm run build
```

### GitHub Pages Deployment

1. Build the project(s) you want to deploy
2. Ensure the Demo Portal's links point to the correct locations
3. Verify everything works by serving locally:
   ```bash
   npx serve .
   ```
4. Push changes to GitHub to deploy via GitHub Pages

### Environment-Specific Configuration

- Use `.env` files for environment variables
- Keep sensitive values out of the repository
- Use `REACT_APP_` prefix for Create React App projects

## Troubleshooting

### Common Issues

#### Development Server Won't Start

- Check Node.js version (run `node -v`)
- Delete `node_modules` and reinstall dependencies:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Check for port conflicts and change port if needed:
  ```bash
  PORT=3001 npm start
  ```

#### Build Process Fails

- Check for TypeScript errors
- Ensure all dependencies are installed
- Look for syntax errors or import issues

#### Static Import Issues

- Use dynamic imports for large components:
  ```tsx
  const LargeComponent = React.lazy(() => import('./LargeComponent'));
  ```
- Implement suspense fallbacks for lazy-loaded components

---

This guide is a living document and will evolve as the project grows. Always refer to the latest version when developing for the AI Data Solutions repository. 