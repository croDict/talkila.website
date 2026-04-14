import type { Dictionary } from "@/app/[lang]/dictionaries";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-14">
          {dict.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dict.howItWorks.steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand text-white text-2xl font-bold flex items-center justify-center mx-auto">
                {step.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-zinc-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
