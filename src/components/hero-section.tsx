import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#ebebeb",
        backgroundImage: "radial-gradient(#000000 0.2px, transparent 0.2px)",
        backgroundSize: "15px 15px",
      }}
    >
      {/* Foreground Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center p-4">
        <div
          className="relative z-20 flex flex-col items-center text-center font-extrabold uppercase tracking-tight text-black"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl">PSQUARE YOUR</h2>

          <div className="my-2 flex flex-wrap items-center justify-center gap-2 md:my-4 md:gap-4">
            <div className="relative h-12 w-20 overflow-hidden rounded-xl bg-[#ff9a63] md:h-16 md:w-28">
              <Image
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=300&auto=format&fit=crop"
                alt="Man with sunglasses"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl">CREATIVE</h2>
            <div className="relative h-12 w-20 overflow-hidden rounded-xl bg-[#2e6f66] md:h-16 md:w-28">
              <Image
                src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=300&auto=format&fit=crop"
                alt="Green wallet"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl">DESIGN STUDIO</h2>
        </div>
      </div>

      {/* Marquee at Bottom - No background or borders */}
      <div className="absolute bottom-8 left-0 z-0 w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className="mx-4 text-[15vw] font-extrabold uppercase leading-none text-[#abff00] opacity-90 md:text-[12vw] lg:text-[10vw]"
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
