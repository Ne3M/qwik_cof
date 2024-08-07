import { type Signal, component$, useSignal } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isDev } from "@builder.io/qwik/build";
import {
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';

//import "./global.scss";

export const ThemeContext = createContextId<Signal<string>>(
  'docs.theme-context'
);


export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  const theme = useSignal('light');
  useContextProvider(ThemeContext, theme);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=fallback" rel="stylesheet" />
        <link
            rel="stylesheet"
            href={`${import.meta.env.BASE_URL}unminified.css`}
          />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="fr" class={theme.value}>
        <RouterOutlet />
        
        <svg xmlns="http://www.w3.org/2000/svg" class="u-hidden" aria-hidden="true">
          <symbol id="chevron_25px" viewBox="0 0 25 24" fill="none">
            <path d="M6.39209 9L11.685 14.2929C12.0183 14.6262 12.185 14.7929 12.3921 14.7929C12.5992 14.7929 12.7659 14.6262 13.0992 14.2929L18.3921 9"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </symbol>
          <symbol id="loan_25px" viewBox="0 0 25 24" fill="none">
              <path d="M13.273 7.01656L18.0459 8.28825M12.2499 10.8134L14.6363 11.4492M12.3686 17.9664L13.3231 18.2208C16.0231 18.9401 17.3731 19.2998 18.4366 18.6893C19.5001 18.0787 19.8619 16.7363 20.5853 14.0516L21.6084 10.2548C22.3319 7.57005 22.6936 6.22768 22.0796 5.17016C21.4656 4.11264 20.1156 3.75295 17.4156 3.03358L16.461 2.77924C13.7611 2.05986 12.4111 1.70018 11.3476 2.31074C10.284 2.9213 9.92232 4.26367 9.19887 6.94841L8.17575 10.7452C7.45229 13.4299 7.09057 14.7723 7.70459 15.8298C8.31861 16.8874 9.6686 17.2471 12.3686 17.9664Z" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M12.3921 20.9461L11.4397 21.2054C8.74612 21.9389 7.39931 22.3056 6.33828 21.6831C5.27726 21.0605 4.91638 19.6918 4.19462 16.9544L3.17391 13.0832C2.45215 10.3458 2.09127 8.97706 2.70386 7.89879C3.23376 6.96607 4.39209 7.00002 5.89209 6.99991" stroke-width="1.5" stroke-linecap="round"/>
          </symbol>
          <symbol id="insurance_25px" viewBox="0 0 25 24" fill="none">
            <path d="M12.3921 3.5V2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.3921 3.5C11.4528 3.5 7.92 7.29323 7.36391 12.2037M12.3921 3.5C13.3313 3.5 16.8642 7.29322 17.4203 12.2037M12.3921 3.5C17.3288 3.5 21.4466 6.93552 22.3921 11.5C21.0044 12.7 18.4994 12.4691 17.4203 12.2037M12.3921 3.5C7.45542 3.5 3.33754 6.93552 2.39209 11.5C3.78001 12.7 6.28494 12.4691 7.36391 12.2037M7.36391 12.2037C8.84799 13.0288 10.5639 13.5 12.3921 13.5C14.2203 13.5 15.9362 13.0288 17.4203 12.2037" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.3921 13.5V20.5C12.3921 21.3284 11.7205 22 10.8921 22C10.0637 22 9.39209 21.3284 9.39209 20.5V20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </symbol>
        </svg>

        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
