import type { JSXOutput} from "@builder.io/qwik";
import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './loanTypeCard.scss?inline';

import CheckIcon from '~/media/svg/check.svg?jsx'

interface LoanTypeCardProps {
  iconClass: string;
  title: string;
  description: string;
  itemsList: JSXOutput[];
}

export const LoanTypeCard = component$((props: LoanTypeCardProps) => {
  useStylesScoped$(styles);

  const { iconClass, title, description, itemsList } = props
  
  return (
    <div class="loan-type-card">
      <div class={`loan-type-card__header ${iconClass}`}>
        <h3 class={`loan-type-card__title ${iconClass}`}>{title}</h3>
        <p class="loan-type-card__desc">{description}</p>
      </div>
      <ul class="loan-type-card__list">
        {itemsList.map((item: JSXOutput, index) => {
          return (
            <li key={index} class="loan-type-card__list-item"><CheckIcon class="loan-type-card__list-icon" />{item}</li>
          )
        })}
      </ul>
      <a href="#" class="loan-type-card__button">En savoir plus</a>
    </div>
  )
})