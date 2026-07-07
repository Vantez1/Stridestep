// src/components/ui/index.tsx
import { type ReactNode } from 'react';
import { useInView } from '../../hooks';

/* ── FadeIn wrapper ─────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}
export function FadeIn({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, inView } = useInView();
  const base = 'transition-all duration-700 ease-out';
  const hidden =
    direction === 'up' ? 'opacity-0 translate-y-6'
    : direction === 'left' ? 'opacity-0 -translate-x-8'
    : direction === 'right' ? 'opacity-0 translate-x-8'
    : 'opacity-0';
  const visible = 'opacity-100 translate-y-0 translate-x-0';
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${inView ? visible : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Section label ──────────────────────────────────────────── */
export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-brand bg-amber-brand/10 px-3 py-1.5 rounded-full mb-3">
      {children}
    </span>
  );
}

/* ── Section heading ────────────────────────────────────────── */
export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display font-bold text-3xl sm:text-4xl text-navy leading-tight ${className}`}>
      {children}
    </h2>
  );
}

/* ── Primary button ─────────────────────────────────────────── */
interface BtnProps { children: ReactNode; onClick?: () => void; type?: 'button' | 'submit'; className?: string; disabled?: boolean; }
export function BtnPrimary({ children, onClick, type = 'button', className = '', disabled }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-brand text-white font-semibold text-sm hover:bg-amber-600 active:scale-95 transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

/* ── Outline button ─────────────────────────────────────────── */
export function BtnOutline({ children, onClick, type = 'button', className = '' }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/50 text-white font-semibold text-sm hover:bg-white hover:text-navy active:scale-95 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

/* ── Form input ─────────────────────────────────────────────── */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; }
export function FormInput({ label, id, className = '', ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-navy uppercase tracking-wider">{label}</label>
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-royal transition-colors bg-white ${className}`}
        {...rest}
      />
    </div>
  );
}

/* ── Form select ────────────────────────────────────────────── */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label: string; options: string[]; }
export function FormSelect({ label, id, options, className = '', ...rest }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-navy uppercase tracking-wider">{label}</label>
      <select
        id={id}
        className={`w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 outline-none focus:border-royal transition-colors bg-white cursor-pointer ${className}`}
        {...rest}
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* ── Form textarea ──────────────────────────────────────────── */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label: string; }
export function FormTextarea({ label, id, className = '', ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-navy uppercase tracking-wider">{label}</label>
      <textarea
        id={id}
        className={`w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-royal transition-colors bg-white resize-none ${className}`}
        {...rest}
      />
    </div>
  );
}

/* ── Status badge ───────────────────────────────────────────── */
type BadgeVariant = 'transit' | 'delivered' | 'pending' | 'warning';
export function StatusBadge({ variant, children }: { variant: BadgeVariant; children: ReactNode }) {
  const styles: Record<BadgeVariant, string> = {
    transit: 'bg-amber-50 text-amber-700 border-amber-200',
    delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pending: 'bg-slate-100 text-slate-600 border-slate-200',
    warning: 'bg-red-50 text-red-700 border-red-200',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${styles[variant]}`}>
      {children}
    </span>
  );
}

/* ── Card wrapper ───────────────────────────────────────────── */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
