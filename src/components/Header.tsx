"use client";

import React, { useState, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Header constants (8px grid based) - mirrorと統一
const HEADER_HEIGHT = 64;
const MENU_BUTTON_SIZE = 48;

const NAVIGATION = [
  { name: "Cases", href: "/case" },
  { name: "Principles", href: "/principle" },
  { name: "TIP Docs", href: "/tip" },
  { name: "GitHub", href: "https://github.com/seediv/real", external: true },
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
      {/* MENUボタン */}
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
          backgroundColor: "#fff",
          color: "#171717",
          border: "1px solid #d4d4d4",
          borderLeft: "none",
          borderRadius: "0 9999px 9999px 0",
          cursor: "pointer",
          fontFamily:
            'var(--font-montserrat), Montserrat, var(--font-noto-sans-jp), "Noto Sans JP", sans-serif',
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          transition: "background-color 0.2s ease",
          position: "fixed",
          left: 0,
          top: 4,
          zIndex: 1201,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fafafa";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
        }}
        aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {mobileOpen ? "×" : "MENU"}
      </button>

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
              paddingLeft: 64,
            }}
          >
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
                <span className="site-logo">REAL</span>
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
                      color: active ? "#171717" : "#525252",
                      backgroundColor: "transparent",
                      fontFamily:
                        'var(--font-montserrat), Montserrat, var(--font-noto-sans-jp), "Noto Sans JP", sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: active ? 600 : 400,
                      padding: "12px 16px",
                      borderBottom: active
                        ? "8px solid #171717"
                        : "8px solid transparent",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      height: HEADER_HEIGHT,
                      marginBottom: -1,
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (!active) {
                        e.currentTarget.style.color = "#171717";
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                      }
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (!active) {
                        e.currentTarget.style.color = "#525252";
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
                      'var(--font-montserrat), Montserrat, var(--font-noto-sans-jp), "Noto Sans JP", sans-serif',
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
