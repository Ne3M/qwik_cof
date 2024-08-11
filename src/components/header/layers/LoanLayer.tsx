import { Slot, component$, useContext } from "@builder.io/qwik";

interface LoanLink {
    text: string;
    linkHref: string;
    icon: string;
}

interface LoanProps {
    title: string;
    description: string;
    imgPath: string;
    compareLink: string;
    menu: Array<LoanLink>;
}

export const LoanLayer = component$<LoanProps>(({title, description, imgPath, compareLink, menu}) => {

    return <li class="menu-loan">
            <button class="menu-loan__nav-button">
                <img src={imgPath} alt={'title'} class="menu-loan__img" loading="lazy" width="162" height="162" />
                <div class="menu_loan-title">
                    <strong>{title}</strong>
                    <p>
                        {description}
                    </p>
                    <p>
                        <a href={compareLink} class="button button--secondary">Comparer nos offres</a>
                    </p>
                </div>
                <svg class="menu-loan__chevron" width="25" height="24" aria-hidden="true">
                    <use href="#chevron_25px"></use>
                </svg>
            </button>
            <ul class="menu_loan-links">
            {menu.map((m,i) => {
                return <li class="menu_loan-link" key={i}>
                    <a href={m.linkHref}>
                        <img src={m.icon} alt={m.text}  loading="lazy" width={31} height={30}/>
                        <span>{m.text}</span>
                        <svg class="menu_loan-link-icon" width="19" height="12">
                            <use href="#arrow_19px"></use>
                        </svg>
                    </a>
                </li>
            })}
            </ul>
    </li>
});