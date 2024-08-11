import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './pageOurLoans.layout.scss?inline';
import { LoanSolutions } from "~/components/loanSolutions/loanSolutions";

export const PageOurLoansLayout = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="loan-solutions">
        <h1>Nos prêts</h1>
        <LoanSolutions />
      </section>
    </>
  )
})