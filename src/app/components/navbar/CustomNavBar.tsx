"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import Image from "next/image";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Popover,
  Popper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./customNavBar.module.css";
import Logo from "@/assets/logo.png";

type PageItem = {
  title: string;
  href: string;
  to: string;
};
const pages: PageItem[] = [
  { title: "About", href: "#about", to: "about" },
  { title: "Skills", href: "#skills", to: "skills" },
  { title: "Experience", href: "#experience", to: "experience" },
  { title: "Education", href: "#education", to: "education" },
  { title: "Contacts", href: "#contact", to: "contact" },
];

function CustomNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const hashUrl =
    typeof window !== "undefined" ? window.location.hash : "#about";
  const [activeID, setActiveID] = useState(hashUrl ? hashUrl : "#about");

  useEffect(() => {
    const hashUrl =
      typeof window !== "undefined" ? window.location.hash : "#about";
    setActiveID(hashUrl);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== undefined) {
        setTimeout(() => {
          const hash = window.location.hash;
          setActiveID(hash);
        }, 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (to: string) => {
    setActiveID(to);
    handleCloseNavMenu();
  };

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <div className={styles.main}>
          <header className={styles.header}>
            <ScrollLink
              hashSpy
              ignoreCancelEvents
              isDynamic
              onClick={() => handleClick("#about")}
              duration={300}
              smooth
              to={"about"}
            >
              <Box
                component={Image}
                className={styles.img}
                src={Logo}
                width={40}
                height={40}
                alt="Picture of the author"
                sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
              />
            </ScrollLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0, cursor: "pointer" }}
                disableRipple
              >
                {anchorElNav ? (
                  <CloseIcon
                    sx={{ height: "36px", width: "36px", cursor: "pointer" }}
                  />
                ) : (
                  <MenuIcon
                    sx={{ height: "36px", width: "36px", cursor: "pointer" }}
                  />
                )}
              </IconButton>
              <nav className={styles.navbar}>
                <Popper
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  transition
                  // anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  // transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  open={Boolean(anchorElNav)}
                  // onClose={handleCloseNavMenu}
                  sx={{
                    zIndex: 5000,
                    display: { xs: "block", md: "none" },
                    top: "80px!important",
                    left: "10%!important",
                    width: "80%",
                    background: "var(--bg-color)",
                    color: "white",
                    minWidth: 250,
                    fontFamily: "Poppins",
                    "& > div": {
                      fontSize: "16px",
                      padding: "12px 16px 12px 16px",
                    },
                    // }
                  }}
                >
                  {pages.map((page: PageItem) => (
                    <div className={styles.nav_links} key={page.to}>
                      <ScrollLink
                        hashSpy
                        ignoreCancelEvents
                        isDynamic
                        onClick={() => handleClick(page.href)}
                        duration={300}
                        className={
                          activeID === page.href
                            ? styles.active
                            : styles.inactive
                        }
                        smooth
                        to={page.to}
                      >
                        {page.title}
                      </ScrollLink>
                    </div>
                  ))}
                </Popper>
              </nav>
            </Box>
            <nav className={styles.navbar}>
              <ScrollLink
                hashSpy
                ignoreCancelEvents
                isDynamic
                onClick={() => handleClick("#about")}
                duration={300}
                smooth
                to={"about"}
              >
                <Box
                  component={Image}
                  className={styles.img}
                  src={Logo}
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  sx={{ cursor: 'pointer', display: { xs: "flex", md: "none" } }}
                />
              </ScrollLink>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page: PageItem) => (
                  <div className={styles.nav_links} key={page.to}>
                    <ScrollLink
                      hashSpy
                      ignoreCancelEvents
                      isDynamic
                      onClick={() => handleClick(page.href)}
                      duration={300}
                      className={
                        activeID === page.href ? styles.active : styles.inactive
                      }
                      smooth
                      to={page.to}
                    >
                      {page.title}
                    </ScrollLink>
                  </div>
                ))}
              </Box>
            </nav>
          </header>
        </div>
      </Container>
    </AppBar>
  );
}

export default CustomNavBar;
