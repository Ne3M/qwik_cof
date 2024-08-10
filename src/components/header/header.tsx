
import { component$, useContext, $, useStylesScoped$ } from "@builder.io/qwik";
import { ThemeContext } from "../../root"
import { MenuLayer } from "./layers/MenuLayer"
import { LoanLayer } from "./layers/LoanLayer"
import { SimpleLayer } from "./layers/SimpleLayer"
import menuConf from "./menuConf.json"


//import styles from './header.scss?inline';

export const Header = component$(() => {
    // useStylesScoped$(styles);

    const theme = useContext(ThemeContext);
    const activeMenu = $((e: Event) => {
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('u_opened-layer')){
                e.target.classList.remove('u_opened-layer')
                return
            }
        }
        document.querySelectorAll('.main-nav__link').forEach(el => el.classList.remove('u_opened-layer'));
        if (e.target instanceof HTMLElement) {
            e.target.classList.add('u_opened-layer')
        }
    });

    return <>

        <header class="main-header">
            <aside class="preheader">
                <div class="preheader__credit-warning">
                    <svg class="preheader__credit-warning-icon" width="25" height="24" aria-hidden="true">
                        <use href="#attention_25px"></use>
                    </svg>
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
                <h1 class="main-nav__logo"><img src="/logo.svg" alt="Cofidis" width={175} height={113} /></h1>
                <ul class="main-nav__links">
                    <li>
                        <button class="main-nav__link" onClick$={activeMenu}> 
                            Nos prêts
                            <svg class="main-nav__link-chevron" width="25" height="24" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </button>
                        <MenuLayer>
                            <div class="menu-layer__title" q:slot="title">
                                <strong class="u-font-bold u-font-34">Simplifier vos dépenses avec nos solutions de financement</strong>
                                <p class="u-font-18">Votre besoin concerne :</p>
                            </div>
                            <ul q:slot="items">
                                {menuConf.loanMenuConf.map(loanItem => 
                                    <LoanLayer 
                                        title={loanItem.title}
                                        description={loanItem.description}
                                        imgPath={loanItem.imgPath}
                                        compareLink={loanItem.compareLink}
                                        menu={loanItem.menu}
                                    ></LoanLayer>
                                )}
                            </ul>
                        </MenuLayer>
                    </li>
                    <li>
                        <button class="main-nav__link" onClick$={activeMenu}>
                            Nos assurances
                            <svg class="main-nav__link-chevron" width="25" height="24" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </button>
                        <MenuLayer>
                            <div class="menu-layer__title" q:slot="title">
                                <strong class="u-font-bold u-font-34">Votre bouclier financier face aux aléas de la vie</strong>
                                <p>
                                    <a href="#" class="button button--secondary">Voir toutes nos offres</a>
                                </p>
                            </div>
                            <ul q:slot="items"class="menu-layer__simple-items">
                                {menuConf.insuranceMenuConf.map(insuranceItem => 
                                    <SimpleLayer 
                                        title={insuranceItem.title}
                                        description={insuranceItem.description}
                                        imgPath={insuranceItem.imgPath}
                                        linkHref={insuranceItem.linkHref}
                                    ></SimpleLayer>
                                )}
                            </ul>
                        </MenuLayer>
                    </li>
                    <li>
                        <button class="main-nav__link" onClick$={activeMenu}>
                            Qui sommes-nous ?
                            <svg class="main-nav__link-chevron" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </button>
                        <MenuLayer>
                            <div class="menu-layer__title" q:slot="title">
                                <strong class="u-font-bold  u-font-34">Nos experts du crédit vous accompagne depuis plus de 30 ans</strong>
                                <p>
                                    <a href="#" class="button button--primary">En savoir plus sur Cofidis</a>
                                </p>
                            </div>
                            <ul q:slot="items"class="menu-layer__simple-items">
                                {menuConf.whoWeAre.map(whoWeAreItem => 
                                    <SimpleLayer 
                                        title={whoWeAreItem.title}
                                        description={whoWeAreItem.description}
                                        linkHref={whoWeAreItem.linkHref}
                                    ></SimpleLayer>
                                )}
                            </ul>
                        </MenuLayer>
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