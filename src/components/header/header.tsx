
import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { ThemeContext } from "../../root"

//import styles from './header.scss?inline';

export const Header = component$(() => {
    // useStylesScoped$(styles);
    const theme = useContext(ThemeContext);
    return <>
        <header class="main-header">
            <aside class="preheader">
                <div class="preheader__credit-warning">
                    Attention, emprunter de l'argent coûte aussi de l'argent
                </div>
                <div class="preheader__secondary-links">
                    <a href="#">Espace professionnels</a>
                    <span class="preheader__lang-selector">
                        <a href="#">FR</a>
                        |
                        <a href="#">NL</a>
                    </span>
                    <button class="button button--theme" onClick$={() => theme.value = theme.value == 'dark' ? 'light':'dark' }>☀️ 🌒</button>
                </div>
            </aside>
            <nav class="main-nav">
                <h1 class="main-nav__logo"><img src="/logo.svg" alt="Cofidis" /></h1>
                <ul class="main-nav__links">
                    <li>
                        <a href="#" class="main-nav__link main-nav__link--loan">
                            <svg class="main-nav__link-icon" width="25" height="24" fill="none">
                                <use href="#loan_25px"></use>
                            </svg>
                            Nos prêts
                            <svg class="main-nav__link-chevron" width="25" height="24" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="main-nav__link">
                            <svg class="main-nav__link-icon" width="25" height="24">
                                <use href="#insurance_25px"></use>
                            </svg>
                            Nos assurances
                            <svg class="main-nav__link-chevron" width="25" height="24" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="main-nav__link">
                            Qui sommes-nous ?
                            <svg class="main-nav__link-chevron" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="main-nav__link">
                            Le blog
                        </a>
                    </li>
                </ul>
                <div class="main-nav__secondary-links">
                    <a href="#" class="u-font-bold">Se connecter</a>
                    <a href="#" class="button button--primary">Je simule mon prêt</a>
                </div>
            </nav>
        </header>
    </>
});