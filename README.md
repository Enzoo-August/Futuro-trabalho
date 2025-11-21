
# 🌐 Futuro do Trabalho — Global Solution FIAP 2025

Plataforma web interativa desenvolvida para conectar pessoas, competências e propósitos por meio da tecnologia.  
O projeto simula uma **rede profissional moderna**, semelhante ao LinkedIn, onde é possível visualizar, filtrar e explorar **perfis de profissionais fictícios** com informações completas, interagir com eles e conhecer suas áreas de atuação.

---
🔗 Acesse o Projeto

🔴 Site ao vivo (Vercel):
👉 https://futuro-trabalho.vercel.app/
---

## 👥 Equipe

| Nome | RM |
|------|----|
| **Enzo Augusto**    | RM562249 |
| **Rafael Santiago** | RM563486 | 
| **Gustavo Neres**   | RM561785 | 

---

## 🎯 Objetivo do Projeto

Promover uma reflexão sobre o **Futuro do Trabalho** e como a tecnologia pode **transformar relações profissionais**, tornar o mercado mais **justo, inclusivo e colaborativo**, e incentivar o **desenvolvimento de novas competências**.

A aplicação foi desenvolvida com **React + Tailwind CSS (versão 4)**, utilizando **dados simulados em JSON local**, e apresenta recursos completos de interação e personalização de tema.

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **React.js (Vite)** | Biblioteca principal para criação da SPA (Single Page Application). |
| **JavaScript (ES6)** | Linguagem base do projeto. |
| **Tailwind CSS v4** | Framework CSS para estilização rápida e responsiva. |
| **HTML5** | Estrutura semântica e otimização do layout. |
| **JSON Local** | Armazenamento dos 60 perfis simulados. |

---

## 💻 Funcionalidades Principais

✅ **Listagem de profissionais**  
Exibe cards com nome, foto, cargo e status profissional (ex: *Trabalhando na área*, *Em busca de oportunidades*).  

✅ **Modal interativo de perfil**  
Exibe informações detalhadas:  
- Dados pessoais e acadêmicos  
- Contatos e redes sociais  
- Biografia e hobbies  
- Habilidades técnicas e soft skills  
- Experiências profissionais  
- Formação, certificações e projetos  
- Idiomas e áreas de interesse  

✅ **Sistema de busca e filtros**  
- Busca dinâmica por nome, área ou cargo.  
- Filtros por **área**, **cidade/localização** e **status profissional**.  

✅ **Dark Mode e Light Mode**  
Tema alternável e salvo automaticamente no localStorage.  

✅ **Botões interativos**  
- Recomendar profissional  
- Enviar mensagem (com formulário funcional)  

✅ **Responsividade total**  
Interface adaptada para desktop, tablet e mobile.  

✅ **Experiência visual aprimorada**  
- Favicon personalizado  
- Tipografia moderna (Metro Font)  
- Scroll suave no modal  
- Transições elegantes  

---

## 📁 Estrutura de Pastas

```
futuro-do-trabalho/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── favicon.ico
│   │   └── react.svg
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── data/
│   │   └── profissionais.json
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── index.html
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Enzoo-August/Futuro-trabalho.git
cd futuro-do-trabalho
```

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Executar o projeto
```bash
npm run dev
```

### 4️⃣ Acessar no navegador
```
http://localhost:5173/
```

---

## 📄 Estrutura do JSON

```json
{
  "id": 1,
  "nome": "João Silva",
  "foto": "./images/joao.jpg",
  "cargo": "Desenvolvedor Front-End",
  "resumo": "Apaixonado por criar experiências digitais.",
  "localizacao": "São Paulo/SP",
  "area": "Tecnologia",
  "habilidadesTecnicas": ["React", "Tailwind", "JavaScript"],
  "softSkills": ["Comunicação", "Resiliência"],
  "experiencias": [
    {
      "empresa": "TechCorp",
      "cargo": "Front-End Jr.",
      "inicio": "2022-01",
      "fim": "2024-06",
      "descricao": "Desenvolvimento de interfaces responsivas."
    }
  ],
  "formacao": [
    {
      "curso": "Engenharia de Software",
      "instituicao": "FIAP",
      "ano": 2025
    }
  ],
  "projetos": [
    {
      "titulo": "Plataforma X",
      "link": "https://meuprojeto.com",
      "descricao": "Aplicação voltada à conexão de talentos."
    }
  ],
  "certificacoes": ["AWS Cloud Practitioner"],
  "idiomas": [{ "idioma": "Inglês", "nivel": "Avançado" }],
  "areaInteresses": ["IA Ética", "Educação"],
  "statusProfissional": "Trabalhando na área"
}
```

---

## 💡 Diferenciais

- Interface moderna e intuitiva  
- Tema escuro automático persistente  
- Perfis completos (60 profissionais)  
- JSON detalhado com hobbies e biografias  
- Código limpo e 100% funcional  
- Totalmente responsivo  

---

## 🧠 Conclusão

O projeto **Futuro do Trabalho** demonstra como a tecnologia pode ser usada para criar pontes entre profissionais, impulsionar oportunidades e valorizar habilidades humanas em um cenário digital e colaborativo.

> “O futuro do trabalho não é sobre máquinas substituindo pessoas, mas sobre pessoas usando tecnologia para se conectar, evoluir e transformar o mundo.”
