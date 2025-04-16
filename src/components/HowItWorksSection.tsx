import { Search, Calendar, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find the Perfect Match",
    description: "Browse profiles of verified caregivers near you, read reviews from other pet owners, and find someone who'll be a great fit for your pet.",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    icon: Calendar,
    title: "Book Your Service",
    description: "Schedule easily with just a few taps. Share your pet's needs, preferences, and any special instructions so the caregiver is fully prepared.",
    color: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Pay safely through our app – no cash needed. You're only charged after your pet has received care and the service is complete.",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    icon: CheckCircle,
    title: "Receive Updates",
    description: "Get photos and updates during your pet's care sessions. See how they're enjoying their time while you're away.",
    color: "bg-purple-100",
    textColor: "text-purple-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="how-it-works">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding quality pet care is easy. See how quickly you can connect with trusted caregivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                <step.icon size={28} className={step.textColor} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-semibold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block h-0.5 bg-gray-200 w-full ml-4 mr-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-critter-purple/5 border border-critter-purple/20 rounded-xl p-6 text-center">
          <p className="text-gray-700 font-medium">
            Every service includes our <span className="text-critter-purple font-semibold">Satisfaction Guarantee</span> and veterinary protection for complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
