import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScoutCartStore } from '../stores/scoutCartStore';

interface ScoutCartProps {
  onClose: () => void;
}

export default function ScoutCart({ onClose }: ScoutCartProps) {
  const {
    cart,
    cartName,
    setCartName,
    removePlayerFromCart,
    updatePlayerNotes,
    saveCartSession,
    exportCartAsCSV,
    getCartStats,
    clearCart,
  } = useScoutCartStore();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const stats = getCartStats();

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveSession = async () => {
    setIsSaving(true);
    try {
      const sessionId = await saveCartSession();
      showNotification(`Cart saved as ${cartName}`);
    } catch (error) {
      showNotification('Failed to save cart session');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExport = () => {
    exportCartAsCSV();
    showNotification('Cart exported to CSV');
  };

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-96 bg-bg-card border-l border-border-subtle overflow-auto flex flex-col h-full"
    >
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 left-4 bg-status-good text-white px-4 py-3 rounded-lg shadow-lg z-50"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="p-6 border-b border-border-subtle sticky top-0 bg-bg-card z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-text-main">Scout Cart</h2>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            className="text-2xl text-text-sub hover:text-text-main"
          >
            ✕
          </motion.button>
        </div>

        {/* Cart name editable */}
        <div className="space-y-2">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                value={cartName}
                onChange={(e) => setCartName(e.target.value)}
                className="flex-1 bg-bg-elevated border border-border-subtle rounded px-3 py-2 text-text-main focus:outline-none focus:border-primary"
              />
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-2 bg-primary text-white rounded font-medium hover:bg-primary-hover"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-main">{cartName}</h3>
              <motion.button
                onClick={() => setIsEditing(true)}
                whileHover={{ scale: 1.1 }}
                className="text-sm text-text-sub hover:text-primary"
              >
                Edit
              </motion.button>
            </div>
          )}
        </div>

        {/* Stats summary */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="bg-bg-elevated rounded p-2">
            <p className="text-text-sub text-xs">Total Players</p>
            <p className="text-primary text-lg font-bold">{stats.totalPlayers}</p>
          </div>
          <div className="bg-bg-elevated rounded p-2">
            <p className="text-text-sub text-xs">Avg PER-10</p>
            <p className="text-primary text-lg font-bold">{stats.averageMetrics.avg_per_10.toFixed(1)}</p>
          </div>
        </div>
      </div>

      {/* Players list */}
      <div className="flex-1 overflow-auto">
        {cart.length === 0 ? (
          <div className="p-6 text-center">
            <span className="material-symbols-outlined text-6xl text-text-disabled mb-4 block">shopping_cart</span>
            <p className="text-text-sub">Cart is empty</p>
            <p className="text-text-disabled text-sm mt-2">Add players from the dashboard to get started</p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {cart.map((player) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-bg-elevated border border-border-subtle rounded-lg p-3"
              >
                {/* Player header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-12 rounded-full bg-cover bg-center border-2 border-border-subtle"
                      style={{backgroundImage: player.avatar_url ? `url("${player.avatar_url}")` : 'url("https://picsum.photos/id/65/100/100")'}}
                    />
                    <div>
                      <p className="font-bold text-text-main">
                        #{player.number} {player.name}
                      </p>
                      <p className="text-xs text-text-sub">{player.position} • {player.team}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => removePlayerFromCart(player.id)}
                    whileHover={{ scale: 1.2 }}
                    className="text-lg text-text-disabled hover:text-status-red"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </motion.button>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-1 mb-2 text-xs">
                  <div className="bg-bg-card rounded px-1 py-1 text-center">
                    <p className="text-text-disabled">PER-10</p>
                    <p className="font-bold text-primary">{player.avg_per_10.toFixed(1)}</p>
                  </div>
                  <div className="bg-bg-card rounded px-1 py-1 text-center">
                    <p className="text-text-disabled">IQ</p>
                    <p className="font-bold text-primary">{player.avg_aftersnap_iq.toFixed(1)}</p>
                  </div>
                  <div className="bg-bg-card rounded px-1 py-1 text-center">
                    <p className="text-text-disabled">Plays</p>
                    <p className="font-bold text-text-main">{player.total_plays_tagged}</p>
                  </div>
                </div>

                {/* Notes */}
                <textarea
                  value={player.notes}
                  onChange={(e) => updatePlayerNotes(player.id, e.target.value)}
                  placeholder="Add scout notes..."
                  className="w-full bg-bg-card border border-border-subtle rounded px-2 py-1 text-xs text-text-main placeholder-text-disabled focus:outline-none focus:border-primary resize-none"
                  rows={2}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer actions */}
      {cart.length > 0 && (
        <div className="p-4 border-t border-border-subtle space-y-2 sticky bottom-0 bg-bg-card">
          <motion.button
            onClick={handleSaveSession}
            disabled={isSaving}
            whileHover={{ scale: !isSaving ? 1.05 : 1 }}
            whileTap={{ scale: !isSaving ? 0.95 : 1 }}
            className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">save</span>
            {isSaving ? 'Saving...' : 'Save Session'}
          </motion.button>

          <motion.button
            onClick={handleExport}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-status-good text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Export to CSV
          </motion.button>

          <motion.button
            onClick={() => {
              if (confirm('Clear all players from cart?')) {
                clearCart();
              }
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full py-2 bg-bg-elevated border border-status-red/50 text-status-red rounded-lg font-medium hover:bg-status-red/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">delete</span>
            Clear Cart
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
