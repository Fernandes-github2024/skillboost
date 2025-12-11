import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-20 lg:py-32">
      {/* Container Padronizado (Exatamente igual ao Hero) */}
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between lg:px-16 xl:px-24">
        {/* Lado Esquerdo: Imagem (45%) */}
        <div className="flex w-full justify-center lg:w-[45%] lg:justify-start">
          <div className="relative w-full max-w-[500px] lg:max-w-none">
            <Image
              className="h-auto w-full rounded-2xl shadow-xl lg:rounded-3xl object-cover"
              src="/assets/images/About us.webp" // Lembre-se de trocar para sua imagem de 'about'
              alt="Estudante focado representando o sucesso na SkillBoost"
              width={600}
              height={600}
              quality={90}
            />
          </div>
        </div>

        {/* Lado Direito: Texto (50%) */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:w-[50%] lg:items-start lg:text-left">
          <h2 className="text-3xl font-extrabold leading-tight text-[var(--primary)] lg:text-4xl">
            Uma plataforma feita para o seu{" "}
            <span className="text-[var(--secondary)]">sucesso</span>
          </h2>

          <div className="flex flex-col gap-4 text-gray-700 text-base lg:text-lg leading-relaxed">
            <p className="lg:text-justify">
              A SkillBoost nasceu com a missão de democratizar o acesso ao
              conhecimento de alta qualidade. Acreditamos que a educação é a
              chave para transformar vidas.
            </p>
            <p className="lg:text-justify">
              Com instrutores especialistas do mercado e uma metodologia focada
              na prática, preparamos você para os desafios reais da sua
              profissão.
            </p>
          </div>

          {/* Estatísticas */}
          <div className="mt-4 grid grid-cols-2 gap-6 w-full max-w-md lg:max-w-full">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-[var(--secondary)]">
                +50
              </span>
              <span className="text-sm text-gray-600">Cursos Disponíveis</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-[var(--secondary)]">
                +10k
              </span>
              <span className="text-sm text-gray-600">Alunos Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
