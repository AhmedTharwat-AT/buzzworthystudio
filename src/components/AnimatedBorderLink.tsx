import Link from "next/link";

function AnimatedBorderLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`uppercase  inline-block  relative transition-all duration-300 group ${className}`}
    >
      {children}
      <span
        className="inline-block absolute w-full h-[1px] 
  bg-foreground  bottom-0 group-hover:w-0 right-0 transition-all duration-300 group-hover:delay-0 delay-200 "
      />
      <span
        className="inline-block absolute w-0 h-[1px] 
  bg-foreground left-0 bottom-0 group-hover:w-full transition-all duration-300 delay-0 group-hover:delay-200"
      />
    </Link>
  );
}

export default AnimatedBorderLink;
