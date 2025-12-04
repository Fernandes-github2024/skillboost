import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:p-28 bg-[var(--tertiary)]/30">
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:w-[50%] lg:items-start">
        <h1 className="text-center text-3xl font-extrabold leading-tight text-[var(--primary)] lg:text-left lg:text-4xl xl:text-5xl">
          Desbloqueie Seu Potencial com{" "}
          <span className="text-[var(--secondary)]">SkillBoost</span>
        </h1>
        <p className="text-center text-sm leading-relaxed lg:text-justify lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam nisi
          perspiciatis aut ad! Accusantium dolore sed soluta cum ducimus sint
          dignissimos, ab ullam id, cupiditate vero quae consequuntur. Tenetur!
        </p>
        <button className="cursor-pointer rounded-md bg-[var(--primary)] px-4 py-2 text-sm text-white hover:bg-[var(--primary)]/90 lg:text-lg">
          Explore Nossos Cursos
        </button>
      </div>
      <div className="hidden w-[50%] lg:block">
        <Image
          className="w-3xl object-cover"
          src="/assets/images/hero.webp"
          alt="Hero"
          width={500}
          height={500}
          quality={100}
          priority={true}
          loading="eager"
          unoptimized={true}
        />
      </div>
    </div>
  );
}
