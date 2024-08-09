import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// import { Header } from "~/components/header/header";
// import { ThemeProvider } from "~/components/theme/themeProvider";
import PageOurLoansLayout from "~/layouts/pageOurLoans.layout";


export default component$(() => {
  return (
    <>
      {/* <Header />
      <ThemeProvider/> */}
      <PageOurLoansLayout />
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
