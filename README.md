# 🛍️ Localiza Store

Uma moderna loja virtual desenvolvida com React, TypeScript e Material UI, consumindo a API pública DummyJSON para exibir produtos de tecnologia.

## 🚀 Demonstração

**Acesse a aplicação:**  [localizastore.vercel.app](https://localizastore.vercel.app)

## 📋 Sobre o Projeto

A Localiza Store é uma Single Page Application (SPA) de e-commerce que apresenta produtos de tecnologia com interface moderna e responsiva. O projeto foi desenvolvido como estudo de caso para implementação de boas práticas em desenvolvimento front-end.

### ✨ Funcionalidades

-   ✅ Catálogo de produtos com paginação

-   ✅ Sistema de carrinho de compras

-   ✅ Busca e filtros por categoria

-   ✅ Páginas de detalhes de produtos

-   ✅ Design responsivo (mobile-first)

-   ✅ Modo escuro com tema customizado

-   ✅ Meta tags dinâmicas para SEO

-   ✅ Testes unitários com Jest

-   ✅ Deploy automatizado na Vercel


## 🛠️ Tecnologias Utilizadas

### Frontend

-   **React 18** - Biblioteca principal com hooks

-   **TypeScript** - Tipagem estática

-   **Vite** - Build tool e dev server

-   **Material UI v7** - Component library com tema customizado

-   **React Router v6** - Roteamento client-side

-   **Axios** - Cliente HTTP para APIs


### Testes

-   **Jest** - Framework de testes

-   **React Testing Library** - Testes de componentes

-   **Testing Library User Event** - Simulação de interações


### Deploy & DevOps

-   **Vercel** - Plataforma de deploy e hosting

-   **GitHub Actions** - CI/CD (opcional)


## 🏗️ Estrutura do Projeto

```

src/
├── components/        # Componentes reutilizáveis
│   ├── Header/        # Cabeçalho com carrinho
│   ├── ProductCard/   # Card de produto
│   ├── Cart/          # Componente do carrinho
│   └── SEO/           # Meta tags dinâmicas
├── pages/             # Páginas da aplicação
│   ├── Home/          # Página inicial
│   ├── ProductDetail/ # Detalhes do produto
│   └── CartPage/      # Página do carrinho
├── hooks/             # Custom hooks
│   ├── useProducts.ts # Fetch de produtos
│   └── useSEO.ts      # Gerenciamento de SEO
├── context/           # Context API
│   └── CartContext.tsx # Estado global do carrinho
├── types/             # Definições TypeScript
├── utils/             # Utilitários
│   └── api.ts         # Configuração da API
├── theme/             # Tema Material UI
└── App.tsx            # Componente principal
```

## 🔌 API Utilizada

### DummyJSON API

-   **Base URL:**  `https://dummyjson.com`

-   **Endpoints utilizados:**

    -   `GET /products` - Lista todos os produtos

    -   `GET /products/{id}` - Detalhes de um produto

    -   `GET /products/categories` - Lista de categorias

    -   `GET /products/search?q={query}` - Busca de produtos


### Exemplo de Response

```json

{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": ["https://i.dummyjson.com/data/products/1/1.jpg"]
}
```

## 🎨 Design Decisions

### Tema Escuro Customizado

-   **Paleta de cores:** Tons de verde que remetem à inspiração da Localiza, mas em modo Dark

-   **Typography:** Roboto com pesos ajustados para hierarquia visual

-   **Component overrides:** Customização específica de Cards e AppBar


### Arquitetura de Estado

-   **Context API:** Para estado global do carrinho (simplicidade)

-   **Custom Hooks:** Para lógica reutilizável (products, SEO)

-   **Estado Local:** Para filtros e paginação


### Responsividade

-   **Grid System:** Material UI Grid v7 com breakpoints

-   **Container Fluido:** Layout que a tela de forma fluida

-   **Mobile First:** Design pensado para mobile com enhancements para desktop


## 📦 Instalação e Execução

### Pré-requisitos

-   Node.js 16+

-   npm ou yarn


### Passo a passo

1.  **Clone o repositório**

```bash

git clone https://github.com/marianaviana/localizastore.git
cd localizastore
```

2.  **Instale as dependências**


```bash

npm install
```

3.  **Execute em modo desenvolvimento**


```bash

npm run dev
```

4.  **Abra no navegador**

```text

http://localhost:3000
```

### Comandos Disponíveis
```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build
# Testes
npm test             # Executa testes uma vez
npm run test:watch   # Executa testes em watch mode
npm run test:coverage # Executa testes com cobertura
# Deploy
npm run deploy       # Deploy na Vercel
```

## 🧪 Testes

A suíte de testes cobre:

-   **Componentes:** Renderização e interações

-   **Hooks:** Lógica de negócio

-   **Context:** Gerenciamento de estado

-   **Integração:** Fluxos completos


```bash

# Executar todos os testes
npm test

# Executar com cobertura
npm run test:coverage
```

## 🚀 Deploy

### Deploy na Vercel

1.  **Build do projeto**
```bash
npm run build
```
2.  **Deploy**
```bash
npx vercel --prod
```
### Variáveis de Ambiente

O projeto não requer variáveis de ambiente para a API pública, mas caso queira colocar para a api em produção sugiro:

```env
VITE_API_URL=https://dummyjson.com
```

## 📊 Performance

-   **Lighthouse Score:** 90+ em performance, acessibilidade e best practices

-   **Bundle Size:** Otimizado com code splitting do Vite

-   **Images:** Lazy loading e formatos modernos


## 🔮 Algumas melhorias possíveis

-   Autenticação de usuários
-   Wishlist/favoritos
-   Reviews e avaliações
-   Internacionalização (i18n)


## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1.  Fork o projeto

2.  Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)

3.  Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)

4.  Push para a branch (`git push origin feature/AmazingFeature`)

5.  Abra um Pull Request


## 👥 Autora

**Mariana Viana** - [GitHub](https://github.com/marianaviana) - [LinkedIn](https://linkedin.com/in/marianaviana)

----------

> **Nota:** Este projeto utiliza uma API pública para fins de demonstração. Todos os produtos e imagens são fornecidos pela DummyJSON para propósitos de demonstração de conhecimento.
