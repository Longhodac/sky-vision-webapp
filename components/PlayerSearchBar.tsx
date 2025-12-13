import React from 'react';
import { motion } from 'framer-motion';

interface PlayerSearchBarProps {
  query: string;
  onChange: (query: string) => void;
  playerCount: number;
}

export default function PlayerSearchBar({
  query,
  onChange,
  playerCount,
}: PlayerSearchBarProps) {
  return (
    <div className="flex-1">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search players by name or #..."
          className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 pl-10 text-text-main placeholder-text-sub focus:outline-none focus:border-primary transition-colors"
        />
        <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-text-sub">
          search
        </span>
        {query && (
          <motion.button
            onClick={() => onChange('')}
            whileHover={{ scale: 1.1 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-disabled hover:text-text-sub"
          >
            <span className="material-symbols-outlined">close</span>
          </motion.button>
        )}
      </div>
      <p className="text-xs text-text-sub mt-2">
        {playerCount} player{playerCount !== 1 ? 's' : ''} found
      </p>
    </div>
  );
}
