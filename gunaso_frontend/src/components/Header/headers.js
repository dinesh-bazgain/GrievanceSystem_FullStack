"use client";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import {
  Switcher,
  Notification,
  UserAvatar,
  Sun,
  Moon,
} from "@carbon/icons-react";
import Link from "next/link";
import { useState, useEffect } from "react";

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <HeaderGlobalAction
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      tooltipAlignment="center"
      className="action-icons relative group"
      style={{ padding: "0.5rem", marginRight: "0.5rem" }}
      onClick={onToggle}
    >
      <div className="relative w-12 h-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 p-1 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 dark:opacity-100 transition-opacity duration-500"></div>
        <div
          className={`relative w-4 h-4 rounded-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {darkMode ? (
              <Moon size={12} className="text-gray-700" />
            ) : (
              <Sun size={12} className="text-yellow-500" />
            )}
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-4 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {darkMode ? "Light mode" : "Dark mode"}
      </div>
    </HeaderGlobalAction>
  );
}

const Headers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, isMounted]);

  if (!isMounted) return null;

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon" className="relative">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/home">
            <HeaderName
              prefix="MERO"
              element="a"
              className="hover:scale-105 transition-transform"
            >
              Grievance
            </HeaderName>
          </Link>
          <HeaderNavigation aria-label="Main navigation">
            <HeaderMenuItem
              href="/gunaso"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Gunaso
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/gunaso">Gunaso</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <ThemeToggle
              darkMode={darkMode}
              onToggle={() => setDarkMode((prev) => !prev)}
            />
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
              className="action-icons group relative"
              style={{ padding: "0.75rem" }}
            >
              <Notification
                size={20}
                className="group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Notifications
              </div>
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
              className="action-icons group relative"
              style={{ padding: "0.75rem" }}
            >
              <div className="relative">
                <UserAvatar
                  size={20}
                  className="group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Profile
              </div>
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
              className="group relative"
              style={{ padding: "0.75rem" }}
            >
              <Switcher
                size={20}
                className="group-hover:scale-110 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                App Switcher
              </div>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <style jsx>{`
            .action-icons:hover {
              background: linear-gradient(
                135deg,
                rgb(99 102 241 / 0.1) 0%,
                rgb(168 85 247 / 0.1) 100%
              );
              border-radius: 50%;
            }
            @keyframes pulse-glow {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
            .animate-pulse {
              animation: pulse-glow 2s ease-in-out infinite;
            }
          `}</style>
        </Header>
      )}
    />
  );
};

export default Headers;
