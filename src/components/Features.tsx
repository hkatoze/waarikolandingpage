import React from 'react';
import { FileText, Shield, Clock } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-20 bg-orange-50" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Tout ce dont vous avez besoin pour gérer votre entreprise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-orange-600" />}
            title="Facturation Simple"
            description="Créez des factures professionnelles en quelques secondes avec nos modèles personnalisables"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-orange-600" />}
            title="Sécurisé"
            description="Vos données sont protégées avec un cryptage de niveau bancaire"
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-orange-600" />}
            title="Gain de temps"
            description="Automatisez vos tâches administratives et concentrez-vous sur votre activité"
          />
        </div>
      </div>
    </section>
  );
}