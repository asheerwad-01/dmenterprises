import { ShieldCheck, Truck, RotateCcw, Award, Headset } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    { icon: <Award className="text-primary" />, title: "Premium Quality", desc: "Top-grade materials & finishing" },
    { icon: <ShieldCheck className="text-primary" />, title: "Secure Payments", desc: "100% safe & secure transactions" },
    { icon: <Truck className="text-primary" />, title: "Pan India Delivery", desc: "Fast & reliable shipping across India" },
    { icon: <Headset className="text-primary" />, title: "24/7 Support", desc: "Friendly customer assistance anytime" },
  ];

  return (
    <section className="py-8 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto glass rounded-[24px] grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 group">
            <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-all duration-300">
              {f.icon}
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-xs font-extrabold text-navy-dark uppercase tracking-tight">{f.title}</h4>
                <p className="text-[10px] text-gray-500 font-medium leading-tight">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
