import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, Clock, Briefcase } from 'lucide-react';
import { FadeIn, SectionTag, SectionHeading, FormInput, FormSelect, FormTextarea, BtnPrimary } from '../components/ui';
import { JOBS } from '../data';
import type { Job } from '../types';

const DEPTS = ['All', 'Retail', 'Creative', 'Operations', 'Support', 'Digital'];

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start p-6 border-b border-slate-100">
          <div>
            <h2 className="font-display font-bold text-lg text-navy">Apply for Position</h2>
            <p className="text-slate-500 text-sm mt-0.5">{job.title}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10">
              <span className="text-5xl block mb-4">✅</span>
              <h3 className="font-display font-bold text-xl text-navy mb-2">Application Submitted!</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-4">
                Thank you for applying! Our team will review your application and get back to you within 5 business days.
              </p>
              <button onClick={onClose} className="text-royal font-semibold text-sm hover:underline">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="First Name *" id="app-fn" placeholder="John" required />
                <FormInput label="Last Name *" id="app-ln" placeholder="Kamau" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Email *" id="app-em" type="email" placeholder="john@email.com" required />
                <FormInput label="Phone *" id="app-ph" type="tel" placeholder="+254 712 345 678" required />
              </div>
              <FormSelect
                label="Years of Experience *"
                id="app-exp"
                required
                options={['Select...', 'Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years']}
              />
              <FormInput label="Current / Most Recent Role" id="app-role" placeholder="e.g. Retail Associate at XYZ Shop" />
              <FormTextarea
                label="Why StrideStep? *"
                id="app-cover"
                rows={4}
                placeholder="Tell us why you'd be a great addition to our team..."
                required
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy uppercase tracking-wider">Upload CV (PDF / Word) *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-600 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-navy file:text-white file:text-xs file:font-semibold cursor-pointer"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="app-consent" required className="mt-1" />
                <label htmlFor="app-consent" className="text-xs text-slate-500 leading-relaxed">
                  I consent to StrideStep Shoes retaining my data for recruitment purposes.
                </label>
              </div>
              <BtnPrimary type="submit" disabled={submitting} className="w-full justify-center py-4">
                {submitting ? 'Submitting...' : 'Submit Application →'}
              </BtnPrimary>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, onApply }: { job: Job; onApply: (j: Job) => void }) {
  const deptColors: Record<string, string> = {
    'Retail': 'bg-blue-50 text-blue-700',
    'Creative': 'bg-amber-50 text-amber-700',
    'Operations': 'bg-emerald-50 text-emerald-700',
    'Support': 'bg-purple-50 text-purple-700',
    'Digital': 'bg-sky-50 text-sky-700',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-royal/30 hover:shadow-md transition-all duration-300">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${deptColors[job.department] ?? 'bg-slate-100 text-slate-600'}`}>
            {job.department}
          </span>
          <h3 className="font-display font-semibold text-navy text-lg mb-3">{job.title}</h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
              <MapPin size={11} /> {job.location}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
              <Clock size={11} /> {job.type}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
              <Briefcase size={11} /> {job.mode}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
              🎓 {job.experience}
            </span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-semibold text-navy text-sm">{job.salary}</p>
          <p className="text-slate-400 text-xs mb-3">Compensation</p>
          <BtnPrimary onClick={() => onApply(job)} className="text-xs px-5 py-2.5">
            Apply Now
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [spontaneous, setSpontaneous] = useState(false);

  const filtered = filter === 'All' ? JOBS : JOBS.filter(j => j.department === filter);

  const spontaneousJob: Job = {
    id: 0,
    title: 'General / Spontaneous Application',
    department: 'General',
    location: 'Nairobi',
    type: 'Full-Time',
    mode: 'On-site',
    salary: 'Competitive',
    experience: 'Open',
  };

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #0a2d46, #1565C0)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link to="/" className="hover:text-white no-underline text-white/50">Home</Link>
            <span>/</span><span className="text-white">Careers</span>
          </div>
          <SectionTag>Join Our Team</SectionTag>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mt-2 mb-3">Help Customers Find the Perfect Pair</h1>
          <p className="text-white/70 text-lg max-w-xl">
            We are always looking for warm, dependable people who love footwear and great service.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <SectionTag>Why StrideStep</SectionTag>
            <SectionHeading>Why Work With Us</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              ['💰', 'Competitive Pay'],
              ['📈', 'Career Growth'],
              ['🏥', 'Healthcare Support'],
              ['🎓', 'Training & Dev'],
              ['🚗', 'Transport Support'],
              ['🤝', 'Supportive Culture'],
            ].map(([icon, label]) => (
              <FadeIn key={label as string}>
                <div className="bg-slate-50 rounded-xl p-4 text-center hover:bg-navy hover:text-white transition-all duration-300 group">
                  <span className="text-3xl block mb-2">{icon}</span>
                  <p className="text-xs font-semibold text-slate-700 group-hover:text-white">{label as string}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-8">
            <SectionTag>Open Positions</SectionTag>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading>
                Current Job Openings{' '}
                <span className="text-amber-brand text-2xl">({JOBS.length})</span>
              </SectionHeading>
            </div>
          </FadeIn>

          <div className="flex gap-2 flex-wrap mb-8">
            {DEPTS.map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                  filter === d
                    ? 'bg-navy border-navy text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-navy hover:text-navy'
                }`}
              >
                {d} {d === 'All' ? `(${JOBS.length})` : `(${JOBS.filter(j => j.department === d).length})`}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((job, i) => (
              <FadeIn key={job.id} delay={i * 50}>
                <JobCard job={job} onApply={setActiveJob} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8">
            <div className="bg-white rounded-2xl p-6 border border-dashed border-slate-300 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-navy text-lg mb-1">Don't see a role that fits?</h3>
                <p className="text-slate-500 text-sm">Send us your CV — we are always on the lookout for hardworking people.</p>
              </div>
              <BtnPrimary onClick={() => { setActiveJob(spontaneousJob); setSpontaneous(true); }}>
                Send Your CV →
              </BtnPrimary>
            </div>
          </FadeIn>
        </div>
      </section>

      {activeJob && (
        <ApplyModal job={activeJob} onClose={() => { setActiveJob(null); setSpontaneous(false); }} />
      )}
      {spontaneous && !activeJob && null}
    </>
  );
}
