function Dot({ className }: { className?: string }) {
  return (
    <span className={`size-[1em] mx-[1em] relative inline-block ${className}`}>
      <i className="border border-gray-300/25 rounded-full absolute left-0 top-1/2 -translate-y-1/2 size-[1.2em]"></i>
      <i className="bg-secondary absolute size-[5px] left-[0.6em] top-1/2 -translate-y-1/2 -translate-x-1/2"></i>
    </span>
  );
}

export default Dot;
