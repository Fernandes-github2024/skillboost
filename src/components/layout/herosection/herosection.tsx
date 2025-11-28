import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-green-500 p-28 flex gap-28">
      <div className="w-[50%] flex items-start flex-col justify-center gap-8">
        <h1 className="text-5xl leading-tight font-bold">Desbloqueie Seu Potencial com SkillBoost</h1>
        <p className="text-xl leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam nisi
          perspiciatis aut ad! Accusantium dolore sed soluta cum ducimus sint
          dignissimos, ab ullam id, cupiditate vero quae consequuntur. Tenetur!
        </p>
        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-md cursor-pointer">Explore Nossos Cursos</button>
      </div>
      <div className="w-[50%]">
        <Image className="w-3xl object-cover" src="/assets/images/hero.webp" alt="Hero" width={500} height={500} quality={100} priority={true} loading="eager" unoptimized={true} />
      </div>
    </div>
  );
}
