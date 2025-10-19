import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-dotted-pattern">
      {/* Foreground Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center p-4">
        <div
          className="relative z-20 flex flex-col items-center text-center font-extrabold uppercase text-black"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl">PSQUARE YOUR</h2>

          <div className="my-2 flex flex-wrap items-center justify-center gap-1 md:my-4 md:gap-3">
            <div className="relative h-10 w-16 overflow-hidden rounded-lg bg-[#ff9a63] md:h-14 md:w-24">
              <Image
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=300&auto=format&fit=crop"
                alt="Woman with sunglasses"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl">CREATIVE</h2>
            <div className="relative h-10 w-16 overflow-hidden rounded-lg bg-[#2e6f66] md:h-14 md:w-24">
              <Image
                src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=300&auto=format&fit=crop"
                alt="Green cups"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl">DESIGN STUDIO</h2>
        </div>
      </div>

      {/* Background Marquee */}
      <div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden opacity-90">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="mx-4 text-[23vw] font-extrabold leading-none text-[#c6ff00]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              creativestudio
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
