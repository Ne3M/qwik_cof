import { type Signal, component$, useSignal } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { Icons } from "./components/icons/icons";

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=fallback" rel="stylesheet" />
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
        
        <Icons />

        {!isDev && <ServiceWorkerRegister />}
      </body>
    </QwikCityProvider>
  );
});
