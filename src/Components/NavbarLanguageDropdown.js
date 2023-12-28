import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

// import axiosInstance from "../../utils/axios";
import UZ from "../assets/flags/uz.png";
import RU from "../assets/flags/ru.png";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 40px;
    height: 22px;
  }
`;

const Flag = styled.img`
  border-radius: 5px;
  width: 40px;
  height: 32px;
`;

const languageOptions = {
  uz: {
    icon: UZ,
    name: "O'zbek",
  },
  ru: {
    icon: RU,
    name: "Русский",
  },
  //   en: {
  //     icon: GB,
  //     name: "English",
  //   },
};

function NavbarLanguagesDropdown() {
  const { t, i18n } = useTranslation();
  const [anchorMenu, setAnchorMenu] = useState(null);

  const selectedLanguage = languageOptions[i18n.language];

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const langName = localStorage.getItem("lang");

  const changeLang = async (lang) => {
    localStorage.setItem("lang", lang);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    changeLang(language);

    closeMenu();
  };

  useEffect(() => {
    if (langName) {
      i18n.changeLanguage(langName);
    }
  }, [i18n, langName]);

  return (
    <React.Fragment>
      <Tooltip title={t("language")}>
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
          sx={{ p: 0 }}
        >
          <Flag src={selectedLanguage?.icon} alt={selectedLanguage?.name} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {Object.keys(languageOptions).map((language) => (
          <MenuItem
            key={language}
            onClick={() => handleLanguageChange(language)}
          >
            {languageOptions[language].name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default NavbarLanguagesDropdown;
