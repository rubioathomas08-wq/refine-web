import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 text-center";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25",
    secondary:
      "border border-white/20 text-off-white hover:border-primary hover:text-primary",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
