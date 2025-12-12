import Image from "next/image";
import {
  FaArrowRight,
  FaCertificate,
  FaUserTie,
  FaGlobe,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[var(--tertiary)]/30 to-[var(--tertiary)]/60 py-20 lg:py-32">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between lg:px-16 xl:px-24">
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[50%] lg:items-start lg:text-left">
          {/* Título*/}
          <h1 className="text-3xl font-extrabold leading-tight text-[var(--primary)] lg:text-4xl xl:text-5xl">
            Eleve Sua Carreira com{" "}
            <span className="text-[var(--secondary)]">SkillBoost</span>
          </h1>

          {/* Descrição*/}
          <p className="max-w-2xl text-base leading-relaxed text-gray-800 lg:text-lg">
            Transforme sua carreira e alcance novos horizontes. Nossa plataforma
            oferece cursos práticos e atualizados nas áreas mais demandadas do
            mercado.
          </p>

          <button
            className="group mt-2 flex cursor-pointer items-center gap-3 rounded-md bg-[var(--primary)] px-6 py-3 lg:text-lg font-semibold text-white transition-all hover:bg-[var(--secondary)] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50"
          >
            <span>Começar a Aprender</span>
            <span className="transition-transform group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>

          {/* Seção de Vantagens (Badges) */}
          <div className="mt-8  flex-wrap hidden lg:flex justify-center gap-6 lg:justify-start">
            {/* Item 1: Certificado */}
            <div className="flex items-center gap-2">
              <FaCertificate className="text-[var(--secondary)] text-xl" />
              Certificado
            </div>

            {/* Item 2: Especialistas */}
            <div className="flex items-center gap-2">
              <FaUserTie className="text-[var(--secondary)] text-xl" />
              Especialistas
            </div>

            {/* Item 3: Global */}
            <div className="flex items-center gap-2">
              <FaGlobe className="text-[var(--secondary)] text-xl" />
              Mz
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[45%] lg:justify-end">
          <div className="relative w-full max-w-[500px] rounded-3xl bg-white p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.01] lg:max-w-none lg:p-8">
            <Image
              className="h-auto w-full rounded-xl"
              src="/assets/images/hero_v2.webp"
              alt="Ilustração de pessoas de diversas etnias colaborando e estudando em uma mesa com tablets e laptops. Logo SkillBoost no balão de fala." // Alt text mais descritivo
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
