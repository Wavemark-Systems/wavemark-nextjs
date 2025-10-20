export default function Hero() {
  return (
    <div className="flex flex-col items-center pt-12 sm:pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 text-black text-center max-w-4xl">
        Text-to-Speech for Luxembourgish.
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed mb-6 sm:mb-8 text-center max-w-3xl px-4">
        Neiom is a state of the art TTS model built specifically to handle Luxembourgish text and audio. Vun Lëtzebuerger gebaut, fir Lëtzebuerger.
      </p>
    </div>
  );
}
