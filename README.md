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

## Deploy to Vercel

Import this GitHub repository into Vercel and keep `main` as the production branch. Vercel will build and publish each new push automatically using the Vite defaults.

- Build command: `npm run build`
- Output directory: `dist`

## Limitations

Task data is stored only in the current browser. Accounts and cross-device synchronization would require a backend or hosted database service.
