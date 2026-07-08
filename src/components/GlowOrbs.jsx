export default function GlowOrbs() {
  return (
    <>
      <div className="fixed -top-[20vh] -left-[10vw] w-[70vw] h-[70vw] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(91,69,245,0.13) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)',
          animation: 'drift1 18s ease-in-out infinite alternate',
        }} />
      <div className="fixed -bottom-[15vh] -right-[10vw] w-[60vw] h-[60vw] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,201,0.11) 0%, rgba(91,69,245,0.07) 45%, transparent 70%)',
          animation: 'drift2 22s ease-in-out infinite alternate',
        }} />
    </>
  );
}