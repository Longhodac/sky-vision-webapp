# SKY VISION – Ball IQ PER-10

A responsive web application for NFL analytics interns and scouts to evaluate Receivers and Defensive Backs using Ball IQ PER-10 and AFTERSNAP IQ models.

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- A Gemini API key ([Get one here](https://ai.google.dev/))

### Installation & Setup

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone <your-repo-url>
   cd sky-vision-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your API key**
   ```bash
   nothing yet
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
sky-vision-webapp/
├── components/          # Reusable UI components
│   └── Sidebar.tsx     # Navigation sidebar component
├── views/              # Main application views/pages
│   ├── Dashboard.tsx   # Overview and analytics dashboard
│   ├── PlayerProfile.tsx  # Individual player statistics
│   ├── ScoringConsole.tsx # Real-time scoring interface
│   ├── Comparison.tsx  # Player comparison view
│   └── SessionSummary.tsx # Session summary and reports
├── App.tsx             # Main application component & routing
├── index.tsx           # Application entry point
├── types.ts            # TypeScript type definitions
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
└── .env.local          # Environment variables (API keys)
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready bundle
- `npm run preview` - Preview production build locally

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Recharts** - Data visualization and charts
- **Tailwind CSS** - Utility-first styling (via inline classes)

## Application Views

The app includes five main views accessible via the sidebar:

1. **Dashboard** - Overview of player analytics and key metrics
2. **Player Profile** - Detailed individual player statistics and performance
3. **Scoring Console** - Real-time scoring interface for live game analysis
4. **Comparison** - Side-by-side player performance comparison
5. **Session Summary** - Summary reports and session analytics

## Development

### Adding New Components
Create new components in the [components/](components/) directory:
```tsx
// components/YourComponent.tsx
export default function YourComponent() {
  return <div>Your component</div>;
}
```

### Adding New Views
Create new views in the [views/](views/) directory and add them to [App.tsx](App.tsx):

1. Create your view file in `views/`
2. Add a new enum value to `View` in [types.ts](types.ts)
3. Import and add the view case in [App.tsx](App.tsx)
4. Update [Sidebar.tsx](components/Sidebar.tsx) if needed

## Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port
- Or specify a custom port: `npm run dev -- --port 3000`


**Build errors?**
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version: `node --version` (should be v16+)

