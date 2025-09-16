# 🚀 Passa a Bola - React Web App

Uma aplicação web moderna e elegante para o futebol feminino brasileiro, desenvolvida com React, TypeScript e Framer Motion.

## ✨ Características

- **Design Impecável**: Interface moderna com gradientes, animações suaves e efeitos visuais
- **Tema CBF**: Cores oficiais da Confederação Brasileira de Futebol
- **Animações Fluidas**: Transições suaves com Framer Motion
- **Responsivo**: Adaptado para todos os dispositivos
- **Performance**: Otimizado para web com lazy loading

## 🎨 Funcionalidades da Página Sobre

### Hero Section
- **Apresentação Visual**: Logo animado com efeito glassmorphism
- **Gradientes**: Cores oficiais da CBF
- **Animações**: Entrada suave com stagger effects

### Seções Principais
1. **Missão**: Card centralizado com ícone e descrição
2. **Valores**: Grid responsivo com 4 cards interativos
3. **Recursos**: Lista de funcionalidades com ícones coloridos
4. **Call-to-Action**: Seção de engajamento com gradiente

### Efeitos Visuais
- **Hover Effects**: Transformações suaves nos cards
- **Parallax**: Efeitos de profundidade
- **Glassmorphism**: Efeitos de vidro no logo
- **Shadows**: Sombras dinâmicas e realistas

## 🛠 Tecnologias

- **React 18**: Framework principal
- **TypeScript**: Tipagem estática
- **Framer Motion**: Animações avançadas
- **CSS3**: Estilos modernos com variáveis CSS
- **React Router**: Navegação entre páginas

## 🎨 Design System

### Cores
```css
--cbf-blue: #0D2238      /* Azul oficial */
--cbf-yellow: #FFD700    /* Amarelo oficial */
--cbf-purple: #992ABB    /* Roxo principal */
--cbf-green: #5CB85C     /* Verde de sucesso */
```

### Gradientes
```css
--primary-gradient: linear-gradient(135deg, #992ABB 0%, #781E96 50%, #0D2238 100%);
--secondary-gradient: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
```

### Sombras
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## 📦 Instalação

1. **Instalar dependências**:
   ```bash
   cd react-web
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

3. **Abrir no navegador**:
   ```
   http://localhost:3000
   ```

## 🏗 Estrutura do Projeto

```
react-web/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── SobrePage.tsx      # Página principal (Sobre)
│   │   ├── SobrePage.css      # Estilos da página Sobre
│   │   ├── HomePage.tsx       # Página inicial
│   │   └── HomePage.css       # Estilos da página inicial
│   ├── App.tsx                # App principal com roteamento
│   ├── App.css                # Estilos globais
│   ├── index.tsx              # Ponto de entrada
│   └── index.css              # Reset e estilos base
├── package.json
└── README.md
```

## 🎯 Animações Implementadas

### Framer Motion
- **Container Variants**: Animações em sequência
- **Item Variants**: Animações individuais
- **Hover Effects**: Interações ao passar o mouse
- **Stagger Children**: Efeito cascata

### CSS Animations
- **Fade In**: Aparição suave
- **Slide In**: Movimento lateral
- **Scale In**: Efeito de zoom
- **Pulse**: Animação contínua

## 📱 Responsividade

- **Desktop**: Layout completo com grid
- **Tablet**: Adaptação de colunas
- **Mobile**: Layout em coluna única
- **Breakpoints**: 1024px, 768px, 480px

## 🚀 Build para Produção

```bash
npm run build
```

O build será criado na pasta `build/` e pode ser servido por qualquer servidor web estático.

## 🎉 Resultado

A página Sobre agora possui:
- ✅ Design impecável e moderno
- ✅ Animações fluidas e suaves
- ✅ Responsividade completa
- ✅ Performance otimizada
- ✅ Acessibilidade
- ✅ Tema CBF oficial

**Acesse `http://localhost:3000` para ver o resultado!**

