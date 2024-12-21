import React from 'react';
import { LucideIcon } from 'lucide-react';

type AudienceCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export function AudienceCard({ Icon, title, description }: AudienceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
      <Icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}