import { create } from 'zustand';
import { supabase } from '../utils/supabase';

export interface CartPlayer {
  id: number;
  name: string;
  position: string;
  number: number;
  team: string;
  avatar_url: string | null;

  // Stats snapshot
  avg_per_10: number;
  avg_aftersnap_iq: number;
  total_plays_tagged: number;
  archetype_tags: string[];

  // Additional notes
  notes: string;
  addedAt: string;
}

interface ScoutCartStore {
  // State
  cart: CartPlayer[];
  cartName: string;
  isCartOpen: boolean;

  // Actions
  addPlayerToCart: (player: CartPlayer) => void;
  removePlayerFromCart: (playerId: number) => void;
  clearCart: () => void;
  setCartName: (name: string) => void;
  setIsCartOpen: (open: boolean) => void;

  // Player notes
  updatePlayerNotes: (playerId: number, notes: string) => void;

  // Cart operations
  saveCartSession: () => Promise<string>; // Returns session ID
  exportCartAsCSV: () => void;
  getCartStats: () => {
    totalPlayers: number;
    byPosition: Record<string, number>;
    averageMetrics: {
      avg_per_10: number;
      avg_aftersnap_iq: number;
    };
  };
}

export const useScoutCartStore = create<ScoutCartStore>((set, get) => ({
  cart: [],
  cartName: 'Scout Session',
  isCartOpen: false,

  addPlayerToCart: (player) => {
    const { cart } = get();
    // Prevent duplicates
    if (cart.find(p => p.id === player.id)) {
      return;
    }
    set({
      cart: [...cart, { ...player, addedAt: new Date().toISOString() }],
      isCartOpen: true, // Auto-open cart when player added
    });
  },

  removePlayerFromCart: (playerId) => {
    set({ cart: get().cart.filter(p => p.id !== playerId) });
  },

  clearCart: () => {
    set({ cart: [], cartName: 'Scout Session' });
  },

  setCartName: (name) => set({ cartName: name }),

  setIsCartOpen: (open) => set({ isCartOpen: open }),

  updatePlayerNotes: (playerId, notes) => {
    const { cart } = get();
    const updated = cart.map(p =>
      p.id === playerId ? { ...p, notes } : p
    );
    set({ cart: updated });
  },

  saveCartSession: async () => {
    const { cart, cartName } = get();
    try {
      // For now, we'll store sessions in localStorage
      // In production, this would be a Supabase table
      const sessionId = `session_${Date.now()}`;
      const session = {
        id: sessionId,
        name: cartName,
        players: cart.map(p => ({
          player_id: p.id,
          notes: p.notes,
        })),
        created_at: new Date().toISOString(),
      };

      const existingSessions = JSON.parse(localStorage.getItem('scout_sessions') || '[]');
      existingSessions.push(session);
      localStorage.setItem('scout_sessions', JSON.stringify(existingSessions));

      return sessionId;
    } catch (error) {
      console.error('Error saving cart session:', error);
      throw error;
    }
  },

  exportCartAsCSV: () => {
    const { cart, cartName } = get();

    // Create CSV headers
    const headers = [
      'Name',
      'Position',
      'Jersey #',
      'Team',
      'Avg PER-10',
      'Avg AFTERSNAP IQ',
      'Total Plays',
      'Archetypes',
      'Notes',
    ];

    // Create CSV rows
    const rows = cart.map(p => [
      p.name,
      p.position,
      p.number,
      p.team,
      p.avg_per_10.toFixed(2),
      p.avg_aftersnap_iq.toFixed(2),
      p.total_plays_tagged,
      p.archetype_tags.join('; '),
      p.notes,
    ]);

    // Combine and create CSV string
    const csv = [
      headers.join(','),
      ...rows.map(r => r.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cartName}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  },

  getCartStats: () => {
    const { cart } = get();

    if (cart.length === 0) {
      return {
        totalPlayers: 0,
        byPosition: {},
        averageMetrics: {
          avg_per_10: 0,
          avg_aftersnap_iq: 0,
        },
      };
    }

    // Count by position
    const byPosition = cart.reduce((acc, p) => {
      acc[p.position] = (acc[p.position] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Average metrics
    const avgPer10 = cart.reduce((sum, p) => sum + p.avg_per_10, 0) / cart.length;
    const avgAftersnapIQ = cart.reduce((sum, p) => sum + p.avg_aftersnap_iq, 0) / cart.length;

    return {
      totalPlayers: cart.length,
      byPosition,
      averageMetrics: {
        avg_per_10: Math.round(avgPer10 * 100) / 100,
        avg_aftersnap_iq: Math.round(avgAftersnapIQ * 100) / 100,
      },
    };
  },
}));
