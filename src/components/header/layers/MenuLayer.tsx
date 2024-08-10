import { Slot, component$, useContext } from "@builder.io/qwik";

export const MenuLayer = component$(() => {
    return <div class="menu-layer">
        <button class="menu-layer__close" onClick$={() => document.querySelectorAll('.main-nav__link').forEach(el => el.classList.remove('u_opened-layer'))}>
            <svg class="menu-layer__close-icon" width="48" height="48" aria-hidden="true">
                <use href="#close_48px"></use>
            </svg>
        </button>

        <div class="menu-layer__container">
            <Slot name="title" />
            <div class="menu-layer__items">
                <Slot name="items" />
            </div>
        </div>
    </div>
});