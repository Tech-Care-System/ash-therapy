export const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ash Therapy & Counselling",
    "image": "https://ash-therapy.com/icon.png",
    "description": "Professional online therapy and counselling with Ashmeet Sachdev (MSc, MBACP). A safe, supportive space for depression, anxiety, and personal growth.",
    "url": "https://ash-therapy.com",
    "priceRange": "£50",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "founder": {
      "@type": "Person",
      "name": "Ashmeet Sachdev",
      "jobTitle": "Psychotherapist",
      "honorificSuffix": "MSc, MBACP"
    },
    "medicalSpecialty": "Psychotherapy",
    "availableService": {
      "@type": "MedicalTherapy",
      "name": "Online Counselling"
    },
    "isAccessibleForFree": false
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
