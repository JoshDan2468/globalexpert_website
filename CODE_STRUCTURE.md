# Website Code Structure Guide

**Easy-to-understand explanation for everyone**

## 🎯 What is This Website?

This is a modern, fast-loading website for Global Expert Services. It's built using:

- **React**: A JavaScript framework for building interactive web interfaces
- **Vite**: A fast build tool that packages all code for the web
- **Tailwind CSS**: Utility classes for styling (making things look nice)
- **Framer Motion**: Library for smooth animations

---

## 📁 Folder Structure Explained

```
src/
├── App.tsx                 → Main app component (entry point)
├── main.tsx                → Application startup file
├── index.css               → Global styles (colors, fonts, responsive design)
│
├── components/             → Reusable pieces of the website
│   ├── Navbar.tsx          → Top navigation bar
│   ├── DeferredSection.tsx → Lazy-loaded sections (load when visible)
│   └── InsightsSection.tsx → Special section component
│
├── hooks/                  → Custom React functions for component logic
│   ├── use-mobile.tsx      → Detects if user is on mobile device
│   ├── use-toast.ts        → Display notification messages
│   └── use-deferred-rendering.tsx → Defer non-critical work
│
├── lib/                    → Utility functions and helpers
│   ├── animation-utils.ts  → Animation control functions
│   └── utils.ts            → General utility functions
│
├── pages/                  → Full page components
│   ├── Home.tsx            → Home page
│   ├── About/              → About page and subcomponents
│   ├── Contact/            → Contact page
│   ├── Services/           → Services pages
│   └── Products/           → Products pages
│
├── router/                 → Navigation and routing
│   ├── AppRouter.tsx       → Sets up all page routes
│   └── routeConfig.ts      → List of all pages and their URLs
│
└── assets/                 → Images, logos, and media files
    ├── home_assets/
    ├── about/
    ├── services/
    └── ...
```

---

## 🚀 How Does The Website Load Fast?

### 1. **Image Loading Strategy**

Located in: `src/App.tsx`

- **Hero Images**: Load immediately (high priority)
- **Other Images**: Load only when needed (lazy loading)
- **All Images**: Load without blocking page rendering (async decoding)

**Result**: Page appears faster, and images load in the background.

### 2. **Smart Animations**

Located in: `src/lib/animation-utils.ts`

**Functions:**

- `prefersReducedMotion()` → Disables animations for users who prefer them off
- `isMobileDevice()` → Detects mobile devices
- `getAnimationDuration()` → Makes animations faster on mobile (70% speed)
- `shouldAnimateOnMount()` → Only animates if user's connection is good

**Result**: Animations don't slow down the page or waste battery.

### 3. **Lazy-Loaded Components**

Located in: `src/hooks/use-deferred-rendering.tsx`

- Components below the fold (not visible on first load) delay rendering
- Only renders when approaching viewport
- Uses `requestIdleCallback` for low-priority work

**Result**: Initial page load is much faster.

### 4. **Code Splitting**

The build process automatically splits code into chunks:

- `vendor.js` → React and libraries
- `animations.js` → Animation code
- Individual page bundles → Only loaded when needed

**Result**: Each page loads only what it needs.

---

## 🎨 Design System

### Colors

Located in: `src/index.css`

All colors are CSS variables, defined in the `:root` section:

```css
--primary: 120 100% 7%; /* Main green color */
--accent: 45 80% 55%; /* Gold accent color */
--background: 0 0% 100%; /* White background */
```

**Why?** Easy to change theme globally. Change one variable, all colors update.

### Responsive Design

Located in: `src/index.css` (media queries section)

Three breakpoints for different devices:

- **Desktop** (768px+): Full animations, larger fonts
- **Mobile** (<768px): Optimized animations (faster), touch-friendly buttons
- **Small phones** (<480px): Simplified interface, minimal animations

---

## 🔧 Key Components Explained

### `App.tsx` - The Main Component

- Runs image optimization on page load
- Watches for new images added dynamically
- Renders the entire app structure

### `AppRouter.tsx` - Navigation Manager

- Handles all page navigation
- Automatically scrolls to top when changing pages
- Loads page components on demand

