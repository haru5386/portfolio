export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs bg-[#f5f5f0] border border-black border-solid text-black">
      {children}
    </span>
  );
}