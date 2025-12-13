# SKY VISION – Ball IQ PER-10

A comprehensive NFL player analytics and scouting platform built with React, TypeScript, and Supabase. Sky Vision enables scouts and analysts to evaluate Receivers and Defensive Backs using advanced performance metrics, manage scouting carts, and generate detailed reports.

## 🎯 Overview

Sky Vision transforms raw football data into actionable insights through:
- **PER-10 Scoring System**: Proprietary metric combining Release Speed, Route Fidelity, and Leverage
- **AFTERSNAP IQ Rating**: Intelligence-based performance evaluation (0-100 scale)
- **Scout Cart System**: Build and manage player prospect lists with notes and exports
- **Real-time Analytics**: Live data visualization and performance tracking

---

## ✅ Current Features

### Dashboard & Analytics
- [x] **Dynamic Dashboard** - Real-time overview of player performance metrics
- [x] **Target Profile Card** - Spotlight featured player with selectable dropdown
- [x] **Player Selector** - Choose any player to display in Target Profile
- [x] **Performance Metrics Display** - PER-10 Avg, IQ Score, Release Speed, Route Fidelity, Leverage
- [x] **Pillar Breakdown Visualization** - Radar chart showing 6 key performance pillars
- [x] **Performance Timeline** - Quarter-by-quarter play visualization
- [x] **Metric Distribution Charts** - Bar charts for pillar performance
- [x] **Smart Highlights Feed** - Recent score activity with real-time updates

### Player Browser & Search
- [x] **Player Browser Grid** - Card-based layout with all players
- [x] **Real-time Search** - Filter by name, team, or jersey number
- [x] **Advanced Filtering**
  - [x] Position filter (WR/DB/All)
  - [x] Performance threshold slider (min PER-10)
  - [x] Search query filtering
- [x] **Sorting Options**
  - [x] Sort by PER-10 Score
  - [x] Sort by AFTERSNAP IQ
  - [x] Sort alphabetically
- [x] **Player Cards** - Detailed cards showing stats, position, team
- [x] **Staggered Load Animation** - Cards animate in with delay
- [x] **Click to View Profile** - Navigate to detailed player profile

### Scout Cart System 🛒
- [x] **Shopping Cart Functionality** - Add/remove players to cart
- [x] **Cart Badge Counter** - Shows number of players in cart with animation
- [x] **Animated Sidebar** - Smooth slide-in cart with Framer Motion
- [x] **Player Notes** - Add scouting notes to each player in cart
- [x] **Cart Statistics**
  - [x] Total players in cart
  - [x] Average PER-10 score across cart
  - [x] Players by position breakdown
- [x] **Session Management** - Save cart sessions to localStorage
- [x] **Editable Cart Name** - Rename scouting sessions for organization
- [x] **CSV Export** - Download cart data with all stats and notes
- [x] **Clear Cart** - Remove all players with confirmation dialog
- [x] **Empty State** - Helpful message when cart is empty

### Player Profile
- [x] **Detailed Player View** - Comprehensive analytics for individual players
- [x] **Player Stats Display** - PER-10, IQ, Total Snaps, Avg metrics
- [x] **Player Avatar** - Visual player identification
- [x] **Sky Vision Profile** - Radar chart visualization
- [x] **Performance Metrics** - Release Speed, Route Fidelity, Leverage with progress bars
- [x] **Quick Instinct Tags** - Player archetype badges
- [x] **Breadcrumb Navigation** - Easy navigation back to dashboard

### Scoring Console
- [x] **Play-by-Play Scoring** - Tag individual plays with metrics
- [x] **Dynamic Dropdowns** - Select player and play from database
- [x] **Real-time Calculations** - PER-10 and IQ computed live as you adjust sliders
- [x] **Metric Sliders** - Adjust Release Speed, Route Fidelity, Leverage (1-10 scale)
- [x] **Play Context Display** - Game ID, Quarter, Down & Distance, Defensive Scheme
- [x] **Save to Database** - Submit scores to Supabase with one click
- [x] **Auto-refresh** - Context refreshes after score submission
- [x] **Visual Feedback** - Live preview of calculated scores

