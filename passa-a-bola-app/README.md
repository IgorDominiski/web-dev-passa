# Passa a Bola - React Native App

App mobile do Passa a Bola, plataforma de futebol feminino brasileiro, desenvolvido com React Native e Tailwind CSS (NativeWind).

## 🚀 Tecnologias

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **NativeWind** - Tailwind CSS para React Native
- **React Navigation** - Navegação entre telas
- **Expo Vector Icons** - Ícones

## 📱 Funcionalidades

### ✅ Implementadas
- **Home Screen** - Tela inicial com destaques e navegação rápida
- **Jogos Screen** - Lista de jogos com cards interativos
- **Times Screen** - Grid de times do futebol feminino
- **Torneios Screen** - Gerenciamento de torneios
- **Sobre Screen** - Informações sobre o projeto
- **Navegação** - Tab navigation entre telas
- **Design Responsivo** - Layout adaptável
- **Filtros** - Por status e liga nos jogos
- **Busca** - Pesquisa de times
- **Pull to Refresh** - Atualização de dados

### 🎨 Design
- **Tema CBF** - Cores oficiais (azul, roxo, verde, amarelo)
- **Gradientes** - Backgrounds modernos
- **Cards Interativos** - Animações e efeitos hover
- **Ícones** - Interface intuitiva
- **Tipografia** - Hierarquia visual clara

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/IgorDominiski/web-dev-passa.git
cd passa-a-bola-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
# Desenvolvimento
npm start

# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📁 Estrutura do Projeto

```
passa-a-bola-app/
├── src/
│   ├── screens/          # Telas do app
│   │   ├── HomeScreen.tsx
│   │   ├── MatchesScreen.tsx
│   │   ├── TeamsScreen.tsx
│   │   ├── TournamentsScreen.tsx
│   │   └── AboutScreen.tsx
│   ├── navigation/       # Configuração de navegação
│   │   └── AppNavigator.tsx
│   ├── components/       # Componentes reutilizáveis
│   ├── data/            # Dados mockados
│   │   └── matches.ts
│   └── types/           # Tipos TypeScript
│       └── index.ts
├── App.tsx              # Componente principal
├── tailwind.config.js   # Configuração do Tailwind
└── package.json
```

## 🎯 Telas

### Home Screen
- Hero section com gradiente
- Navegação rápida para outras telas
- Destaques em carrossel
- Seção CBF TV com vídeos

### Jogos Screen
- Lista de jogos com filtros
- Cards com layout vertical (time em cima/embaixo, placar do lado)
- Estatísticas em tempo real
- Barras de progresso para jogos ao vivo
- Meta informações (local, transmissão, árbitra)

### Times Screen
- Grid de times do futebol feminino
- Busca por nome ou localização
- Informações dos times (fundação, estádio)

### Torneios Screen
- Lista de torneios
- Criação de novos torneios
- Status dos torneios (ativo, em breve, finalizado)
- Gerenciamento de times participantes

### Sobre Screen
- História do projeto
- Missão e valores
- Links para redes sociais
- Informações de contato

## 🎨 Cores do Tema

```css
--cbf-blue: #1e40af    /* Azul principal */
--cbf-yellow: #fbbf24  /* Amarelo */
--cbf-purple: #7c3aed  /* Roxo */
--cbf-green: #10b981   /* Verde */
--cbf-red: #ef4444     /* Vermelho */
--cbf-orange: #f97316  /* Laranja */
```

## 📱 Responsividade

O app é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Mobile** - Layout otimizado para smartphones
- **Tablet** - Grid adaptável para tablets
- **Web** - Funciona também no navegador

## 🔄 Funcionalidades Interativas

- **Pull to Refresh** - Atualizar dados puxando para baixo
- **Filtros Dinâmicos** - Filtrar jogos por status e liga
- **Busca em Tempo Real** - Pesquisar times instantaneamente
- **Navegação Fluida** - Transições suaves entre telas
- **Cards Animados** - Efeitos hover e animações

## 🚀 Próximos Passos

- [ ] Integração com API real
- [ ] Notificações push
- [ ] Modo offline
- [ ] Autenticação de usuários
- [ ] Chat/comunidade
- [ ] Estatísticas avançadas
- [ ] Compartilhamento de conteúdo

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

---

**Desenvolvido com ❤️ para o futebol feminino brasileiro**
