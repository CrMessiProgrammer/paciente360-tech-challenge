# 🩺 Paciente360 - Tech Challenge

Projeto desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor Jr.

## 🔗 Link do Deploy

👉 [https://paciente360-tech-challenge.vercel.app/](https://paciente360-tech-challenge.vercel.app/)

---

## 📸 Demonstrações

<h4 align="center">Página Inicial</h4>
<div align="center">
    <img src="https://ik.imagekit.io/m1iwfxqae/drive-download-20250120T144504Z-001/Captura%20de%20tela%202025-07-29%20224850.png" title="Página Inicial do Projeto" width="50%"/>
</div>

<h4 align="center">Listagem de Usuários com Paginação</h4>
<div align="center">
    <img src="https://ik.imagekit.io/m1iwfxqae/drive-download-20250120T144504Z-001/Captura%20de%20tela%202025-07-29%20224953.png" title="Listagem de Usuários" width="50%"/>
</div>

<h4 align="center">Filtro de Busca por Nome</h4>
<div align="center">
    <img src="https://ik.imagekit.io/m1iwfxqae/drive-download-20250120T144504Z-001/Captura%20de%20tela%202025-07-29%20225048.png" title="Filtro de Busca" width="50%"/>
</div>

<h4 align="center">Detalhes do Usuário</h4>
<div align="center">
    <img src="https://ik.imagekit.io/m1iwfxqae/drive-download-20250120T144504Z-001/Captura%20de%20tela%202025-07-29%20225117.png" title="Detalhes do Usuário" width="50%"/>
</div>

---

## 🚀 Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Vercel](https://vercel.com/) (deploy)
- [React Spinners](https://www.davidhu.io/react-spinners/) (loader)

---

## 🧠 Funcionalidades Implementadas

- ✅ Listagem paginada de usuários
- ✅ Filtro de busca por nome (com rota dinâmica)
- ✅ Detalhamento de usuário em nova rota
- ✅ Responsividade para mobile/tablet/desktop
- ✅ Feedback visual com loader/spinner
- ✅ Navegação entre rotas via Navbar

---

## ⚙️ Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/CrMessiProgrammer/paciente360-tech-challenge.git

# 2. Acesse a pasta
cd paciente360-tech-challenge

# 3. Instale as dependências
yarn

# 4. Inicie o servidor
yarn dev
```

---

## 🕓 Tempo estimado investido

Cerca de 15 a 18 horas no total, divididos em:

- Organização e leitura do desafio
- Setup inicial com Vite, Tailwind e estrutura de pastas
- Implementação da listagem de usuários
- Paginação e filtro por nome
- Rota de detalhe de usuário
- Ajustes visuais, responsividade e deploy na Vercel
- Criação da documentação e debugging final

---

## 🧩 Decisões Técnicas e Dificuldades Enfrentadas

- ❌ A primeira API pública que tentei usar (reqres.in) retornava erro por falta de chave ("error": "Missing API key"). Após investigar, descobri que o acesso estava restrito e precisei buscar uma alternativa.
- ✅ Optei pela API pública JSONPlaceholder, que fornece uma lista de usuários de forma gratuita e rápida para prototipação.
- 🔄 Para tornar os avatares mais realistas e dinâmicos, usei o serviço do pravatar.cc baseado no ID de cada usuário.
- 💡 Dividi o código em componentes reutilizáveis e rotas bem definidas, priorizando clareza e escalabilidade.
- 🧠 A maior dificuldade foi entender como estruturar e manipular os dados da API, especialmente na lógica de filtros e paginação, mas isso também me proporcionou um aprendizado prático muito valioso.

---

Desenvolvido com dedicação por **Carlos Henrique Nunes 🫡**