### Session Summary
- [x] **Session Overview** - Complete tagging session summary
- [x] **Key Statistics**
  - [x] Total plays annotated
  - [x] Unique players tagged
  - [x] Quick Instinct tags (PER-10 ≥ 9.0)
  - [x] Red flags (PER-10 < 6.0)
- [x] **Player Performance Table** - Top 10 players ranked by PER-10
- [x] **Export Preview** - CSV schema visualization
- [x] **Session Metadata** - Date, time, session ID

### Data & Backend
- [x] **Supabase Integration** - Cloud database for all data persistence
- [x] **React Context API** - Global state management for player/score data
- [x] **Zustand Store** - Lightweight scout cart state management
- [x] **TypeScript** - Fully typed codebase with strict mode
- [x] **Real-time Data Sync** - Automatic updates from database
- [x] **Business Logic Calculations**
  - [x] PER-10: `((Release Speed + Route Fidelity + Leverage) / 3) * 1.05`
  - [x] IQ Rating: `Math.min(100, Math.round(PER-10 * 10.8))`
- [x] **Helper Functions** - getTopPlayer, getPlayersWithScores, getRecentScores

### UI/UX
- [x] **Responsive Design** - Mobile, tablet, and desktop optimized
- [x] **Dark Theme** - Modern dark UI with indigo/amber accents
- [x] **Framer Motion Animations** - Smooth transitions and micro-interactions
- [x] **Material Symbols Icons** - Consistent iconography throughout
- [x] **Tailwind CSS** - Utility-first styling for rapid development
- [x] **Loading States** - Graceful loading indicators on all views
- [x] **Empty States** - Helpful messages when no data is available
- [x] **Hover Effects** - Interactive feedback on all clickable elements
- [x] **Toast Notifications** - Success/error messages for user actions

---

## 🚧 Roadmap & Future Features

### Short-term (Next Sprint)
- [ ] **Multi-player Comparison View** - Side-by-side player analytics
- [ ] **Session Summary CSV Export** - Download session reports
- [ ] **Advanced Archetype System** - Auto-tag players with playing styles (Route Runner, Deep Threat, etc.)
- [ ] **Backend Session Storage** - Move sessions from localStorage to Supabase
- [ ] **Player Profile Performance Charts** - Trend lines and historical performance graphs
- [ ] **Filter Presets** - Save and load frequently used filter combinations
- [ ] **Cart Player Reordering** - Drag-and-drop to reorder players in cart

### Medium-term (Next Quarter)
- [ ] **Game Selection Workflow** - Filter data by specific games/weeks
- [ ] **Team Analytics View** - Aggregate stats and rankings by team
- [ ] **User Authentication** - Login system with Supabase Auth
- [ ] **Role-based Access Control** - Admin, Scout, and Analyst roles
- [ ] **Shared Scout Sessions** - Collaborate with team members in real-time
- [ ] **Comments & Discussions** - Thread discussions on players and plays
- [ ] **Player Comparison Export** - Generate PDF comparison reports
- [ ] **Advanced Search** - Elasticsearch integration for fuzzy/semantic search
- [ ] **Push Notifications** - Alerts for high-performing players or threshold events
- [ ] **Archetype Filter** - Filter players by archetype tags

### Long-term (Future Versions)
- [ ] **Video Integration** - Link plays to video clips from film database
- [ ] **AI-Powered Insights** - ML recommendations for player scouting
- [ ] **Mobile Native App** - iOS and Android applications
- [ ] **Real-time Collaboration** - Live multi-user scouting sessions (like Google Docs)
- [ ] **Public API** - REST API for third-party tool integrations
- [ ] **Custom Report Builder** - Drag-and-drop report creation with templates
- [ ] **Historical Trend Analysis** - Multi-season performance tracking
- [ ] **Injury Correlation** - Link performance drops to injury data
- [ ] **Combine Data Integration** - Import 40-time, vertical, etc.
- [ ] **Draft Board Generator** - Auto-generate draft boards from cart
- [ ] **Playbook Integration** - Tag plays by route concepts/schemes

