# Todo App

A todo application built to practice React architecture patterns.

## Features
- Add, delete, toggle tasks
- Persistent storage via localStorage
- Auto-focus on input on load

## Tech Stack
- React 18 + TypeScript
- Context API — global state without Redux
- useCallback + useMemo — render optimization
- useRef — DOM access
- SCSS with variables
- Vite

## Architecture
- Component separation: AddTask, TaskList, TaskItem
- Custom hook useTasks
- Centralized types in src/types
- Context with TypeScript interface

## Getting Started
npm install
npm run dev