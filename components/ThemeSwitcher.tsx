"use client";
import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(true);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (enabled) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-light-bg" : "bg-dark-bg"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer 
          rounded-full border-2 border-transparent transition-colors 
          duration-200 ease-in-out focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">{theme}</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full
             bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ThemeSwitch;