### `Navbar.tsx` - Top Navigation

- Shows menu and logo
- Responsive design (menu collapses on mobile)
- Highlights current page

### `DeferredSection.tsx` - Lazy Loading

- Components below the fold don't render immediately
- Reduces initial load time
- Renders when entering viewport

---

## ⚙️ Performance Optimizations

### Bundle Size

- **Removed unused UI components** → ~200KB saved
- **CSS minification** → Smaller style files
- **JavaScript minification** → Smaller code files

### Animation Performance

- **Mobile animations are 30% faster** than desktop
- **Stagger delays reduced on mobile** for better perceived speed
- **GPU acceleration enabled** for smooth scrolling
- **Reduced animation complexity** on low-end devices

### Network Performance

- **Preconnect to fonts** → Faster font loading
- **DNS prefetch** → Faster third-party resource loading
- **Lazy image loading** → Fewer bytes downloaded initially
- **Async image decoding** → Doesn't block page render

### Mobile Optimization

- **Touch-friendly buttons** → Minimum 44×44px (iOS/Android standard)
- **Responsive fonts** → Scales automatically based on screen size
- **Font smoothing** → Antialiased text rendering
- **Contains paint optimization** → Limits painting to what's needed

---

## 📝 Code Comments

Every important function includes comments explaining:

1. **What it does** (purpose)
2. **Why it matters** (performance impact)
3. **How to use it** (for developers)

Example:

```typescript
/**
 * Get animation duration based on device and user preferences
 * Mobile: 70% of desktop duration (faster)
 * Reduced motion: 0 (no animation)
 */
export const getAnimationDuration = (defaultDuration: number): number => {
  // ... implementation
};
```

---

## 🔄 Development Workflow

### Running Locally

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Create production build
npm run deploy       # Deploy to GitHub Pages
```

### Building for Production

1. Code gets minified (smaller)
2. Unused code is removed (smaller)
3. Code is split into chunks (faster loading)
4. Images are optimized (smaller)

---

## 🛠️ Accessibility Features

### Respects User Preferences

- `prefers-reduced-motion` → Disables animations
- `prefers-color-scheme` → Adapts to dark/light mode preference
- `color-contrast` → Text is readable for color-blind users

### Mobile Friendly

- Touch targets are large enough (44px minimum)
- Fonts are readable on small screens
- No horizontal scrolling needed

### Semantic HTML

- Proper heading hierarchy (H1, H2, H3)
- Links have descriptive text
- Images have alt text

---

## ✅ Code Quality

### Linting

All code follows ESLint rules to ensure:

- No unused variables
- Consistent code style
- No potential bugs
- Proper type usage (TypeScript)

### No Errors

✓ Build passes without errors
✓ No console errors
✓ All types are properly defined

---

## 🚨 If Something Breaks

### Common Issues

**Page loads slow:**

- Check `src/lib/animation-utils.ts` → Disable unnecessary animations
- Check `src/App.tsx` → Ensure image optimization is working
- Check network tab → Are all assets loading?

**Animations look jerky:**

- Check if user has `prefers-reduced-motion` enabled
- Check browser console for JavaScript errors
- On mobile, animations are intentionally slower for performance

**Images not loading:**

- Check `src/App.tsx` → Image paths must be correct
- Check `src/index.css` → Ensure image CSS isn't hiding them
- Check browser console → Any error messages?

---

## 📚 Resources

- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Web Performance**: https://web.dev/performance/

---

## 👥 For Non-Technical People

**In Simple Terms:**

1. **Components** = Building blocks (Navbar, Pages, Buttons)
2. **Hooks** = Memory/superpowers for components
3. **Routes** = Map of pages and their URLs
4. **Animations** = Movement and transitions
5. **Build** = Process that packages code for the web
6. **Optimization** = Making things faster and smaller

Think of it like building a house:

- Components = Walls, doors, windows
- Hooks = Electrical system, plumbing
- Routes = Hallway map
- Build = Putting everything together
- Optimization = Insulation and efficiency upgrades

---

## 🎓 Questions?

Every major function has documentation explaining:

- What it does
- Why it's important
- How it works
- How to modify it

Look for comments with `/**` to start - these explain the code.
