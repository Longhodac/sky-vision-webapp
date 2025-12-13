import React from 'react';
import { motion } from 'framer-motion';

interface FilterPanelProps {
  filter: {
    position: string | null;
    minPerformance: number;
  };
  onFilterChange: (filter: Partial<FilterPanelProps['filter']>) => void;
  sort: string;
  onSortChange: (sort: string) => void;
}

export default function FilterPanel({
  filter,
  onFilterChange,
  sort,
  onSortChange,
}: FilterPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-bg-elevated border border-border-subtle rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {/* Position Filter */}
      <div>
        <label className="block text-sm font-medium text-text-main mb-2">
          Position
        </label>
        <select
          value={filter.position || ''}
          onChange={(e) => onFilterChange({ position: e.target.value || null })}
          className="w-full bg-bg-card border border-border-subtle rounded px-3 py-2 text-text-main focus:outline-none focus:border-primary"
        >
          <option value="">All Positions</option>
          <option value="WR">WR (Wide Receiver)</option>
          <option value="DB">DB (Defensive Back)</option>
        </select>
      </div>

      {/* Performance Threshold */}
      <div>
        <label className="block text-sm font-medium text-text-main mb-2">
          Min Performance
        </label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={filter.minPerformance || 0}
          onChange={(e) => onFilterChange({ minPerformance: parseFloat(e.target.value) })}
          className="w-full"
        />
        <p className="text-xs text-text-sub mt-1">{filter.minPerformance || 0}+ PER-10</p>
      </div>

      {/* Sort */}
      <div>
        <label className="block text-sm font-medium text-text-main mb-2">
          Sort By
        </label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-bg-card border border-border-subtle rounded px-3 py-2 text-text-main focus:outline-none focus:border-primary"
        >
          <option value="per_10">PER-10 Score</option>
          <option value="aftersnap_iq">AFTERSNAP IQ</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      {/* Quick Actions */}
      <div className="flex items-end gap-2">
        <motion.button
          onClick={() => {
            onFilterChange({ position: null, minPerformance: 0 });
            onSortChange('per_10');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 px-4 py-2 bg-bg-card border border-border-subtle rounded text-text-main font-medium hover:border-primary transition-colors"
        >
          Reset
        </motion.button>
      </div>
    </motion.div>
  );
}
