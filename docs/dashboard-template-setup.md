# Standard Operating Procedure: Creating a New Dashboard Demo

This guide will walk you through setting up a new dashboard demo, ensuring it aligns with the project's `PRD` structure and `dashboard-ui-standard.md`. We will use the `nlp-data-intelligence` demo as our "gold standard" template.

---

### **Phase 1: Project Scaffolding & Setup**

1.  **Create the Directory Structure**:
    Inside the root of the solution (e.g., `new-solution/`), create the standard `dashboard-demo` folder structure.
    ```bash
    - new-solution/
      - dashboard-demo/
        - public/
        - src/
          - components/
          - data/
          - utils/
    ```

2.  **Copy Core Configuration Files**:
    To ensure consistency, copy the essential configuration files from a known-good demo like `nlp-data-intelligence/dashboard-demo/` into your new `new-solution/dashboard-demo/` directory.
    *   `package.json` (for dependencies and scripts)
    *   `tailwind.config.js`
    *   `tsconfig.json`
    *   `.gitignore`

3.  **Install Dependencies**:
    Navigate into your new dashboard's directory and run `npm install`. This will install all the necessary React, Tailwind, and other packages defined in the `package.json` you just copied.
    ```bash
    cd new-solution/dashboard-demo
    npm install
    ```

4.  **Create Entry Point (`index.tsx`) and CSS**:
    Create the main entry file `src/index.tsx` and the base stylesheet `src/tailwind.css`.

    *   In `src/tailwind.css`, add the base Tailwind directives:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    *   In `src/index.tsx`, set up the root React component:
        ```tsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './components/App';
        import './tailwind.css';

        const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        ```

---
### **Phase 2: Building the Core Layout (Following `dashboard-ui-standard.md`)**

5.  **Copy Standardized Layout Components**:
    This is the most critical step for UI consistency. Copy the standardized `Header.tsx` and `Sidebar.tsx` files from `nlp-data-intelligence/dashboard-demo/src/components/` into your new `src/components/` directory.

6.  **Create the Main App Component (`App.tsx`)**:
    This component will orchestrate the entire dashboard. Create `src/components/App.tsx`. Its primary responsibilities are:
    *   Managing sidebar visibility (`isSidebarOpen`).
    *   Managing the current language (`language`).
    *   Managing which navigation item is active (`activeNavItem`).

    Here is a robust starting template for `App.tsx`:
    ```tsx
    import React, { useState } from 'react';
    import Header from './Header';
    import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
    // Import your page components here later

    // Define nav items based on PRD
    const navItems: readonly NavItemInfo[] = [
      // { name: 'Dashboard', icon: <Icon /> }, ...etc
    ];

    const App: React.FC = () => {
      const [isSidebarOpen, setSidebarOpen] = useState(true);
      const [activeNavItem, setActiveNavItem] = useState<NavItem>('Dashboard');
      const [language, setLanguage] = useState<'en' | 'zh'>(
        (localStorage.getItem('language') as 'en' | 'zh') || 'en'
      );

      const toggleSidebar = () => setSidebarOpen(open => !open);
      const changeLanguage = (lang: 'en' | 'zh') => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
      };

      const renderContent = () => {
        // We will fill this in later
        return <div>Page Content</div>;
      };

      return (
        <div className="bg-gray-100 min-h-screen">
          <Header
            language={language}
            changeLanguage={changeLanguage}
            toggleSidebar={toggleSidebar}
            title="Your Dashboard Title"
          />
          <Sidebar
            isOpen={isSidebarOpen}
            language={language}
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            navItems={navItems}
          />
          <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
            <div className="pt-20">
              {renderContent()}
            </div>
          </main>
        </div>
      );
    };

    export default App;
    ```

---
### **Phase 3: Implementing Features (Following the PRD)**

7.  **Define Navigation and Create Page Components**:
    Based on your dashboard's PRD, define the navigation items in the `navItems` array in `App.tsx`. For each item, create a corresponding placeholder component file in `src/components/`.

    *Example*: If your PRD specifies "Dashboard" and "Analytics":
    *   Update `navItems` in `App.tsx`:
        ```tsx
        import { LayoutDashboard, BarChart2 } from 'lucide-react'; // Example icons
        const navItems: readonly NavItemInfo[] = [
          { name: 'Dashboard', icon: <LayoutDashboard /> },
          { name: 'Analytics', icon: <BarChart2 /> },
        ];
        ```
    *   Create placeholder files:
        *   `src/components/DashboardPage.tsx`
        *   `src/components/AnalyticsPage.tsx`

8.  **Populate Page Components with Translations**:
    Build out the content for each page component. Crucially, remember to accept the `language` prop and include a `translations` object, just as we did for the NLP demo. This ensures localization is built-in from the start.

---
### **Phase 4: Final Integration & Verification**

9.  **Connect Pages in `App.tsx`**:
    Import your newly created page components into `App.tsx` and update the `renderContent` function to display the correct page based on `activeNavItem`.
    ```tsx
    // In App.tsx
    // import DashboardPage from './DashboardPage'; // etc.
    const renderContent = () => {
      switch (activeNavItem) {
        case 'Dashboard':
          return <DashboardPage language={language} />;
        case 'Analytics':
          return <AnalyticsPage language={language} />;
        default:
          return <DashboardPage language={language} />;
      }
    };
    ```

10. **Run and Verify**:
    Start the development server and thoroughly test all functionality.
    ```bash
    npm start
    ```
    *   Does the sidebar open and close?
    *   Does clicking navigation items change the content?
    *   Does the language toggle translate all text?
    *   Is the layout responsive on mobile?

By following this SOP, you can rapidly and reliably scaffold new dashboard demos that are robust, maintainable, and perfectly aligned with the established standards of the `ai-data-solutions` project. 