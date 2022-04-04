<div align="center">
  <a href="https://ovsyukov.ru">
    <img width="120px" height="auto" src="https://avatars.githubusercontent.com/u/969302?s=400&u=2c2357af0fffea853dc4e54d90480b232c84d4e8&v=4" />
  </a>
  <br>
  <h1>ovsyukov.online</h1>
  <p>Ovsyukov.online website</p>
</div>

# Usage

**Setup**

- `npm install`, install required dependencies

# Codebase

**Directories**

- [`pages`](pages) **TSX**, all pages of the site
- [`components`](components) **TSX**, react components
- [`public`](public) **Typescript**, static files
- [`lib`](lib) **Typescript**, shared utilities
- [`types`](types-service) **Typescript**, type definitions

**Built with**

- [React.js](https://reactjs.org) **React**
- [Vite](https://vitejs.dev/) **Vite**, framework
- [Tailwind](https://tailwindcss.com) **CSS**, framework

```

## Scripts

- `npm run dev` - start a development server with hot reload.
- `npm run build` - build for production. The generated files will be on the `dist` folder.
- `npm run preview` - locally preview the production build.
- `npm run test` - run unit and integration tests related to changed files based on git.
- `npm run test:ci` - run all unit and integration tests in CI mode.
- `npm run test:e2e` - run all e2e tests with the Cypress Test Runner.
- `npm run test:e2e:headless` - run all e2e tests headlessly.
- `npm run format` - format all files with Prettier.
- `npm run lint` - runs TypeScript, ESLint and Stylelint.
- `npm run validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
```
