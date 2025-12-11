import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-[var(--tertiary)]/30 py-20 lg:py-32">
      {/* Container Padronizado */}
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between lg:px-16 xl:px-24">
        
        {/* Lado Esquerdo: Texto (50%) */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[50%] lg:items-start lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight text-[var(--primary)] lg:text-4xl xl:text-5xl">
            Eleve Sua Carreira com{" "}
            <span className="text-[var(--secondary)]">SkillBoost</span>
          </h1>
          
          <p className="max-w-2xl text-base leading-relaxed text-gray-700 lg:text-lg">
            Transforme sua carreira e alcance novos horizontes. Nossa plataforma
            oferece cursos práticos e atualizados nas áreas mais demandadas do
            mercado.
          </p>

          <button className="group mt-2 flex cursor-pointer items-center gap-3 rounded-md bg-[var(--primary)] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--primary)]/90 hover:shadow-lg">
            <span>Começar a Aprender</span>
            <span className="transition-transform group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>
        </div>

        {/* Lado Direito: Imagem (45%) */}
        <div className="flex w-full justify-center lg:w-[45%] lg:justify-end">
          <div className="relative w-full max-w-[500px] lg:max-w-none">
            <Image
              className="h-auto w-full rounded-2xl shadow-xl lg:rounded-3xl"
              src="/assets/images/hero.webp"
              alt="Ilustração de uma pessoa estudando em um laptop"
              width={600}
              height={600}
              priority={true}
              quality={90}
            />
          </div>
        </div>

      </div>
    </section>
  );
}