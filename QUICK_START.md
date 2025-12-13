# Quick Start Guide - Scout Cart System

## Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```

### Step 3: Open the Application
Navigate to `http://localhost:5173` in your browser.

## Using the Scout Cart

### Adding Players to Your Cart

1. **Browse Players:**
   - Scroll down to the "Player Browser" section on the Dashboard
   - You'll see all players displayed as cards with their stats

2. **Filter Players (Optional):**
   - Click the filter icon (⚙️) to show advanced filters
   - Select a position (WR or DB)
   - Adjust the minimum PER-10 threshold slider
   - Choose how to sort (by PER-10, IQ, or alphabetically)

3. **Search for Specific Players (Optional):**
   - Use the search bar at the top
   - Search by name, team, or jersey number
   - Results update in real-time

4. **Add to Cart:**
   - Click "Add to Cart" on any player card
   - The cart icon in the header will show a badge with the count
   - The cart sidebar will open automatically

### Managing Your Cart

1. **View Cart:**
   - Click the shopping cart button in the header anytime
   - The sidebar slides in from the right

2. **Add Notes:**
   - Each player in the cart has a notes field
   - Type your scouting observations
   - Notes are automatically saved

3. **Review Stats:**
   - See total players in cart
   - View average PER-10 across all selected players
   - Check quick stats for each player

4. **Remove Players:**
   - Click the X button on any player card in the cart
   - Player is immediately removed

### Saving Your Work

#### Option 1: Save Session
```
1. Click "Edit" next to the cart name
2. Give your session a meaningful name
   Example: "2024 WR Draft Prospects"
3. Click "Save Session"
4. Session is saved to your browser's localStorage
```

#### Option 2: Export to CSV
```
1. Click "Export to CSV" button
2. File downloads automatically
3. Open in Excel, Google Sheets, or any CSV reader
4. Share with your team or import into other tools
```

### Starting Fresh

**Clear Cart:**
```
1. Click "Clear Cart" button (red)
2. Confirm the action
3. Cart is emptied
4. Start a new scouting session
```

## Tips for Efficient Scouting

### Workflow Example

```
Morning Session: Wide Receivers
├── 1. Set filters → Position: WR, Min PER-10: 8.0
├── 2. Sort by PER-10 (highest first)
├── 3. Review top performers
├── 4. Add promising players to cart
├── 5. Add detailed notes on each
├── 6. Export to CSV → "Morning WR Review.csv"
└── 7. Clear cart for next session

Afternoon Session: Defensive Backs
├── 1. Set filters → Position: DB, Min PER-10: 7.5
├── 2. Sort by AFTERSNAP IQ
├── 3. Add high-IQ DBs to cart
├── 4. Compare with team needs
├── 5. Save session → "DB Prospects - High IQ"
└── 6. Share CSV with coaching staff
```

### Keyboard Shortcuts (Coming Soon)
- `Ctrl/Cmd + K`: Open search
- `Ctrl/Cmd + B`: Toggle cart
- `Ctrl/Cmd + S`: Save session
- `Ctrl/Cmd + E`: Export CSV

## Common Tasks

### Find All Elite Wide Receivers
```
1. Click filter button
2. Position: WR
3. Min PER-10: 9.0
4. Sort: PER-10 Score
5. Add top performers to cart
```

### Compare Players by IQ
```
1. Search for specific players
2. Add them to cart
3. View cart stats (shows average IQ)
4. Review individual IQ scores
5. Add comparison notes
```

### Create a Draft Board
```
1. Filter by position
2. Sort by PER-10
3. Add top 20 players to cart
4. Number them in notes (1-20)
5. Export as "2024 Draft Board - WR.csv"
```

### Scout a Specific Team
```
1. Use search bar
2. Type team name (e.g., "Cowboys")
3. Review all players from that team
4. Add standouts to cart
5. Save session: "Cowboys Scouting Report"
```

## Troubleshooting

### Cart Not Saving
- **Issue:** Session doesn't save
- **Solution:** Check browser localStorage permissions
- **Workaround:** Export to CSV instead

### Cart Count Incorrect
- **Issue:** Badge shows wrong number
- **Solution:** Refresh the page
- **Prevention:** Don't duplicate players

### CSV Export Not Working
- **Issue:** Download doesn't start
- **Solution:** Check browser download permissions
- **Workaround:** Copy data manually from cart

### Filters Not Working
- **Issue:** Players not filtering
- **Solution:** Click "Reset" and try again
- **Check:** Make sure players have scores (some may not have been tagged yet)

## Understanding the Stats

### PER-10 Score
- **Range:** 0-10
- **Calculation:** `((Release Speed + Route Fidelity + Leverage) / 3) * 1.05`
- **Good:** 8.0+
- **Elite:** 9.0+

### AFTERSNAP IQ
- **Range:** 0-100 (percentage)
- **Calculation:** `PER-10 * 10.8`
- **Good:** 85+
- **Elite:** 92+

### Total Plays Tagged
- **Definition:** Number of plays scored for this player
- **More plays:** More reliable data
- **Minimum recommended:** 10+ plays for accurate assessment

## Best Practices

### 1. Consistent Naming
```
✅ Good: "2024-01-15 WR Draft Top 10"
❌ Bad: "my cart"
```

### 2. Detailed Notes
```
✅ Good: "Excellent route runner, wins with technique. Speed: 4.5. Needs: RAC improvement"
❌ Bad: "good player"
```

### 3. Regular Exports
```
✅ Export after each session
✅ Name files with dates
✅ Keep organized folders
❌ Rely only on localStorage
```

### 4. Use Filters Strategically
```
✅ Start broad, then narrow down
✅ Use multiple criteria
✅ Save time with smart filtering
❌ Scroll through all players manually
```

## What's Next?

After mastering the cart system, explore:

1. **Player Profiles:** Click any player card to view detailed analytics
2. **Scoring Console:** Add new play scores to build data
3. **Session Summary:** Review all tagged plays and export reports
4. **Comparison View:** Compare multiple players side-by-side (coming soon)

## Need Help?

- **Documentation:** See CART_SYSTEM.md for technical details
- **Issues:** Check browser console for errors
- **Support:** Contact development team

---

**Happy Scouting!** 🏈

