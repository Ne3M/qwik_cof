import type { JSXOutput } from "@builder.io/qwik";
import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

import { unexpectedExpense, specificProject } from "~/constants/loan.constants";

import { LoanTypeCard } from "~/components/loanTypeCard/loanTypeCard";
import { SelectLoanSolutions } from "~/components/selectLoanSolutions/selectLoanSolutions";

import styles from './loanSolutions.scss?inline';

interface LoanItem {
  iconClass: string;
  title: string;
  description: string;
  itemsList: JSXOutput[];
}

export const LoanSolutions = component$(() => {
  useStylesScoped$(styles);

  const loanSolutions = useSignal<LoanItem[]>(unexpectedExpense)
  const leftActive = useSignal<boolean>(true)
  const loanList = useSignal<Element>()

  const toggleLoanSolutions = $((): void => {
    if (leftActive.value) {
      loanSolutions.value = specificProject
    } else {
      loanSolutions.value = unexpectedExpense
    }
    leftActive.value= !leftActive.value
    setTimeout(() => {
      loanList.value?.scrollIntoView({ behavior: "smooth" })
    }, 300)
  })

  return (
    <section class="loan-solutions">
      <q class="loan-solutions__catchphrase">Simplifier vos dépenses<br/>avec nos solution de financement</q>
      <p class="loan-solutions__need">Votre besoin concerne</p>
      <SelectLoanSolutions toggleCallback={toggleLoanSolutions} leftActive={leftActive.value} />
      <section ref={loanList} class="main-layout">
        <h2>Découvrez nos solutions de prêt</h2>
        <div class="loan-solutions__list">
          {loanSolutions.value.map((loanItem: LoanItem, index) => {
            const { iconClass, title, description, itemsList} = loanItem
            return (
              <LoanTypeCard key={index} iconClass={iconClass} title={title} description={description} itemsList={itemsList} />
            )
          })}
        </div>
      </section>
    </section>
  )
})