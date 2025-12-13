import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PlayerBrowserCardProps {
  player: {
    id: number;
    name: string;
    position: string;
    number: number;
    team: string;
    avatar_url: string | null;
    avg_per_10?: number;
    avg_aftersnap_iq?: number;
    total_plays_tagged?: number;
    archetype_tags?: string[];
  };
  isInCart: boolean;
  onAddToCart: () => void;
  onViewProfile?: () => void;
}

export default function PlayerBrowserCard({
  player,
  isInCart,
  onAddToCart,
  onViewProfile,
}: PlayerBrowserCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-bg-elevated border border-border-subtle rounded-xl overflow-hidden cursor-pointer hover:border-primary transition-all"
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 relative">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="size-12 rounded-full bg-cover bg-center border-2 border-white/10"
              style={{backgroundImage: player.avatar_url ? `url("${player.avatar_url}")` : 'url("https://picsum.photos/id/65/100/100")'}}
            />
            <div>
              <h3 className="text-lg font-bold text-text-main">
                #{player.number} {player.name}
              </h3>
              <p className="text-sm text-text-sub">{player.position} • {player.team}</p>
            </div>
          </div>
          {isInCart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-status-good font-bold text-sm flex items-center gap-1 bg-status-good/10 px-2 py-1 rounded-full"
            >
              <span className="material-symbols-outlined text-sm">check_circle</span>
              In Cart
            </motion.div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'PER-10', value: player.avg_per_10?.toFixed(1) || '—' },
            { label: 'IQ', value: player.avg_aftersnap_iq?.toFixed(1) || '—' },
            { label: 'Plays', value: player.total_plays_tagged?.toString() || '—' },
          ].map((stat) => (
            <div key={stat.label} className="bg-bg-card rounded p-2 text-center">
              <p className="text-xs text-text-sub">{stat.label}</p>
              <p className="text-lg font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Archetypes */}
        {player.archetype_tags && player.archetype_tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {player.archetype_tags.slice(0, 2).map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {player.archetype_tags.length > 2 && (
              <span className="text-xs text-text-sub">
                +{player.archetype_tags.length - 2} more
              </span>
            )}
          </div>
        )}

        {/* Add to cart button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isInCart}
          className={`w-full py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
            isInCart
              ? 'bg-status-good/20 text-status-good opacity-70 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary-hover'
          }`}
        >
          {isInCart ? (
            <>
              <span className="material-symbols-outlined text-lg">check</span>
              Added
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
              Add to Cart
            </>
          )}
        </motion.button>
      </div>

      {/* Show more */}
      {showDetails && onViewProfile && (
        <motion.div
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: 500, opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-border-subtle p-4 bg-bg-card"
        >
          <p className="text-xs text-text-sub mb-2">Total Plays Tagged</p>
          <p className="text-lg font-bold text-text-main mb-4">
            {player.total_plays_tagged || 0}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProfile();
            }}
            className="text-sm text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
          >
            View Full Profile
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
