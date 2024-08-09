import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { LoanTypeCard } from "~/components/loanTypeCard/loanTypeCard";

import styles from './pageOurLoans.layout.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <h1>Nos prêts</h1>
      <section class="discover-loans">
        <h2>Découvrez nos solutions de prêt</h2>
        <LoanTypeCard 
          iconClass="personal-loan" 
          title="Prêt personnel" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="money-reserve" 
          title="Réserve d'argent" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="card-cofidis" 
          title="La carte by Cofidis" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="car-loan" 
          title="Prêt voiture d'occasion" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="work-loan" 
          title="Prêt travaux" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="gold-card" 
          title="La carte assurance Gold" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
        <LoanTypeCard 
          iconClass="credit-consolidation" 
          title="Regroupement de crédit" 
          description="Prenez le volant d’un véhicule bien équipé, parfois très récent, que vous ne pourriez peut-être pas acheter neuf"
          itemsList={
            [<p key="1">Prêt à tempérament de <strong>2 500€</strong> à <strong>50 000€</strong></p>,
            <p key="2">Jusqu'à <strong>120%</strong> du montant à emprunter</p>, 
            <p key="3">Taux fixe à partir de  <strong>5,9%*</strong></p>
          ]}
        />
      </section>
    </>
  )
})