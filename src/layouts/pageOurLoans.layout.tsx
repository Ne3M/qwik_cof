import { component$, useOnDocument, useStylesScoped$, $, useSignal } from "@builder.io/qwik";

import { LoanSolutions } from "~/components/loanSolutions/loanSolutions";
import ImgAskLoanMobile from '~/media/img/ask_loan_mobile.jpg?jsx'
import ImgAskLoanDesktop from '~/media/img/ask_loan_desktop.jpg?jsx'
import ClockIcon from '~/media/svg/clock.svg?jsx'
import MailIcon from '~/media/svg/mail.svg?jsx'
import WaitIcon from '~/media/svg/wait.svg?jsx'

import styles from './pageOurLoans.layout.scss?inline';

export const PageOurLoansLayout = component$(() => {
  useStylesScoped$(styles);
  
  const isMobile = useSignal<boolean>(true)

  const setIsMobile = $(() => {
    if (window.innerWidth > 768) {
      isMobile.value = false
    } else {
      isMobile.value = true
    }
    console.log(isMobile.value)
  })

  useOnDocument('DOMContentLoaded', $(() => {
    setIsMobile()
    window.onresize = () => {
      setIsMobile()
    }
  }))

  return (
    <>
      <section class="our-loans">
        <h1>Nos prêts</h1>
        <LoanSolutions />
        <section class="main-layout">
          <h2>Demandez votre prêt personnel en ligne en seulement 3 étapes</h2>
          <div class="our-loans__ask">
            {isMobile.value === true ? (<ImgAskLoanMobile alt="" />) : (<ImgAskLoanDesktop alt="" />)}
            <ol class="our-loans__ask-items">
              <li class="our-loans__ask-item">
                <ClockIcon class="our-loans__ask-item__icon"/>
                <p>Je choisis mon crédit et remplis le formulaire en ligne en <b>5 min</b>.</p>
              </li>
              <li class="our-loans__ask-item">
                <MailIcon class="our-loans__ask-item__icon"/>
                <p>Je reçois une réponse de principe sous <b>24 h</b>, sans attendre.</p>
              </li>
              <li class="our-loans__ask-item">
                <WaitIcon class="our-loans__ask-item__icon"/>
                <p>Après acceptation, la somme est versée sous <b>48 h</b> sur mon compte.</p>
              </li>
            </ol>
          </div>
        </section>
      </section>
    </>
  )
})