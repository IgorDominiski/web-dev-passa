export interface Team {
  id: string;
  name: string;
  logo: string;
  info: string;
}

export interface Match {
  id: string;
  league: string;
  stage: string;
  round?: number;
  status: 'live' | 'scheduled' | 'finished';
  minute: number;
  startTime: string;
  venue: string;
  broadcasters: string[];
  referee?: string;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    home: number;
    away: number;
  };
  lastEvent?: {
    type: string;
    team?: string;
    minute: number;
    player?: string;
  };
  timeline: Array<{
    minute: number;
    type: string;
    team?: string;
    player?: string;
  }>;
  stats?: {
    possession: {
      home: number;
      away: number;
    };
    shots: {
      home: number;
      away: number;
    };
    shotsOnTarget: {
      home: number;
      away: number;
    };
    corners: {
      home: number;
      away: number;
    };
    fouls: {
      home: number;
      away: number;
    };
  };
}

export interface Tournament {
  id: string;
  name: string;
  teams: Team[];
  bracket?: any;
}
