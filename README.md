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


## 🏗️ Estrutura base do Projeto

```
├── .gitignore
├── README.md
├── __mocks__/
│   └── fileMock.js
├── babel.config.js
├── eslint.config.js
├── index.html
├── jest.config.js
├── package-lock.json
├── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── Routes.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Cart/
│   │   │   ├── Cart.test.tsx
│   │   │   └── Cart.tsx
│   │   ├── Header/
│   │   │   ├── Header.test.tsx
│   │   │   └── Header.tsx
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.test.tsx
│   │   │   └── ProductCard.tsx
│   │   └── SEO/
│   │       ├── DefaultSEO.tsx
│   │       └── ProductSEO.tsx
│   ├── context/
│   │   ├── CartContext.test.tsx
│   │   └── CartContext.tsx
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useProducts.test.ts
│   │   ├── useProducts.ts
│   │   ├── useSEO.test.ts
│   │   └── useSEO.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   │   ├── CartPage/
│   │   │   ├── CartPage.test.tsx
│   │   │   └── CartPage.tsx
│   │   ├── Home/
│   │   │   ├── Home.test.tsx
│   │   │   └── Home.tsx
│   │   └── ProductDetail/
│   │       ├── ProductDetail.test.tsx
│   │       └── ProductDetail.tsx
│   ├── setupTests.ts
│   ├── tests/
│   │   └── integration/
│   │       └── navigationFlow.test.tsx
│   ├── theme/
│   │   └── theme.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── api.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── vercel.json
└── vite.config.ts

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
  "title": "Amazon Echo Plus",
  "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
  "price": 99.99,
  "discountPercentage": 12.07,
  "rating": 4.99,
  "stock": 61,
  "brand": "Amazon",
  "category": "mobile-accessories",
  "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
  "images": ["https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp"]
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

A suíte de testes cobre alguns casos de:

-   **Componentes:** Renderização e interações

-   **Hooks:** Lógica de negócio

-   **Context:** Gerenciamento de estado

-   **Integração:** Fluxos de integração


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

<img width="586" height="242" alt="image" src="https://github.com/user-attachments/assets/a8e6c9f6-0fc4-41ca-8a19-c9d837a68ff7" />



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
