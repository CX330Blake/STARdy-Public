import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const ThemeSwitcher = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <Switch
            isSelected={isDarkMode}
            color="secondary"
            size="lg"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <MoonIcon className={className} />
                ) : (
                    <SunIcon className={className} />
                )
            }
            onChange={toggleDarkMode}
        />
    );
};

export default ThemeSwitcher;