### Technical Improvements
- [ ] **Unit Tests** - Jest + React Testing Library test suite
- [ ] **E2E Tests** - Playwright or Cypress for user flow testing
- [ ] **Performance Optimization** - Code splitting, lazy loading, memoization
- [ ] **Accessibility (A11y)** - WCAG 2.1 AA compliance with keyboard navigation
- [ ] **Error Boundary** - Graceful error handling with fallback UI
- [ ] **Offline Mode** - PWA with service workers for offline access
- [ ] **CI/CD Pipeline** - GitHub Actions for automated testing and deployment
- [ ] **Analytics Tracking** - Mixpanel/PostHog for usage metrics
- [ ] **Storybook** - Component documentation and visual testing
- [ ] **Bundle Size Optimization** - Reduce from 620KB to <400KB

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))
- npm or yarn
- Supabase account ([Sign up free](https://supabase.com))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sky-vision-webapp

# Install dependencies
npm install

# Set up environment variables
# Create .env file with your Supabase credentials:
echo "VITE_SUPABASE_URL=your_supabase_url" > .env
echo "VITE_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Database Setup
Run these SQL commands in Supabase SQL Editor:

```sql
-- Create players table
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  team TEXT NOT NULL,
  number INTEGER NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create plays table
CREATE TABLE plays (
  id SERIAL PRIMARY KEY,
  game_id INTEGER NOT NULL,
  quarter INTEGER NOT NULL,
  down INTEGER,
  distance INTEGER,
  time_remaining TEXT,
  defensive_scheme TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create scores table
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  play_id INTEGER REFERENCES plays(id),
  player_id INTEGER REFERENCES players(id),
  release_speed NUMERIC,
  route_fidelity NUMERIC,
  leverage NUMERIC,
  per_10_score NUMERIC,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📁 Project Structure

```
sky-vision-webapp/
├── components/              # Reusable UI components
│   ├── FilterPanel.tsx      # Filter/sort controls for player browser
│   ├── PlayerBrowserCard.tsx # Player card with add-to-cart button
│   ├── PlayerSearchBar.tsx  # Search input with live filtering
│   ├── ScoutCart.tsx        # Cart sidebar with notes and export
│   └── Sidebar.tsx          # Main navigation sidebar
├── context/
│   └── DataContext.tsx      # Global state provider (players, scores, plays)
├── stores/
│   └── scoutCartStore.ts    # Zustand cart store (add/remove, notes, export)
├── views/                   # Main application views/pages
│   ├── Dashboard.tsx        # Main dashboard with target profile + browser
│   ├── PlayerProfile.tsx    # Individual player detailed analytics
│   ├── ScoringConsole.tsx   # Play-by-play tagging interface
│   ├── SessionSummary.tsx   # Session overview with export
│   └── Comparison.tsx       # Player comparison (WIP)
├── utils/
│   └── supabase.ts          # Supabase client configuration
├── types.ts                 # TypeScript type definitions + DB schema
├── App.tsx                  # Root component with routing
├── index.tsx                # Application entry point
├── vite.config.ts           # Vite build configuration
├── tsconfig.json            # TypeScript compiler options
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
├── CART_SYSTEM.md           # Scout cart technical docs
├── QUICK_START.md           # User guide for cart features
└── README.md                # This file
```

---

## 🛠 Technology Stack

### Frontend
- **React 19** - UI framework with new features
- **TypeScript 5.8** - Type safety and better DX
- **Vite 6** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion 12** - Animation library
- **Zustand 5** - Minimal state management
- **Recharts 3** - Chart library for data viz

### Backend
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Row-level security (RLS)
  - REST API auto-generated

### Development
- **Vite** - Dev server with HMR
- **TypeScript** - Static type checking
- **ESLint** - Code linting
- **Git** - Version control

---

## 📊 Database Schema

### Tables

#### `players`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| name | TEXT | Player full name |
| position | TEXT | WR or DB |
| team | TEXT | Team name |
| number | INTEGER | Jersey number |
| avatar_url | TEXT | Profile image URL |
| created_at | TIMESTAMP | Record creation time |

#### `plays`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| game_id | INTEGER | Game identifier |
| quarter | INTEGER | Quarter (1-4) |
| down | INTEGER | Down (1-4) |
| distance | INTEGER | Yards to first down |
| time_remaining | TEXT | Clock time remaining |
| defensive_scheme | TEXT | Coverage type |
| created_at | TIMESTAMP | Record creation time |

#### `scores`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| play_id | INTEGER | FK to plays.id |
| player_id | INTEGER | FK to players.id |
| release_speed | NUMERIC | 1-10 scale |
| route_fidelity | NUMERIC | 1-10 scale |
| leverage | NUMERIC | 1-10 scale |
| per_10_score | NUMERIC | Calculated PER-10 |
| notes | TEXT | Analyst notes |
| created_at | TIMESTAMP | Score submission time |

### Relationships
- `scores.player_id` → `players.id` (Many scores per player)
- `scores.play_id` → `plays.id` (Many scores per play)

---

## 🎨 Design System

### Color Palette
```css
--primary: #4F46E5        /* Indigo - Main brand */
--primary-hover: #4338CA  /* Darker indigo */
--secondary: #F59E0B      /* Amber - Accents */
--bg-deep: #0A0A0B        /* Deepest background */
--bg-card: #141416        /* Card background */
--bg-elevated: #1E1E21    /* Elevated elements */
--text-main: #FFFFFF      /* Primary text */
--text-sub: #A1A1AA       /* Secondary text */
--status-good: #10B981    /* Green - Success */
--status-red: #EF4444     /* Red - Error/Warning */
--pillar-eyes: #10B981    /* Green - Eyes pillar */
--pillar-s: #3B82F6       /* Blue - Separation */
--pillar-e: #8B5CF6       /* Purple - Execution */
```

### Typography
- **Font Family**: System UI font stack (Inter-like)
- **Headings**: Bold (700), tight tracking
- **Body**: Normal (400), comfortable line-height
- **Monospace**: For IDs and technical data

### Spacing Scale
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `10` = 2.5rem (40px)

---

## 📖 Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR
npm run build        # Build for production
npm run preview      # Preview production build

# Utilities
npm run lint         # Run ESLint (if configured)
npm run type-check   # TypeScript type checking
```

---

## 🧪 Testing (Planned)

Testing infrastructure coming soon:
```bash
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests
npm run test:coverage # Coverage report
```

---

## 🤝 Contributing

Contributions welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit with conventional commits (`feat:`, `fix:`, `docs:`, etc.)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention
```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code style changes (formatting, etc.)
refactor: Code refactoring
test: Add or update tests
chore: Maintenance tasks
```

---

## 📝 Documentation

- **[CART_SYSTEM.md](CART_SYSTEM.md)** - Scout cart technical documentation
- **[QUICK_START.md](QUICK_START.md)** - User guide for scout cart features

---

## 🐛 Known Issues

- Bundle size warning (>500KB) - optimization planned
- No TypeScript errors, but some implicit `any` hints
- localStorage cart sessions not synced across devices (backend storage planned)

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 👥 Team

- **Development**: Claude Sonnet 4.5 + Engineering Team
- **Design**: Sky Vision Design Team
- **Product**: Sky Vision Product Team

---

## 📧 Support

For issues, questions, or feature requests:
- **GitHub Issues**: [Create an issue](https://github.com/your-org/sky-vision/issues)
- **Email**: support@skyvision.com
- **Docs**: See CART_SYSTEM.md and QUICK_START.md

---

**Built with ❤️ for NFL scouts and analysts**

*Last updated: December 2024 | Version: 1.0.0*
