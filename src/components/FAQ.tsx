import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-orange-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: "Comment fonctionne la période d'essai gratuite ?",
      answer: "Vous bénéficiez de 30 jours d'essai gratuit sans engagement. Pendant cette période, vous avez accès à toutes les fonctionnalités de Waariko. Aucune carte bancaire n'est requise pour commencer."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, nous utilisons un cryptage de niveau bancaire pour protéger vos données. Nos serveurs sont sécurisés et nous effectuons des sauvegardes régulières pour garantir la sécurité de vos informations."
    },
    {
      question: "Puis-je personnaliser mes factures ?",
      answer: "Absolument ! Waariko vous permet de personnaliser vos factures avec votre logo, vos couleurs d'entreprise et vos informations. Vous pouvez également créer plusieurs modèles de factures."
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons les paiements par carte bancaire, mobile money et virement bancaire. Nous travaillons avec les principaux fournisseurs de paiement en Afrique pour vous offrir un maximum de flexibilité."
    },
    {
      question: "Puis-je gérer plusieurs entreprises ?",
      answer: "Oui, notre forfait professionnel vous permet de gérer plusieurs entreprises depuis un seul compte, chacune avec ses propres paramètres et modèles de facturation."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Questions fréquentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}