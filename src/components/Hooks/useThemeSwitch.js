"use client";

import { useEffect, useState } from "react";

export  function useThemeSwitch() {

    // MediaQuery to be used when there are no user preferences available
    const preferDarkQuery = "(prefers-color-schema:dark)";
    const storageKey = "theme";

    const toggleTheme = theme => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        window.localStorage.setItem(storageKey, theme)
    }

    const getUserPreference = () => {
        const userPref = window.localStorage.getItem(storageKey);
        console.log(`usePref from useThemeSwitcher: ${userPref}`);
        if(userPref){
            return userPref
        }
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light"
    }

    const [mode, setMode] = useState("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        // fetching and setting the user preference
        const handleChange = () =>{
            const newMode = getUserPreference();
            console.log(`Mode changed to ${newMode}`)
            setMode(newMode);
            toggleTheme(newMode);
        }

        handleChange();
        // Detect the click on theme switch button and change the theme appropriately
        mediaQuery.addEventListener("change", handleChange)
        
        return(
            mediaQuery.removeEventListener("change", handleChange)
        );
    },[]);

    useEffect(() => {
        toggleTheme(mode);
    },[mode]);

    return [mode, setMode];
}
