# Sky Vision Scout Cart System

## Overview

The Sky Vision app has been enhanced with a **Scout Cart System** that transforms it from a simple analytics dashboard into a powerful stats-based player scouting platform. Scouts and analysts can now browse players, filter by performance metrics, add players to a cart, take notes, and export their selections.

## Features Implemented

### 1. Scout Cart Store (Zustand)
**File:** `stores/scoutCartStore.ts`

A centralized state management store for the cart system with the following capabilities:

- **Cart Management:**
  - Add/remove players from cart
  - Prevent duplicate entries
  - Clear entire cart
  - Auto-open cart when players are added

- **Player Notes:**
  - Add custom scout notes to each player in cart
  - Notes are saved with each player

- **Cart Sessions:**
  - Save cart sessions to localStorage
  - Name and organize scouting sessions
  - Retrieve saved sessions

- **Export Functionality:**
  - Export cart to CSV format
  - Includes all player stats and notes
  - Auto-downloads with timestamp

- **Cart Statistics:**
  - Total players in cart
  - Players grouped by position
  - Average PER-10 score
  - Average AFTERSNAP IQ

### 2. Scout Cart Sidebar Component
**File:** `components/ScoutCart.tsx`

An animated sidebar that displays the cart contents with:

- **Animated Entry/Exit:**
  - Smooth slide-in from right
  - Framer Motion animations

- **Cart Header:**
  - Editable cart name
  - Quick stats summary (total players, avg PER-10)

- **Player Cards:**
  - Player avatar, name, position, team
  - Quick stats display (PER-10, IQ, Plays)
  - Individual notes textarea
  - Remove button

- **Action Buttons:**
  - Save Session (stores to localStorage)
  - Export to CSV
  - Clear Cart (with confirmation)

- **Empty State:**
  - Helpful message when cart is empty
  - Shopping cart icon

### 3. Player Browser Card Component
**File:** `components/PlayerBrowserCard.tsx`

Redesigned player cards for the browser with:

- **Visual Design:**
  - Gradient header background
  - Player avatar
  - Position and team badges
  - Hover effects with scale animation

- **Stats Display:**
  - PER-10, IQ, and Total Plays
  - Color-coded stats

- **Cart Integration:**
  - "Add to Cart" button
  - "Added" state with checkmark
  - Disabled state when already in cart

- **Profile Navigation:**
  - Click to view full player profile
  - Expandable details section
  - Smooth transitions

### 4. Player Search Bar Component
**File:** `components/PlayerSearchBar.tsx`

Real-time search functionality:

- **Search Input:**
  - Search by player name, team, or jersey number
  - Live filtering as you type
  - Clear button (X) when search is active

- **Results Counter:**
  - Shows number of players found
  - Updates in real-time

### 5. Filter Panel Component
**File:** `components/FilterPanel.tsx`

Advanced filtering and sorting:

- **Position Filter:**
  - All Positions / WR / DB
  - Dropdown selection

- **Performance Threshold:**
  - Slider from 0-10
  - Filter by minimum PER-10 score
  - Shows current threshold value

- **Sort Options:**
  - Sort by PER-10 Score (default)
  - Sort by AFTERSNAP IQ
  - Sort alphabetically

- **Reset Button:**
  - One-click reset of all filters

### 6. Enhanced Dashboard
**File:** `views/Dashboard.tsx`

The Dashboard has been updated with cart integration:

- **Cart Button in Header:**
  - Shopping cart icon
  - Badge showing cart count
  - Animated badge appearance
  - Opens/closes cart sidebar

- **Player Browser Section:**
  - Replaces old player selection grid
  - Uses new PlayerBrowserCard components
  - Integrated search and filters
  - Staggered animation on load

- **Filter/Sort Logic:**
  - Filters by position, search query, and performance
  - Sorts results based on selected criteria
  - Real-time updates

- **Cart Actions:**
  - Add players to cart from cards
  - View cart status
  - Quick access to cart operations

## User Journey

### 1. Browse Players
1. Open the Sky Vision Dashboard
2. Scroll to "Player Browser" section
3. See all players with their stats displayed

### 2. Filter & Search
1. Click the filter button (tune icon)
2. Select position (WR/DB)
3. Adjust minimum PER-10 threshold
4. Choose sort order
5. Use search bar to find specific players

### 3. Add to Cart
1. Click "Add to Cart" on any player card
2. Cart button badge updates with count
3. Cart automatically opens
4. Player appears in cart sidebar

