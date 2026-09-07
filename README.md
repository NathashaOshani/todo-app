# TaskFlow

TaskFlow is a responsive React todo application for organizing tasks by due date and priority. Tasks are saved in the browser, so the app remains useful without an account or backend.

## Features

- Create, edit, complete, and delete tasks
- Filter tasks by today, pending, and overdue
- Assign high, medium, or low priority
- Persist tasks with `localStorage`
- Responsive keyboard-accessible interface
- Animated task transitions with Motion

## Built with

- React 18
- Vite
- Motion for React
- CSS
- Browser `localStorage`

## Run locally

```bash
npm install
npm run dev
```

Before publishing changes, verify the project with:

```bash
npm run lint
npm run build
```

## Deploy to GitHub Pages

The repository is configured for the `todo-app` GitHub Pages path. Run:

```bash
npm run deploy
```

## Limitations

Task data is stored only in the current browser. Accounts and cross-device synchronization would require a backend or hosted database service.
