# Dashboard UI/UX Standardization Guide

**All dashboards and the main portal are now fully mobile responsive.**

This guide documents the standardized implementation for dashboard headers, side-menus (sidebars), language toggle buttons, and general UI/UX practices. **All dashboard demos now use this unified standard, based on the component audit and recent improvements.**

- **Update (2024):** All dashboard demos, including Predictive Maintenance, are now fully compliant with this standard. Sidebar toggle, header/sidebar layout, and main content alignment have been audited and fixed across all dashboards.

---

## Background & Rationale
- The standardization is based on a comprehensive [Component Audit](../improvements/component-audit.md) across all solutions.
- Header and Sidebar patterns are unified, drawing from the best implementations in Synthetic Data Generator and Domain Dataset Curation.
- This ensures a seamless, professional, and maintainable user experience across all dashboards.

---

## 1. Header
- **Position:** Fixed at the top (`fixed top-0 left-0 w-full z-20`).
- **Style:** Gradient background (`bg-gradient-to-r from-primary-800 to-primary-600 text-white`), with Home and Menu icons on the left.
- **Content:**
  - Title (e.g., "Manufacturing Operations Dashboard") and subtitle ("Interactive Demo").
  - Language toggle button on the right.
- **Padding:** Main content area should have top padding (`pt-24`) to avoid being hidden behind the header.
- **Functionality:** Header and sidebar toggle logic are now identical across all dashboards.

**Example Usage:**
```tsx
<Header 
  language={language} 
  changeLanguage={changeLanguage} 
  title={translations[language].operationsDashboard} 
  toggleSidebar={toggleSidebar}
/>
```

---

## 2. Sidebar (Side-Menu)
- **Position:** Fixed on the left, slides in/out (`fixed`, `left-0` or `-left-64`).
- **Width:** 16rem (`w-64`).
- **Style:** Dark theme (`bg-gray-800 text-white`), with navigation icons and labels (both English and Chinese).
- **Content:**
  - Navigation items with icons.
  - "Return Home" button at the bottom.
  - Company branding and copyright.
- **Behavior:**
  - Sidebar is open by default and toggled via the header.
  - Sidebar visibility is controlled by a state variable (`isOpen`).
  - Main content shifts right (`ml-64`) when sidebar is open.

**Example Usage:**
```tsx
<Sidebar 
  activeSection={activeSection}
  setActiveSection={setActiveSection}
  language={language}
  isOpen={sidebarOpen}
/>
```

---

## 3. Language Toggle Button
- **Location:** Top right of the header.
- **Style:**
  - Button with globe icon and language text (EN/中文).
  - Uses Tailwind classes for consistent appearance.
- **Logic:**
  - Language state managed in the main app.
  - Language preference stored in localStorage (key: `language`).
  - All text elements use a translation function (e.g., `t(key)`).

**Example Implementation:**
```tsx
<button 
  className="flex items-center px-3 py-1.5 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition-colors"
  onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
>
  <Globe size={16} className="mr-1.5" />
  <span>{language === 'en' ? '中文' : 'English'}</span>
</button>
```

---

## 4. General UI/UX Practices
- **Consistent Color Scheme:** Use the same primary colors, gradients, and background shades across all dashboards.
- **Icon Set:** Use Lucide icons for all navigation and action icons.
- **Responsive Layout:** Ensure header, sidebar, and content adapt to different screen sizes. **All dashboards and the main portal are now fully mobile responsive.**
- **Smooth Transitions:** Use Tailwind's `transition-all duration-300` for sidebar and content shifts.
- **Accessibility:**
  - Use `aria-label` for icon buttons.
  - Ensure sufficient color contrast.

---

## 5. Implementation Checklist for New Dashboards
- [x] Copy the standardized `Header.tsx` and `Sidebar.tsx` components.
- [x] Use the same language toggle logic and styling.
- [x] Set up the main layout in `App.tsx` to manage sidebar state and language.
- [x] Apply the same padding and margin logic for header and sidebar.
- [x] Use the same translation structure and localStorage key for language preference (`language`).
- [x] Sidebar should be open by default.
- [x] Use the same icon set and color palette.

---

## 6. Example Main Layout (`App.tsx`)
```tsx
const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default
const toggleSidebar = () => setSidebarOpen(open => !open);

<Header 
  language={language} 
  changeLanguage={changeLanguage} 
  title={translations[language].operationsDashboard} 
  toggleSidebar={toggleSidebar}
/>
<Sidebar 
  activeSection={activeSection}
  setActiveSection={setActiveSection}
  language={language}
  isOpen={sidebarOpen}
/>
<main className={`flex-1 overflow-y-auto p-6 pt-24 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
  {renderContent()}
</main>
```

---

**For questions or updates to this standard, edit this file or contact the project maintainers.** 