### 4. Manage Cart
1. View all selected players in cart
2. Add notes to each player
3. Review aggregate stats
4. Remove unwanted players

### 5. Save or Export
1. **Save Session:**
   - Edit cart name
   - Click "Save Session"
   - Session stored in localStorage

2. **Export to CSV:**
   - Click "Export to CSV"
   - CSV file downloads automatically
   - Includes: Name, Position, Jersey #, Team, Stats, Archetypes, Notes

## Technical Implementation

### Dependencies Added
```json
{
  "zustand": "^latest",
  "framer-motion": "^latest"
}
```

### State Management
- **Zustand Store:** Lightweight, hook-based state management
- **No Redux:** Simpler architecture for this use case
- **LocalStorage:** Cart sessions persisted locally

### Animations
- **Framer Motion:** All animations and transitions
- **Cart Sidebar:** Slide-in/out with opacity
- **Player Cards:** Staggered fade-in on load
- **Buttons:** Scale on hover/tap
- **Notifications:** Slide down from top

### Data Flow
```
DataContext (Supabase)
  ↓
Dashboard Component
  ↓
getPlayersWithScores()
  ↓
Filter & Sort Logic
  ↓
PlayerBrowserCard Components
  ↓
Add to Cart → ScoutCartStore
  ↓
ScoutCart Sidebar
  ↓
Export CSV / Save Session
```

### Type Safety
- All components fully typed with TypeScript
- CartPlayer interface for cart items
- PlayerWithScores from DataContext
- Proper prop types throughout

## File Structure

```
sky-vision-webapp/
├── stores/
│   └── scoutCartStore.ts          # Zustand cart store
├── components/
│   ├── ScoutCart.tsx              # Cart sidebar component
│   ├── PlayerBrowserCard.tsx     # Player card for browser
│   ├── PlayerSearchBar.tsx       # Search input component
│   └── FilterPanel.tsx           # Filter/sort panel
└── views/
    └── Dashboard.tsx             # Updated with cart integration
```

## Future Enhancements

### Potential Features (Not Yet Implemented)
1. **Backend Integration:**
   - Save sessions to Supabase instead of localStorage
   - Share sessions with team members
   - Session history and versioning

2. **Player Comparison:**
   - Side-by-side comparison of cart players
   - Radar charts comparing stats
   - Export comparison reports

3. **Archetype Tagging:**
   - Auto-tag players with archetypes
   - Filter by archetype
   - Custom archetype creation

4. **Advanced Analytics:**
   - Cart-level analytics dashboard
   - Trend analysis across cart
   - Position group averages

5. **Collaboration:**
   - Team-based carts
   - Comments and discussions
   - Assignment of players to scouts

6. **Mobile Optimization:**
   - Mobile-specific cart UI
   - Swipe gestures
   - Touch-optimized cards

## CSV Export Format

The exported CSV includes the following columns:

```csv
Name, Position, Jersey #, Team, Avg PER-10, Avg AFTERSNAP IQ, Total Plays, Archetypes, Notes
```

Example:
```csv
"John Doe","WR",18,"Team A","8.50","91.80",25,"Route Runner; Separator","Great hands, needs speed work"
```

## Usage Tips

1. **Efficient Scouting:**
   - Use filters to narrow down candidates
   - Add players to cart as you evaluate
   - Take notes immediately while fresh

2. **Session Management:**
   - Name sessions by purpose (e.g., "2024 Draft - WR Top 10")
   - Save sessions before clearing cart
   - Export before making major changes

3. **Performance:**
   - Cart shows average stats automatically
   - Use this to gauge overall cart quality
   - Compare against team needs

4. **Notes Best Practices:**
   - Be specific and actionable
   - Include strengths and weaknesses
   - Reference specific plays/games

## Browser Compatibility

- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari, Chrome Mobile
- **Required:** JavaScript enabled, LocalStorage available

## Known Limitations

1. **LocalStorage Limit:**
   - Cart sessions stored in browser localStorage
   - Limited to ~5-10MB total
   - Clear old sessions if limit reached

2. **No Cloud Sync:**
   - Sessions are device-specific
   - Export CSVs for cross-device work

3. **CSV Only:**
   - Currently only CSV export
   - No PDF or other formats yet

## Support & Feedback

For issues or feature requests, please contact the development team or file an issue in the project repository.

---

**Version:** 1.0.0
**Last Updated:** December 2024
**Author:** Sky Vision Development Team
