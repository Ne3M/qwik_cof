
import { Slot, component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "../../root"

export const ThemeProvider = component$(() => {

    const theme = useContext(ThemeContext);

    return <>
        <p>One day, i'll handle light and dark mode.<br/>
        Currently using {`<${theme.value}>`} mode</p>
        <button class="button button--secondary" onClick$={() => theme.value = theme.value == 'dark' ? 'light':'dark' }>Switch mode {theme.value == 'dark' ? '☀️':'🌒'}</button>
    </>
});