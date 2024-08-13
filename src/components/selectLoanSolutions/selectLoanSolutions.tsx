import type { QRL} from "@builder.io/qwik";
import { component$, useStylesScoped$, $ } from "@builder.io/qwik";

import ImgUnexpectedExpense from '~/media/img/unexpected_expense.jpg?jsx'
import ImgSpecificProject from '~/media/img/specific_project.jpg?jsx'
import ArrowIcon from '~/media/svg/arrow.svg?jsx'

import styles from './selectLoanSolutions.scss?inline';

interface SelectLoanSolutionsProps {
  toggleCallback: QRL<() => void>,
  leftActive: boolean
}

export const SelectLoanSolutions = component$((props: SelectLoanSolutionsProps) => {
  useStylesScoped$(styles);

  const { toggleCallback, leftActive } = props
  
  const handleClickUnexpectedExpense = $((): void => {
    if (leftActive) return
    toggleCallback()
  })

  const handleClickSpecificProject = $((): void => {
    if (!leftActive) return
    toggleCallback()
  })

  return (
    <div class="select-loan-solutions">
      <div class="select-loan-solutions__switch">
        <div class={`select-loan-solutions__switch-wrapper ${leftActive ? 'left' : 'right'}`}>
          <button disabled={leftActive} onClick$={toggleCallback} class="select-loan-solutions__button">Une dépense imprévue</button>
          <button disabled={!leftActive} onClick$={toggleCallback} class="select-loan-solutions__button">Un projet spécifique</button>
        </div>
      </div>
      <div class="select-loan-solutions__cards">
        <div class="select-loan-solutions__cards-wrapper">
          <div class={`select-loan-solutions__cards-wrapper-item ${leftActive ? 'active' : ''}`}>
            <button class="select-loan-solutions__cards-item" onClick$={handleClickUnexpectedExpense}>
              <div class="select-loan-solutions__cards-crop">
                <ImgUnexpectedExpense alt="" />
              </div>
              <div class="select-loan-solutions__cards-text">
                <strong>Une dépense imprévue</strong>
                <p>comme des frais médicaux, des réparations importantes ou encore un évènement familiale inattendu ?</p>
                {leftActive && (<ArrowIcon class="select-loan-solutions__cards-icon" />)}
              </div>
            </button>
          </div>
          <div class={`select-loan-solutions__cards-wrapper-item ${!leftActive ? 'active' : ''}`}>
            <button class="select-loan-solutions__cards-item" onClick$={handleClickSpecificProject}>
              <div class="select-loan-solutions__cards-crop">
                <ImgSpecificProject alt="" />
              </div>
              <div class="select-loan-solutions__cards-text">
                <strong>Un projet spécifique</strong>
                <p>comme rénover votre maison, acheter une voiture ou faire le tour du monde ?</p>
                {!leftActive && (<ArrowIcon class="select-loan-solutions__cards-icon" />)}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})