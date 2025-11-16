import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 max-w-3xl">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-amber-900 mb-2">Important Medical Disclaimer</h3>
          <p className="text-amber-800 leading-relaxed">
            This information is for educational purposes only and is <strong>not medical advice</strong>.
            Always consult a qualified healthcare professional for diagnosis, treatment plans, and prescriptions.
            Never start, stop, or change medications without your doctor's guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
