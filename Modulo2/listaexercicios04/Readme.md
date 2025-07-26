.# Página de Perfil Pessoal – Exercício 4

Este projeto foi desenvolvido como parte do módulo **Desenvolvimento Web** da formação Full Stack – Codifica & Masprati. A atividade propõe a criação de uma página pessoal completa utilizando **HTML5 semântico**, **CSS3 moderno**, técnicas de **layout responsivo** e **boas práticas de estilização**.

---

## 🎯 Objetivo

Construir uma **página de perfil pessoal** com seções como "Sobre Mim", "Habilidades", "Projetos" e "Contato", aplicando conceitos fundamentais de **HTML semântico**, **Flexbox**, **Grid Layout**, **responsividade** e **estilização avançada com CSS**.

## 🧱 Estrutura HTML

A página `perfil.html` utiliza as seguintes tags semânticas:

- `<header>`: Cabeçalho com nome, foto e slogan.
- `<nav>`: Navegação interna com âncoras para as seções.
- `<main>`: Container principal do conteúdo.
  - `<section>`: Blocos temáticos:
    - Sobre mim
    - Habilidades
    - Projetos
    - Contato
- `<footer>`: Rodapé com direitos autorais e créditos.

---

## 🎨 Estilização CSS

- **Seletores utilizados**:
  - Por **elemento**: `h1`, `p`, `section`, etc.
  - Por **classe**: `.container`, `.card`, etc.
  - Por **ID**: `#perfil`, `#contato`, etc.

- **Layout moderno com**:
  - **Flexbox** para disposição em colunas/linhas.
  - **Grid Layout** para seções como "Projetos" ou "Habilidades".
  - **Reset CSS** para garantir uniformidade entre navegadores.

- **Recursos Avançados**:
  - **Variáveis CSS**: `:root { EX: --cor-primaria: #0077cc; }`
  - **Pseudo-classes**: `a:hover`, `button:focus`
  - **Pseudo-elementos**: `section::before`, `article::after`
  - **Transições suaves** com `transition: all 0.3s ease;`
  - **Fontes personalizadas** via [Google Fonts](https://fonts.google.com/)
  - **Favicon** adicionado à aba do navegador

---

## 📱 Responsividade

- Layout adaptável com `media queries` para diferentes larguras de tela.
- Imagens, textos e seções redimensionáveis.
- Menu e estrutura fluida para dispositivos móveis.

---

## 🧪 Como Visualizar

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/tanurispina/codificaFormacaoDevFullStack/tree/master/Modulo2/listaexercicios04


