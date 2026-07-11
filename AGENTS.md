# LetsGoReact — Project Guide

## Purpose of this repo

This repo is my **React + TypeScript refresher project** before I go deeper into **React Native** again.

The goal is **not** just to finish an app quickly.

The goal is to:

* refresh core React concepts
* practise TypeScript with React
* rebuild confidence with React structure and patterns
* learn by **doing tasks myself**
* understand **why** code is written in a certain way
* create one small but realistic app that grows step by step
* use that app to revise both **basic React** and **larger app concepts** I will need again in React Native

---

# End goal

Build one **Task Tracker / Task Management app** in React + TypeScript that starts small and gradually grows into a more realistic app.

This app is mainly a **learning vehicle**. It should help me revise React properly before going back into React Native.

The app should gradually cover important React concepts such as:

## React foundations

* components
* props
* JSX
* state
* events
* list rendering
* conditional rendering
* forms
* lifting state
* filtering
* reusable UI components
* TypeScript props / types / data models

## Growing app concepts

* shared types and data files
* component composition
* `useState`
* `useEffect`
* derived state
* custom hooks
* state ownership
* feature-based folder structure
* separating UI from data logic

## Larger app / architecture concepts

* routing / navigation
* Context API
* reducer-based state when useful
* app-level state management
* task actions and filters
* persistence / local storage / simple data layer if needed
* loading / error / empty states
* scaling the app structure as features grow

This is mainly a **learning project**, not a production app.

The idea is to grow the same app from **basic React → intermediate React → small app architecture patterns**, so I refresh the full flow before moving back into React Native.

---

# How I want to learn

## Very important rule

I want to do the tasks **myself**.

That means:

* do **not** just generate the whole app for me
* do **not** implement many tasks ahead unless I explicitly ask
* do **not** overbuild features beyond the current task
* do **not** take away the learning part by doing everything for me

Instead, help me learn in a structured way.

The repo should feel like a **guided learning journey**, not an auto-generated finished project.

---

# How tasks should be given

I want the project to move in **small steps**.

For each step:

1. give me **one task only**
2. keep the task short and clear
3. focus on one concept or one small group of related concepts
4. after I finish and commit it, review it
5. then give me the **next task**

The tasks should build on each other so the app grows naturally.

Example direction:

* start with static UI and component split
* move to rendering data
* then state and events
* then add task actions
* then move state around properly
* then introduce more shared logic
* later grow into navigation / context / broader app patterns

## Task style I prefer

Use:

* **short**
* **simple**
* **clear**
* **human**
* **easy words**
* **concise wording**

I do **not** want long theory unless I ask for it.

Example style:

* “Add `useState` in `TaskList` and store imported tasks in state.”
* “Create a `TaskItem` component and render one task through it.”
* “Lift add-task state to parent and append a new task.”
* “Add a filter state and show only completed tasks.”
* “Move shared task state into Context.”

---

# How code review should work

After I complete a task, I want the work reviewed in this style:

## Review format

1. **Task passed / mostly passed / needs fix**
2. **Good**

   * what is correct
   * what I did well
3. **Fix**

   * small corrections
   * naming issues
   * React / TS improvements
4. **Next Task**

   * only one next task

## Review style

Keep review:

* short
* direct
* simple
* practical

I do not want huge essays unless I ask for a deeper explanation.

The review should stay focused on the **current task**, not on turning the app into a perfect production architecture too early.

---

# What I want ChatGPT to do

ChatGPT’s job in this project is to act like a **learning guide / reviewer**.

## ChatGPT should:

* understand the current state of the project
* know which task I am on
* give me the **next task only**
* review my commits after I push them
* point out mistakes simply
* keep the learning path structured
* avoid jumping too far ahead
* remind me of the concept behind a task when useful
* keep answers concise by default
* gradually expand the learning journey from basics into bigger React app concepts

## ChatGPT should not:

* dump full solutions unless I ask
* rewrite the whole project for me
* introduce many advanced patterns too early
* turn a small learning task into a big architecture exercise
* skip multiple steps just because a more “professional” solution exists

