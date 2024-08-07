import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Header } from "../components/header/header";
import { ThemeProvider } from "../components/theme/themeProvider";


export default component$(() => {
  return (
    <>
      <Header />
      <ThemeProvider/>
      
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Cofidis.be powered by Qwik",
  meta: [ 
    {
      name: "description",
      content: "Demo CofidisBExQwik",
    },
  ],
};
