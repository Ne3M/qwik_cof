import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Header } from "../components/header/header";


export default component$(() => {
  return (
    <>
      <Header />
      
      <main>
        <div>
          Can't wait to see what you build with qwik!
          <br />
          Happy coding.
        </div>
      </main>
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
