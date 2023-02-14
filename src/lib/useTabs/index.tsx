import { useState } from "react";

interface TabsConfigType<
  T extends {
    key: string;
    disabled?: boolean;
  }
> {
  tabs: T[];
}

interface TabType {
  key: string;
  active: boolean;
  disabled?: boolean;
  selectTab: () => void;
}

interface TabsAPIType<T> {
  tabs: (TabType & T)[];
  currentTab: T;
  changeTab: (key: string) => void | ((tab: T) => void);
}

function useTabs<
  T extends {
    key: string;
    disabled?: boolean;
  }
>(config: TabsConfigType<T>): TabsAPIType<T> {
  const [currentTab, setCurrentTab] = useState(config.tabs[0]);

  const changeTab = (key: string) => {
    let tab: T | undefined;
    tab = config.tabs.find((tab) => tab.key === key);

    if (!tab) {
      return;
    }

    setCurrentTab(tab);
  };

  const tabs = config.tabs.map((tab) => ({
    ...tab,
    active: currentTab.key === tab.key,
    selectTab: () => setCurrentTab(tab),
  }));

  return {
    tabs,
    currentTab,
    changeTab,
  };
}

export default useTabs;
