import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { LoanSolutions } from "~/components/loanSolutions/loanSolutions";

import styles from './pageOurLoans.layout.scss?inline';

export const PageOurLoansLayout = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="our-loans">
        <h1>Nos prêts</h1>
        <LoanSolutions />
      </section>
    </>
  )
})