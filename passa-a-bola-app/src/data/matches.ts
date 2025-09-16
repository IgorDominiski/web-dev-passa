import { Match } from '../types';

export const matchesData: Match[] = [
  {
    id: "br_fem_001",
    league: "Brasileirão Feminino",
    stage: "Final",
    round: 2,
    status: "live",
    minute: 57,
    startTime: "2025-09-11T11:00:00Z",
    venue: "Neo Química Arena",
    broadcasters: ["CBF TV", "SporTV"],
    referee: "Ana Paula Oliveira",
    homeTeam: { 
      id: "corinthians", 
      name: "Corinthians", 
      logo: "https://via.placeholder.com/50x50/1e40af/ffffff?text=COR", 
      info: "São Paulo" 
    },
    awayTeam: { 
      id: "cruzeiro", 
      name: "Cruzeiro", 
      logo: "https://via.placeholder.com/50x50/10b981/ffffff?text=CRU", 
      info: "Minas Gerais" 
    },
    score: { home: 1, away: 1 },
    lastEvent: { type: "goal", team: "Corinthians", minute: 52, player: "Amanda" },
    timeline: [
      { minute: 12, type: "goal", team: "Cruzeiro", player: "Yoreli" },
      { minute: 52, type: "goal", team: "Corinthians", player: "Amanda" }
    ],
    stats: {
      possession: { home: 58, away: 42 },
      shots: { home: 9, away: 6 },
      shotsOnTarget: { home: 4, away: 3 },
      corners: { home: 5, away: 2 },
      fouls: { home: 8, away: 10 }
    }
  },
  {
    id: "br_fem_002",
    league: "Brasileirão Feminino",
    stage: "Semifinal",
    round: 1,
    status: "scheduled",
    minute: 0,
    startTime: "2025-09-11T19:30:00Z",
    venue: "Allianz Parque",
    broadcasters: ["CBF TV"],
    homeTeam: { 
      id: "palmeiras", 
      name: "Palmeiras", 
      logo: "https://via.placeholder.com/50x50/10b981/ffffff?text=PAL", 
      info: "São Paulo" 
    },
    awayTeam: { 
      id: "sao-paulo", 
      name: "São Paulo", 
      logo: "https://via.placeholder.com/50x50/ef4444/ffffff?text=SP", 
      info: "São Paulo" 
    },
    score: { home: 0, away: 0 },
    timeline: [],
    stats: null
  },
  {
    id: "intl_fem_001",
    league: "Amistoso Internacional",
    stage: "Amistoso",
    status: "finished",
    minute: 90,
    startTime: "2025-09-10T22:00:00Z",
    venue: "Maracanã",
    broadcasters: ["OpenTV"],
    referee: "Edina Alves",
    homeTeam: { 
      id: "brasil", 
      name: "Brasil", 
      logo: "https://via.placeholder.com/50x50/1e40af/ffffff?text=BRA", 
      info: "Seleção Nacional" 
    },
    awayTeam: { 
      id: "colombia", 
      name: "Colômbia", 
      logo: "https://via.placeholder.com/50x50/ef4444/ffffff?text=COL", 
      info: "Seleção Nacional" 
    },
    score: { home: 2, away: 0 },
    lastEvent: { type: "end", minute: 90 },
    timeline: [
      { minute: 28, type: "goal", team: "Brasil", player: "Bia Zaneratto" },
      { minute: 73, type: "goal", team: "Brasil", player: "Gabi Nunes" }
    ],
    stats: {
      possession: { home: 61, away: 39 },
      shots: { home: 13, away: 5 },
      shotsOnTarget: { home: 6, away: 2 },
      corners: { home: 7, away: 1 },
      fouls: { home: 9, away: 14 }
    }
  },
  {
    id: "br_fem_003",
    league: "Brasileirão Feminino",
    stage: "Quartas de Final",
    round: 1,
    status: "live",
    minute: 23,
    startTime: "2025-09-11T16:00:00Z",
    venue: "Arena da Amazônia",
    broadcasters: ["CBF TV", "Band"],
    referee: "Fernanda Colombo",
    homeTeam: { 
      id: "flamengo", 
      name: "Flamengo", 
      logo: "https://via.placeholder.com/50x50/ef4444/ffffff?text=FLA", 
      info: "Rio de Janeiro" 
    },
    awayTeam: { 
      id: "internacional", 
      name: "Internacional", 
      logo: "https://via.placeholder.com/50x50/1e40af/ffffff?text=INT", 
      info: "Rio Grande do Sul" 
    },
    score: { home: 0, away: 1 },
    lastEvent: { type: "goal", team: "Internacional", minute: 18, player: "Diany" },
    timeline: [
      { minute: 18, type: "goal", team: "Internacional", player: "Diany" }
    ],
    stats: {
      possession: { home: 45, away: 55 },
      shots: { home: 3, away: 7 },
      shotsOnTarget: { home: 1, away: 3 },
      corners: { home: 2, away: 4 },
      fouls: { home: 6, away: 4 }
    }
  },
  {
    id: "intl_fem_002",
    league: "Copa América Feminina",
    stage: "Final",
    round: 1,
    status: "scheduled",
    minute: 0,
    startTime: "2025-09-15T21:00:00Z",
    venue: "Estádio Nacional",
    broadcasters: ["CBF TV", "SporTV", "Band"],
    homeTeam: { 
      id: "brasil", 
      name: "Brasil", 
      logo: "https://via.placeholder.com/50x50/1e40af/ffffff?text=BRA", 
      info: "Seleção Nacional" 
    },
    awayTeam: { 
      id: "argentina", 
      name: "Argentina", 
      logo: "https://via.placeholder.com/50x50/10b981/ffffff?text=ARG", 
      info: "Seleção Nacional" 
    },
    score: { home: 0, away: 0 },
    timeline: [],
    stats: null
  }
];
