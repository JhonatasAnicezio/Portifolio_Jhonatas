import { NavContact } from "@/components/Nav/NavContact";
import { NavPages } from "@/components/Nav/NavPages";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen gap-5 justify-center items-center">
        <NavPages />
        <div className="flex flex-col p-9 gap-4 items-center w-3/5 border-y border-gray-300">
          <img src="./person.jpg" className="rounded-full h-32 w-32" />
          <h1 className="text-4xl text-gray-700 font-bold">Jhonatas Anicezio</h1>
          <h2 className="text-lg text-gray-700">Full Stack Developer </h2>
          <div className="border-t border-gray-300 w-[10%]" />
          <h2 className="text-xs text-center text-gray-700">
            Tenho 20 anos e atualmente trabalho com desenvolvimento de aplicações front-end em Next.js, e Node.js na parte do back, com 1 de experiencia com trabalho freelancer
          </h2>
        </div>
        <NavContact />
      </div>
    </main>
  )
}
