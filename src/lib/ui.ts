const buttonBase =
  "group inline-flex items-center justify-center gap-2 font-bold tracking-[-0.01em] transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100";

const buttonVariants = {
  primary:
    "rounded-2xl bg-sky-600 px-6 py-3.5 text-sm text-white shadow-[0_18px_36px_rgba(14,165,233,0.26)] hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-[0_22px_44px_rgba(14,165,233,0.32)]",
  secondary:
    "rounded-2xl border border-sky-100 bg-white px-6 py-3.5 text-sm text-slate-900 shadow-[0_14px_34px_rgba(14,165,233,0.1)] hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50",
  pill:
    "rounded-full bg-sky-600 px-5 py-2.5 text-sm text-white shadow-[0_14px_30px_rgba(14,165,233,0.26)] hover:-translate-y-0.5 hover:bg-sky-500",
  soft:
    "rounded-2xl border border-sky-100 bg-sky-50 px-5 py-3 text-sm text-sky-800 shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_30px_rgba(14,165,233,0.12)]",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export function buttonClass(
  variant: ButtonVariant = "primary",
  className = "",
) {
  return `${buttonBase} ${buttonVariants[variant]} ${className}`.trim();
}
