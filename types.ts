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
