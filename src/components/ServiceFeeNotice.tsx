import { ShieldCheck } from "lucide-react";

const ServiceFeeNotice = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/90 shadow-md p-10 max-w-5xl mx-auto my-16 transition-all hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-inner">
          <ShieldCheck className="h-7 w-7" />
        </div>

        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Service Fees & Processing Costs
          </h3>

          <p className="text-base text-gray-700 mb-5 leading-relaxed">
            Edenz Consultant does not charge a single fixed “one size fits all” fee.
            Each student’s case is unique — the <strong>destination country</strong>,
            <strong> program type</strong>, <strong>academic profile</strong>, and
            <strong> visa category</strong> all influence the level of effort and
            documentation required.
          </p>

          <p className="text-base text-gray-700 mb-5 leading-relaxed">
            Our professional service fee covers expert counselling, admission
            strategy, document verification, statement of purpose / study plan
            assistance, application submission, and visa file preparation. The exact
            amount is discussed <strong>transparently</strong> before work begins.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            Please note that <strong>third-party costs</strong> such as university
            application fees, embassy or visa application fees, biometric charges,
            medical exams, language tests (IELTS, PTE, TOEFL), translations, or
            notarization are paid directly to the respective institutions and are
            <strong> not included</strong> in our consultancy service fee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeeNotice;
