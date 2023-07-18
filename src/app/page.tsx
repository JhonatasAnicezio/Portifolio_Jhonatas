import { NavContact } from "@/components/Nav/NavContact";
import { NavPages } from "@/components/Nav/NavPages";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col h-screen justify-center items-center w-full
        2xl:gap-5 xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2
      ">
        <NavPages />
        <div className="flex flex-col items-center w-3/5 border-y border-gray-300
            lg:p-9 sm:p-7
            2xl:gap-8 xl:gap-6 lg:gap-5 md:gap-3 sm:gap-3
          "
        >
          <img src="./person.jpg" className="rounded-full
              2xl:h-52 lg:h-36 md:h-28 sm:h-24 h-32
              2xl:w-52 lg:w-36 md:w-28 sm:w-24 w-32
            "
          />
          <h1 className="text-gray-700 font-bold
              2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-4xl
            "
          >
            Jhonatas Anicezio
          </h1>
          <h2 className="text-gray-700
              2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-sm
            "
          >
            Full Stack Developer
          </h2>
          <div className="border-t border-gray-300 w-[10%]" />
          <h2 className="text-center text-gray-700
              2xl:text-xl xl:text-base lg:text-xs md:text-[10px] sm:text-[8px] text-xs
            "
          >
            Tenho 20 anos e atualmente trabalho com desenvolvimento de aplicações front-end em Next.js, e Node.js na parte do back, com 1 de experiencia com trabalho freelancer
          </h2>
        </div>
        <NavContact />
      </div>
    </main>
  )
}
