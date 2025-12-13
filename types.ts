export enum View {
    DASHBOARD = 'DASHBOARD',
    PLAYER_PROFILE = 'PLAYER_PROFILE',
    SCORING = 'SCORING',
    COMPARISON = 'COMPARISON',
    SUMMARY = 'SUMMARY'
}

export interface Metric {
    label: string;
    value: number;
    delta?: number;
    unit?: string;
    description?: string;
}

export interface Player {
    id: string;
    name: string;
    team: string;
    position: 'WR' | 'DB';
    number: number;
    avatar: string;
    height: string;
    weight: string;
    college: string;
    per10: number;
    aftersnapIQ: number;
}

// Supabase Database Schema
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      players: {
        Row: {
          id: number
          created_at: string
          name: string
          team: string
          position: string
          number: number
          avatar_url: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          team: string
          position: string
          number: number
          avatar_url?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          team?: string
          position?: string
          number?: number
          avatar_url?: string | null
        }
        Relationships: []
      }
      scores: {
        Row: {
          id: number
          created_at: string
          play_id: number
          player_id: number
          release_speed: number | null
          route_fidelity: number | null
          leverage: number | null
          per_10_score: number | null
          notes: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          play_id: number
          player_id: number
          release_speed?: number | null
          route_fidelity?: number | null
          leverage?: number | null
          per_10_score?: number | null
          notes?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          play_id?: number
          player_id?: number
          release_speed?: number | null
          route_fidelity?: number | null
          leverage?: number | null
          per_10_score?: number | null
          notes?: string | null
        }
        Relationships: []
      }
      plays: {
        Row: {
          id: number
          created_at: string
          game_id: number
          quarter: number | null
          time_remaining: string | null
          down: number | null
          distance: number | null
          defensive_scheme: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          game_id: number
          quarter?: number | null
          time_remaining?: string | null
          down?: number | null
          distance?: number | null
          defensive_scheme?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          game_id?: number
          quarter?: number | null
          time_remaining?: string | null
          down?: number | null
          distance?: number | null
          defensive_scheme?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
