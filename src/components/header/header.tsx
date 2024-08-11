
import { component$, useContext, useSignal, $, useStylesScoped$ } from "@builder.io/qwik";
import { ThemeContext } from "../../root"
import { MenuLayer } from "./layers/MenuLayer"
import { LoanLayer } from "./layers/LoanLayer"
import { SimpleLayer } from "./layers/SimpleLayer"
import menuConf from "./menuConf.json"


//import styles from './header.scss?inline';

export const Header = component$(() => {
    // useStylesScoped$(styles);

    const menuMobileOpen = useSignal(true);
    const theme = useContext(ThemeContext);

    const handleMobileNavOpening = $((e: Event) => {
        menuMobileOpen.value = !menuMobileOpen.value
    });

    const handleLayerOpening = $((e: Event) => {
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
        <header class={`main-header ${menuMobileOpen.value ? 'main-header--nav-mobile-opened': ''}`}>
            <aside class="preheader">
                <div class="preheader__credit-warning">
                    <svg class="preheader__credit-warning-icon" width="25" height="24" aria-hidden="true">
                        <use href="#attention_25px"></use>
                    </svg>
                    Attention, emprunter de l'argent coûte aussi de l'argent
                </div>
                <div class="preheader__secondary-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">Espace professionnels</a>
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
                
                <button class="main-nav__nav-mobile-btn" onClick$={handleMobileNavOpening}>
                    {menuMobileOpen.value ?
                        <svg class="main-nav__nav-mobile-icon" width="40" height="40" aria-hidden="true">
                            <use href="#close_48px"></use>
                        </svg>  
                        :
                        <svg class="main-nav__nav-mobile-icon" width="40" height="40" aria-hidden="true">
                            <use href="#menu_24px"></use>
                        </svg>
                    }
                </button>

                <ul class="main-nav__links">
                    <li>
                        <button class="main-nav__link" onClick$={handleLayerOpening}> 
                            Nos prêts
                            <svg class="main-nav__link-icon main-nav__link-chevron" width="25" height="24" aria-hidden="true">
                                <use href="#chevron_25px"></use>
                            </svg>
                        </button>
                        <MenuLayer>
                            <div class="menu-layer__title" q:slot="title">
                                <strong class="u-font-bold u-font-34">Simplifier vos dépenses avec nos solutions de financement</strong>
                                <p class="u-font-18">Votre besoin concerne :</p>
                            </div>
                            <ul q:slot="items">
                                {menuConf.loanMenuConf.map((loanItem, i) => 
                                    <LoanLayer 
                                        key={i}
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
                        <button class="main-nav__link" onClick$={handleLayerOpening}>
                            Nos assurances
                            <svg class="main-nav__link-icon main-nav__link-chevron" width="25" height="24" aria-hidden="true">
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
                                {menuConf.insuranceMenuConf.map((insuranceItem, i) => 
                                    <SimpleLayer 
                                        key={i}
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
                        <button class="main-nav__link" onClick$={handleLayerOpening}>
                            Qui sommes-nous ?
                            <svg class="main-nav__link-icon main-nav__link-chevron" aria-hidden="true">
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
                                {menuConf.whoWeAre.map((whoWeAreItem, i) => 
                                    <SimpleLayer 
                                        key={i}
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
                    <li class="u-hidden-desk">
                        <a href="#" target="_blank" class="main-nav__link main-nav__link--external" rel="noopener noreferrer">
                            <span>Espace professionnels</span>
                            <svg class="main-nav__link-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1.25H11.9426C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C12.4142 2.75 12.75 2.41421 12.75 2C12.75 1.58579 12.4142 1.25 12 1.25Z"/>
                                <path d="M12.4697 10.4697C12.1768 10.7626 12.1768 11.2374 12.4697 11.5303C12.7626 11.8232 13.2374 11.8232 13.5303 11.5303L21.25 3.81066V7.34375C21.25 7.75796 21.5858 8.09375 22 8.09375C22.4142 8.09375 22.75 7.75796 22.75 7.34375V2C22.75 1.58579 22.4142 1.25 22 1.25H16.6562C16.242 1.25 15.9062 1.58579 15.9062 2C15.9062 2.41421 16.242 2.75 16.6562 2.75H20.1893L12.4697 10.4697Z"/>
                            </svg>
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