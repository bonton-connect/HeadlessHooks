---
sidebar_position: 1
---

# useTabs

Import the **useTabs Hook** to create bare minimum logical tabs.

## Import Hook

```jsx title="src/App.tsx"
import "./App.css";

import { useTabs } from "@bonton/headlesshooks";

function MyComponent() {
  return <div>My component</div>;
}

function App() {
  const tabData = {
    tabs: [
      { key: "tab1", disabled: false, content: "bar" },
      { key: "tab2", disabled: false, content: 1 },
      { key: "tab3", disabled: false, content: <MyComponent /> },
    ],
  };

  const { tabs } = useTabs(tabData);

  return (
    <>
      {tabs.map((tab) => (
        <div key={tab.key}>
          <button onClick={tab.selectTab} disabled={tab.disabled}>
            {tab.key}
          </button>
          {tab.active && <div>{tab.content}</div>}
        </div>
      ))}
    </>
  );
}

export default App;
```

The **useTabs Hook** accepts an object with the following properties:

### tabs

An array of tabs. Each tab has the following properties:

#### key(required)

The key of the tab.

#### disabled(required)

A boolean that indicates whether the tab is disabled.

#### content(optional)

The content of the tab.

## API

The **useTabs Hook** returns an object with the following properties:

### tabs

An array of tabs.

### changeTab

A function that changes a tab.

### currentTab

The currently active tab.
