import type { JSXOutput } from "@builder.io/qwik";
import { $, component$, useSignal } from "@builder.io/qwik";

import { unexpectedExpense, specificProject } from "~/constants/loan.constants";

import { LoanTypeCard } from "~/components/loanTypeCard/loanTypeCard";
import { SelectLoanSolutions } from "~/components/selectLoanSolutions/selectLoanSolutions";

interface LoanItem {
  iconClass: string;
  title: string;
  description: string;
  itemsList: JSXOutput[];
}

export const LoanSolutions = component$(() => {
  const loanSolutions = useSignal<LoanItem[]>(unexpectedExpense)
  const leftActive = useSignal<boolean>(true)

  const toggleLoanSolutions = $((): void => {
    if (leftActive.value) {
      loanSolutions.value = specificProject
    } else {
      loanSolutions.value = unexpectedExpense
    }
    leftActive.value= !leftActive.value
  })

  return (
    <>
      {/* <q class="loan-solution__catchprase">Simplifier vos dépenses avec nos solution de financement</q>
      <p>Votre besoin concerne</p> */}
      <SelectLoanSolutions toggleCallback={toggleLoanSolutions} leftActive={leftActive.value} />
      <h2>Découvrez nos solutions de prêt</h2>
      {loanSolutions.value.map((loanItem: LoanItem, index) => {
        const { iconClass, title, description, itemsList} = loanItem
        return (
          <LoanTypeCard key={index} iconClass={iconClass} title={title} description={description} itemsList={itemsList} />
        )
      })}
    </>
  )
})