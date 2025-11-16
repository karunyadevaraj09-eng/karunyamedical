import { AlertCircle, Pill, Clock } from 'lucide-react';
import { MedicalCondition } from '../data/medicalData';

interface MedicalInfoCardProps {
  condition: MedicalCondition;
}

export function MedicalInfoCard({ condition }: MedicalInfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className={`p-3 rounded-lg ${
          condition.category === 'disease' ? 'bg-red-100' : 'bg-yellow-100'
        }`}>
          <AlertCircle className={`${
            condition.category === 'disease' ? 'text-red-600' : 'text-yellow-600'
          }`} size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{condition.name}</h2>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
            condition.category === 'disease'
              ? 'bg-red-100 text-red-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {condition.category.charAt(0).toUpperCase() + condition.category.slice(1)}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">General Information</h3>
          <p className="text-gray-700 leading-relaxed">{condition.description}</p>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Pill className="text-blue-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">Common Treatments</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{condition.commonTreatments}</p>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-green-600" size={22} />
            <h3 className="text-lg font-semibold text-gray-900">Medication Timing</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{condition.medicationTiming}</p>
        </div>
      </div>
    </div>
  );
}
