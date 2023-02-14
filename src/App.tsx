import { useState } from "react";
import { useTabs } from "./lib";

function MyComponent() {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "100px",
      }}
    >
      My component
    </div>
  );
}

function App() {
  const tabData = {
    tabs: [
      { key: "tab1", disabled: false, content: "bar" },
      { key: "tab2", disabled: false, content: "baz" },
      { key: "tab3", disabled: false, content: <MyComponent /> },
    ],
  };

  const { tabs } = useTabs(tabData);

  return (
    <div>
      {tabs.map((tab) => (
        <div key={tab.key}>
          <button
            onClick={tab.selectTab}
            disabled={tab.disabled}
            style={{
              color: tab.active ? "red" : "black",
              cursor: tab.disabled ? "not-allowed" : "pointer",
              backgroundColor: tab.active ? "yellow" : "red",
              padding: "10px",
            }}
          >
            {tab.key}
          </button>
          {tab.active && <div>{tab.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default App;
