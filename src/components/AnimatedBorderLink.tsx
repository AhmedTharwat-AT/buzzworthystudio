import Link from "next/link";
import ArrowLink from "@/assets/images/arrow-link.svg";
import Image from "next/image";

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
    <Link href={href} className={`group relative uppercase ${className}`}>
      <div className="relative w-full transition-all duration-300 group-hover:ps-[22.5px]">
        <Image
          src={ArrowLink}
          alt="arrow link"
          className="absolute -left-1 top-1/2 w-px -translate-y-1/2 rotate-45 transition-all duration-300 group-hover:left-0 group-hover:w-[19.5px] group-hover:rotate-0"
          width={19.5}
          height={12}
        />
        {children}
      </div>
      <span className="absolute bottom-0 right-0 inline-block h-[1px] w-full bg-foreground transition-all delay-200 duration-300 group-hover:w-0 group-hover:delay-0" />
      <span className="absolute bottom-0 left-0 inline-block h-[1px] w-0 bg-foreground transition-all delay-0 duration-300 group-hover:w-full group-hover:delay-200" />
    </Link>
  );
}

export default AnimatedBorderLink;
