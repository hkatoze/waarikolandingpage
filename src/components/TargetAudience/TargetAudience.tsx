import React from "react";
import { Building2, Rocket, Users } from "lucide-react";
import { AudienceCard } from "./AudienceCard";

export function TargetAudience() {
  const audiences = [
    {
      Icon: Building2,
      title: "Les PME",
      description:
        "Gérez efficacement votre comptabilité et vos factures pour vous concentrer sur votre croissance",
    },
    {
      Icon: Rocket,
      title: "Les Startups",
      description:
        "Automatisez vos processus de facturation dès le début pour gagner en efficacité",
    },
    {
      Icon: Users,
      title: "Les Freelancers",
      description:
        "Simplifiez votre gestion administrative et gardez le focus sur vos clients",
    },
  ];

  return (
    <section className="py-20 bg-orange-50" id="cible">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Waariko est le compagnon idéal pour
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} {...audience} />
          ))}
        </div>
      </div>
    </section>
  );
}
