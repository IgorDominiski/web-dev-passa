const API_URL = '../../assets/api/matches.json';
const REFRESH_MS = 30000; // 30s

const listEl = document.getElementById('matchesList');
const statusFilterEl = document.getElementById('statusFilter');
const leagueFilterEl = document.getElementById('leagueFilter');
const lastUpdateEl = document.getElementById('lastUpdate');

let matchesCache = [];

function formatTime(iso){
  try{const d=new Date(iso);return d.toLocaleString('pt-BR',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'})}catch(_){return ''}
}

function render(){
  const status = statusFilterEl.value;
  const league = leagueFilterEl.value;

  const filtered = matchesCache.filter(m =>
    (status==='all' || m.status===status) &&
    (league==='all' || m.league===league)
  );

  listEl.innerHTML = filtered.map(m => {
    const progress = m.status==='live' ? Math.min(100, Math.floor((m.minute/90)*100)) : 0;
    const stage = [m.stage, m.round ? `Jg ${m.round}`: null].filter(Boolean).join(' • ');
    const broadcasters = Array.isArray(m.broadcasters) ? m.broadcasters.join(', ') : '';
    const lastEvent = formatLastEvent(m.lastEvent);
    const link = `./jogo.html?id=${encodeURIComponent(m.id)}`;
    return `
    <article class="match-card">
      <div class="match-header">
        <div class="match-league">${m.league}${stage ? ` • ${stage}`: ''}</div>
        <span class="badge ${m.status}">${labelStatus(m)}</span>
      </div>
      ${m.status==='live' ? `<div class="live-bar"><div class="live-bar-inner" style="width:${progress}%"></div></div>` : ''}
      <a class="match-row" href="${link}" aria-label="Abrir detalhes do jogo">
        <div class="team"><img alt="${m.homeTeam.name}" src="../../${m.homeTeam.crestUrl}"><span>${m.homeTeam.name}</span></div>
        <div class="score">${m.score.home} - ${m.score.away}</div>
        <div class="team"><span>${m.awayTeam.name}</span><img alt="${m.awayTeam.name}" src="../../${m.awayTeam.crestUrl}"></div>
      </a>
      <div class="meta">
        <span>${m.status==='scheduled' ? 'Início ' + formatTime(m.startTime) : m.status==='live' ? (m.minute + "'") : 'Final'}</span>
        <span> • </span>
        <span>${m.venue}</span>
        ${broadcasters ? `<span> • </span><span>Transmissão: ${broadcasters}</span>`: ''}
        ${m.referee ? `<span> • </span><span>Árbitra: ${m.referee}</span>`: ''}
      </div>
      ${lastEvent ? `<div class="last-event">${lastEvent}</div>`: ''}
    </article>`;
  }).join('');
}

function labelStatus(m){
  if(m.status==='live') return 'Ao vivo';
  if(m.status==='scheduled') return 'Agendado';
  if(m.status==='finished') return 'Finalizado';
  return m.status;
}

function formatLastEvent(evt){
  if(!evt) return '';
  if(evt.type==='goal') return `Último evento: ⚽ ${evt.player} (${evt.team}) aos ${evt.minute}'`;
  if(evt.type==='card') return `Último evento: 🟨 Cartão aos ${evt.minute}'`;
  if(evt.type==='sub') return `Último evento: 🔁 Substituição ${evt.minute}'`;
  if(evt.type==='end') return `Fim de jogo`;
  return '';
}

async function fetchMatches(){
  try{
    const res = await fetch(API_URL + `?t=${Date.now()}`);
    if(!res.ok) throw new Error('Falha ao carregar jogos');
    const data = await res.json();
    matchesCache = Array.isArray(data.matches) ? data.matches : [];
    updateLeagueFilter();
    render();
    lastUpdateEl.textContent = `Atualizado em: ${new Date().toLocaleTimeString('pt-BR')}`;
  }catch(err){
    listEl.innerHTML = `<div class="meta">${err.message}</div>`;
  }
}

function updateLeagueFilter(){
  const leagues = Array.from(new Set(matchesCache.map(m=>m.league)));
  const current = leagueFilterEl.value;
  leagueFilterEl.innerHTML = '<option value="all">Todas as ligas</option>' + leagues.map(l=>`<option value="${l}">${l}</option>`).join('');
  if(leagues.includes(current)) leagueFilterEl.value = current;
}

statusFilterEl.addEventListener('change', render);
leagueFilterEl.addEventListener('change', render);

fetchMatches();
setInterval(fetchMatches, REFRESH_MS);
