const API_URL = '../../assets/api/matches.json';

const headerEl = document.getElementById('matchHeader');
const timelineEl = document.getElementById('timeline');
const statsEl = document.getElementById('stats');

function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function percent(a,b){
  if(!b) return 0; return Math.max(0, Math.min(100, Math.round((a/(a+b))*100)));
}

function labelStatus(s){
  if(s==='live') return 'Ao vivo';
  if(s==='scheduled') return 'Agendado';
  if(s==='finished') return 'Finalizado';
  return s;
}

function formatTime(iso){
  try{const d=new Date(iso);return d.toLocaleString('pt-BR',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'})}catch(_){return ''}
}

async function load(){
  const id = getParam('id');
  if(!id){ headerEl.textContent = 'Jogo não encontrado'; return; }
  const res = await fetch(API_URL+`?t=${Date.now()}`);
  const data = await res.json();
  const match = (data.matches||[]).find(m=>m.id===id);
  if(!match){ headerEl.textContent = 'Jogo não encontrado'; return; }

  renderHeader(match);
  renderTimeline(match);
  renderStats(match);
}

function renderHeader(m){
  const progress = m.status==='live' ? Math.min(100, Math.floor((m.minute/90)*100)) : 0;
  headerEl.innerHTML = `
    <div class="match-header">
      <div class="match-teams">
        <div class="team"><img src="../../${m.homeTeam.crestUrl}" alt="${m.homeTeam.name}"><span>${m.homeTeam.name}</span></div>
        <div class="match-score">${m.score.home} - ${m.score.away}</div>
        <div class="team"><span>${m.awayTeam.name}</span><img src="../../${m.awayTeam.crestUrl}" alt="${m.awayTeam.name}"></div>
      </div>
      <div class="match-meta">
        <span class="badge ${m.status}">${labelStatus(m)}</span>
        <span> • ${m.status==='scheduled' ? 'Início '+formatTime(m.startTime) : m.status==='live' ? (m.minute+"'") : 'Final'}</span>
        <span> • ${m.league}${m.stage? ' • '+m.stage: ''}${m.round? ' • Jg '+m.round: ''}</span>
        <span> • ${m.venue}</span>
      </div>
    </div>
    ${m.status==='live' ? `<div class="live-bar"><div class="live-bar-inner" style="width:${progress}%"></div></div>`: ''}
  `;
}

function renderTimeline(m){
  const events = Array.isArray(m.timeline) ? m.timeline : [];
  timelineEl.innerHTML = `<h2>Linha do tempo</h2>` + (events.length? events.map(e=>{
    const icon = e.type==='goal'?'⚽': e.type==='card'?'🟨': e.type==='sub'?'🔁':'⏱️';
    const side = e.team ? ` • ${e.team}`: '';
    const who = e.player ? ` — ${e.player}`: '';
    return `<div class="timeline-item"><div>${icon}</div><div><strong>${e.minute}'</strong>${side}${who}</div></div>`;
  }).join('') : `<div class="timeline-item">Sem eventos</div>`);
}

function renderStats(m){
  if(!m.stats){ statsEl.innerHTML = `<h2>Estatísticas</h2><div class="stat-row">Sem estatísticas</div>`; return; }
  const s = m.stats;
  statsEl.innerHTML = `
    <h2>Estatísticas</h2>
    ${renderStat('Posse de bola', s.possession.home, s.possession.away, '%')}
    ${renderStat('Finalizações', s.shots.home, s.shots.away)}
    ${renderStat('No alvo', s.shotsOnTarget.home, s.shotsOnTarget.away)}
    ${renderStat('Escanteios', s.corners.home, s.corners.away)}
    ${renderStat('Faltas', s.fouls.home, s.fouls.away)}
  `;
}

function renderStat(label, home, away, suffix=''){
  const p = percent(home, away);
  return `
    <div class="stat-row">
      <span>${home}${suffix}</span>
      <div class="progress" aria-label="${label}"><div class="bar" style="width:${p}%"></div></div>
      <span>${away}${suffix}</span>
    </div>
  `;
}

load();