---

# What I want Codex CLI to do

I use **Codex CLI in VS Code / terminal** for local help before pushing code.

Codex should help with my **local working tree**, while ChatGPT reviews pushed GitHub commits.

## Codex can be used for:

* checking local changes before commit
* reviewing whether a task is complete
* explaining local code
* implementing a task **only if I explicitly ask**
* helping fix bugs in my current local task
* answering questions about the current files in the repo

## Example Codex prompts

### Review local work

“Review my local changes. Do not edit files. Tell me what is good, what is wrong, and whether the current task is complete.”

### Implement only current task

“Implement Task 5 only. Do not add extra features. Keep code simple.”

### Explain code

“Explain what this component is doing in very simple words.”

### Fix current bug

“Fix this bug only. Do not refactor unrelated files.”

### Keep learning style in mind

“Treat this as a learning repo. Prefer minimal changes and do not jump ahead to advanced architecture.”

---

# My preferred learning style

## Default answer style

Use:

* short sentences
* simple words
* concise explanations
* minimal theory first
* expand only if I ask

## Good response examples

* “Task passed.”
* “Use `task.id` instead of index.”
* “Move this type to a separate file.”
* “Next task: add state for tasks with `useState`.”
* “This works, but keep the state one level higher.”

## Avoid by default

* very long explanations
* advanced architecture discussions too early
* unnecessary abstraction
* too many options at once
* large refactors when the current task is small

---

# Current project direction

The app is being built step by step as a **Task Tracker**.

Current structure already includes ideas like:

* `Header`
* `Footer`
* `AddTask`
* `TaskList`
* buttons / summary components
* task data / task types

The project should continue gradually from:

* static UI
* to rendering data
* to interactive React behavior
* to local component state
* to shared state and task actions
* to filtering and task management flows
* to larger app ideas like Context, navigation, and broader app structure

So the app is not only for learning tiny React basics.
It should slowly become a **small but realistic React app** that helps refresh concepts I will use again in React Native.

---

# Important project principles

## 1. Learn concepts in order

Do not skip straight to advanced patterns.

Start with the basics, then grow into larger concepts naturally.

## 2. One task at a time

Each task should have a clear purpose.

## 3. Keep app realistic but small

Enough to practise React properly, but not so big that it becomes a distraction.

## 4. Prefer understanding over speed

It is okay if progress is slower, as long as concepts become clear.

## 5. Keep code readable

Use names and structure that help learning.

## 6. Grow the same app gradually

Do not keep starting over with disconnected examples.
Prefer building on the same task app so each concept connects to a real app structure.

## 7. Use the app to revisit larger React topics too

This repo should eventually help revise:

* state management choices
* Context
* navigation / routing
* app structure
* scaling components and folders
* how data and UI interact in a growing app

---

# Current workflow

## My workflow with ChatGPT

1. Ask for next task
2. Implement task myself
3. Push commit to GitHub
4. Share commit link
5. Get review
6. Receive next task

## My workflow with Codex CLI

1. Work locally in VS Code
2. Ask Codex to review local changes
3. Ask Codex small questions about the current task
4. Optionally ask Codex to fix a local issue
5. Push after I understand the change

---

# Golden rule for helpers on this repo

If helping on this project:

* treat this as a **learning repo**
* assume I want to write the code myself first
* keep guidance short and practical
* prefer nudges over full solutions
* review based on the current task, not on “perfect production architecture”
* only move to the next concept once the current one is understood
* remember that the repo will grow beyond basic tasks into topics like state management, Context, routing, and app structure

---

# Short summary

This repo is my **React refresher journey**.

I want to:

* build one small task app that grows over time
* learn React properly again
* revise both basic and intermediate React concepts
* eventually cover bigger ideas like navigation, Context, and state management
* do tasks myself
* get reviewed after each task
* keep answers concise and simple
* use ChatGPT for task planning + commit review
* use Codex CLI for local code checking and local help

The focus is **learning by building**, one task at a time, while gradually growing the same app into a more realistic React app.
