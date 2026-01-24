"use client";

import React, { useState, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Header constants (8px grid based) - mirrorと統一
const HEADER_HEIGHT = 64;
const MENU_BUTTON_SIZE = 48;

const NAVIGATION = [
  { name: "Cases", href: "/case" },
  { name: "TIP Docs", href: "/tip" },
  { name: "GitHub", href: "https://github.com/seediv/good", external: true },
];

export const Header = memo(function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname?.startsWith(href);
    },
    [pathname],
  );

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          height: HEADER_HEIGHT,
        }}
      >
        <div
          className="container-base"
          style={{ width: "100%", margin: "0 auto" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: HEADER_HEIGHT,
              gap: "var(--spacing-lg)",
            }}
          >
            {/* Mobile menu button */}
            <button
              onClick={handleDrawerToggle}
              className="mobile-menu-button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: MENU_BUTTON_SIZE,
                height: MENU_BUTTON_SIZE,
                padding: "0 8px",
                backgroundColor: "#171717",
                color: "#ffffff",
                border: "none",
                borderRadius: "0 8px 8px 0",
                marginLeft: -8,
                marginRight: "var(--spacing-lg)",
                cursor: "pointer",
                fontFamily:
                  "var(--font-montserrat), Montserrat, system-ui, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#404040";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#171717";
              }}
              aria-label="メニューを開く"
            >
              {mobileOpen ? "×" : "MENU"}
            </button>

            {/* Logo */}
            <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#171717",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-lg)",
                }}
              >
                <span className="site-logo">GOOD</span>
                {/* Divider */}
                <div
                  className="header-divider"
                  style={{
                    width: 1,
                    height: 24,
                    backgroundColor: "#d4d4d4",
                  }}
                />
                {/* Subtitle */}
                <span
                  className="header-subtitle"
                  style={{
                    fontFamily:
                      'var(--font-noto-sans-jp), "Noto Sans JP", sans-serif',
                    fontSize: "1rem",
                    color: "#737373",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  意図が消えない世界へ
                </span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav
              className="desktop-nav"
              style={{ display: "none", gap: 32, alignItems: "center" }}
            >
              {NAVIGATION.map((item) => {
                const active = isActive(item.href);
                const LinkComponent = item.external ? "a" : Link;
                const linkProps = item.external
                  ? {
                      href: item.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : { href: item.href };

                return (
                  <LinkComponent
                    key={item.name}
                    {...linkProps}
                    style={{
                      textDecoration: "none",
                      color: active ? "#171717" : "#737373",
                      fontFamily:
                        "var(--font-montserrat), Montserrat, system-ui, sans-serif",
                      fontSize: "1rem",
                      fontWeight: active ? 600 : 400,
                      padding: "12px 16px",
                      borderBottom: active
                        ? "3px solid #171717"
                        : "3px solid transparent",
                      transition: "color 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (!active) {
                        e.currentTarget.style.color = "#171717";
                      }
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (!active) {
                        e.currentTarget.style.color = "#737373";
                      }
                    }}
                  >
                    {item.name}
                  </LinkComponent>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Header height spacer */}
      <div
        style={{ height: HEADER_HEIGHT, width: "100%", flexShrink: 0 }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: HEADER_HEIGHT,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            zIndex: 999,
            padding: "var(--spacing-xl)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);
              const LinkComponent = item.external ? "a" : Link;
              const linkProps = item.external
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: item.href };

              return (
                <LinkComponent
                  key={item.name}
                  {...linkProps}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: active ? "#171717" : "#525252",
                    fontFamily:
                      "var(--font-montserrat), Montserrat, system-ui, sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: active ? 600 : 400,
                    padding: "16px",
                    borderRadius: 8,
                    backgroundColor: active ? "#f5f5f5" : "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {item.name}
                </LinkComponent>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
});
