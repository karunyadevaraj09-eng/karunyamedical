export interface MedicalCondition {
  id: string;
  name: string;
  category: 'symptom' | 'disease';
  description: string;
  commonTreatments: string;
  medicationTiming: string;
}

export const medicalConditions: MedicalCondition[] = [
  {
    id: '1',
    name: 'Headache',
    category: 'symptom',
    description: 'A headache is pain or discomfort in the head or face area. Common types include tension headaches, migraines, and cluster headaches. Triggers can include stress, dehydration, lack of sleep, or underlying conditions.',
    commonTreatments: 'Over-the-counter pain relievers (acetaminophen, ibuprofen), rest in a quiet dark room, hydration, cold or warm compress. For migraines: prescription triptans, preventive medications.',
    medicationTiming: 'Pain relievers: At onset of headache. Preventive medications (if prescribed): Daily, usually in the evening.'
  },
  {
    id: '2',
    name: 'Common Cold',
    category: 'disease',
    description: 'A viral infection of the upper respiratory tract causing runny nose, sore throat, cough, and congestion. Usually lasts 7-10 days and resolves on its own.',
    commonTreatments: 'Rest, fluids, humidifier use. Over-the-counter: decongestants, cough suppressants, pain relievers for discomfort. Vitamin C and zinc may help reduce duration.',
    medicationTiming: 'Decongestants: Every 4-6 hours as needed. Pain relievers: Every 4-6 hours as needed. Should not exceed maximum daily dose.'
  },
  {
    id: '3',
    name: 'Type 2 Diabetes',
    category: 'disease',
    description: 'A chronic condition affecting how the body processes blood sugar (glucose). The body becomes resistant to insulin or doesn\'t produce enough insulin.',
    commonTreatments: 'Lifestyle changes (diet, exercise), oral medications (metformin, sulfonylureas), insulin therapy in advanced cases. Blood sugar monitoring is essential.',
    medicationTiming: 'Metformin: Usually twice daily with meals. Long-acting insulin: Once daily, usually at bedtime. Rapid-acting insulin: With meals. Always follow doctor\'s specific instructions.'
  },
  {
    id: '4',
    name: 'Hypertension',
    category: 'disease',
    description: 'High blood pressure, where the force of blood against artery walls is consistently too high. Often called the "silent killer" as it may have no symptoms.',
    commonTreatments: 'Lifestyle modifications (low-sodium diet, exercise, weight loss), medications: ACE inhibitors, beta-blockers, diuretics, calcium channel blockers.',
    medicationTiming: 'Most blood pressure medications: Once daily in the morning. Some may be taken at night. Consistency in timing is important for effectiveness.'
  },
  {
    id: '5',
    name: 'Acid Reflux',
    category: 'symptom',
    description: 'A burning sensation in the chest (heartburn) caused by stomach acid flowing back into the esophagus. Common after eating or when lying down.',
    commonTreatments: 'Lifestyle changes (avoid trigger foods, eat smaller meals, elevate head while sleeping), antacids, H2 blockers, proton pump inhibitors (PPIs).',
    medicationTiming: 'Antacids: As needed after meals or at bedtime. H2 blockers: 30 minutes before meals or at bedtime. PPIs: 30 minutes before first meal of the day.'
  },
  {
    id: '6',
    name: 'Anxiety',
    category: 'symptom',
    description: 'Persistent feelings of worry, nervousness, or fear that interfere with daily activities. Physical symptoms may include rapid heartbeat, sweating, and difficulty concentrating.',
    commonTreatments: 'Therapy (cognitive behavioral therapy), lifestyle changes (exercise, meditation, sleep hygiene), medications: SSRIs, benzodiazepines for acute symptoms.',
    medicationTiming: 'SSRIs: Once daily, usually in morning. Benzodiazepines: As needed for acute anxiety, but not for long-term use due to dependence risk. Always under doctor supervision.'
  },
  {
    id: '7',
    name: 'Fever',
    category: 'symptom',
    description: 'Elevated body temperature above 100.4°F (38°C), usually indicating an infection or illness. The body raises temperature to help fight off infections.',
    commonTreatments: 'Rest, hydration, acetaminophen or ibuprofen to reduce fever. Lukewarm baths can help. Seek medical attention if fever is very high or persistent.',
    medicationTiming: 'Fever reducers: Every 4-6 hours as needed. Do not exceed recommended daily dose. Children should use age-appropriate formulations.'
  },
  {
    id: '8',
    name: 'Insomnia',
    category: 'symptom',
    description: 'Difficulty falling asleep, staying asleep, or waking too early. Can be caused by stress, poor sleep habits, medications, or underlying health conditions.',
    commonTreatments: 'Sleep hygiene improvements, cognitive behavioral therapy for insomnia (CBT-I), melatonin supplements, prescription sleep aids if necessary.',
    medicationTiming: 'Melatonin: 30-60 minutes before bedtime. Prescription sleep aids: Immediately before bed, only when able to get full night\'s sleep.'
  },
  {
    id: '9',
    name: 'Asthma',
    category: 'disease',
    description: 'A chronic condition where airways narrow and swell, producing extra mucus. Can cause difficulty breathing, wheezing, and coughing. Triggered by allergens, exercise, or cold air.',
    commonTreatments: 'Quick-relief inhalers (albuterol), long-term control medications (inhaled corticosteroids), avoiding triggers, allergy medications.',
    medicationTiming: 'Quick-relief inhaler: During asthma attack or before exercise. Controller medications: Twice daily, morning and evening, even when feeling well.'
  },
  {
    id: '10',
    name: 'Depression',
    category: 'disease',
    description: 'A mood disorder causing persistent feelings of sadness and loss of interest. Affects how you feel, think, and handle daily activities. Requires ongoing treatment.',
    commonTreatments: 'Psychotherapy (talk therapy), antidepressant medications (SSRIs, SNRIs), lifestyle changes (exercise, sleep routine), support groups.',
    medicationTiming: 'Antidepressants: Once daily, usually in morning or evening. Takes 4-6 weeks for full effect. Must continue even when feeling better.'
  }
];
