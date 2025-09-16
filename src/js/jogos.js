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
    const stats = m.stats;
    const leagueIcon = getLeagueIcon(m.league);
    const venueIcon = '🏟️';
    const timeIcon = getTimeIcon(m.status);
    
    return `
    <article class="match-card" data-status="${m.status}" data-league="${m.league}">
      <div class="match-header">
        <div class="match-league">
          <span class="league-icon">${leagueIcon}</span>
          ${m.league}${stage ? ` • ${stage}`: ''}
        </div>
        <span class="badge ${m.status}">${labelStatus(m)}</span>
      </div>
      
      ${m.status==='live' ? `
        <div class="live-bar">
          <div class="live-bar-inner" style="width:${progress}%"></div>
          <div class="live-progress-text">${m.minute}' - ${progress}%</div>
        </div>
      ` : ''}
      
      <a class="match-row" href="${link}" aria-label="Abrir detalhes do jogo">
        <div class="team home-team">
          <img alt="${m.homeTeam.name}" src="../../${m.homeTeam.crestUrl}" loading="lazy">
          <span>${m.homeTeam.name}</span>
        </div>
        <div class="score-container">
          <div class="score">${m.score.home} - ${m.score.away}</div>
          ${m.status==='live' ? `<div class="live-indicator">●</div>` : ''}
        </div>
        <div class="team away-team">
          <span>${m.awayTeam.name}</span>
          <img alt="${m.awayTeam.name}" src="../../${m.awayTeam.crestUrl}" loading="lazy">
        </div>
      </a>
      
      <div class="match-stats">
        ${stats ? `
          <div class="stat-item">
            <span class="stat-label">Posse</span>
            <div class="stat-bar">
              <div class="stat-fill home" style="width: ${stats.possession.home}%"></div>
              <div class="stat-fill away" style="width: ${stats.possession.away}%"></div>
            </div>
            <span class="stat-values">${stats.possession.home}% - ${stats.possession.away}%</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Finalizações</span>
            <span class="stat-values">${stats.shots.home} - ${stats.shots.away}</span>
          </div>
        ` : ''}
      </div>
      
      <div class="meta">
        <span class="meta-item">
          <span class="meta-icon">${timeIcon}</span>
          ${m.status==='scheduled' ? 'Início ' + formatTime(m.startTime) : m.status==='live' ? (m.minute + "'") : 'Final'}
        </span>
        <span class="meta-item">
          <span class="meta-icon">${venueIcon}</span>
          ${m.venue}
        </span>
        ${broadcasters ? `
          <span class="meta-item">
            <span class="meta-icon">📺</span>
            ${broadcasters}
          </span>
        ` : ''}
        ${m.referee ? `
          <span class="meta-item">
            <span class="meta-icon">👩‍⚖️</span>
            ${m.referee}
          </span>
        ` : ''}
      </div>
      
      ${lastEvent ? `<div class="last-event">${lastEvent}</div>`: ''}
      
      <div class="match-actions">
        <a href="${link}" class="action-btn primary">Ver Detalhes</a>
        ${m.status==='live' ? `<button class="action-btn secondary" onclick="toggleLiveUpdates('${m.id}')">Atualizações</button>` : ''}
      </div>
    </article>`;
  }).join('');
  
  // Adicionar animações de entrada
  setTimeout(() => {
    const cards = document.querySelectorAll('.match-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 50);
}

function labelStatus(m){
  if(m.status==='live') return 'Ao vivo';
  if(m.status==='scheduled') return 'Agendado';
  if(m.status==='finished') return 'Finalizado';
  return m.status;
}

function getLeagueIcon(league){
  if(league.includes('Brasileirão')) return '🏆';
  if(league.includes('Copa América')) return '🌎';
  if(league.includes('Amistoso')) return '🤝';
  if(league.includes('Internacional')) return '🌍';
  return '⚽';
}

function getTimeIcon(status){
  if(status==='live') return '🔴';
  if(status==='scheduled') return '⏰';
  if(status==='finished') return '✅';
  return '⏱️';
}

function toggleLiveUpdates(matchId){
  // Função para alternar atualizações ao vivo
  console.log(`Toggle live updates for match: ${matchId}`);
  // Implementar lógica de atualizações ao vivo aqui
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
