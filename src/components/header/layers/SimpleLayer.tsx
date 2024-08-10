import { component$ } from "@builder.io/qwik";

interface LoanProps {
    title: string;
    description: string;
    imgPath?: string;
    linkHref: string;
}

export const SimpleLayer = component$<LoanProps>(({title, description, imgPath, linkHref}) => {
    return <li class="menu-layer__simple">
            <a href={linkHref} class="menu-layer__simple-link">

                { imgPath &&  
                    <div  class="menu-layer__simple-icon">
                        <img src={imgPath} alt={'title'} loading="lazy" width="31" height="30" />
                    </div>
                }
               
                <p>
                    <strong class="menu-layer__simple-title">{title}</strong>
                    {description}
                </p>
                <svg class="menu_simple-link-icon" width="19" height="12">
                    <use href="#arrow_19px"></use>
                </svg>
            </a>
    </li>
});