import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (

    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: 'url(/images/login/background.jpg)' }}>
        <div className="absolute bg-orange-950 opacity-50 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl text-orange-50 font-bold text-left tracking-wide">SISTEMA DE PADRÓN NOMINAL DE GESTANTES</h1>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-orange-50">
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: 'url(/images/login/background.jpg)' }}>
          <div className="absolute bg-orange-950 opacity-50 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="w-full">
            <Image className="mx-auto" src={'/images/login/logo.png'} width={150} height={150} alt="logo"/>
          </h1>

          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input type="email" name="email" id="email" placeholder="Ingrese Usuario" className="block lg:bg-transparent text-black w-full p-4 text-lg rounded-md placeholder-orange-600 focus:outline-orange-500 border-2 border-orange-500" />
            </div>
            <div className="pb-2 pt-4">
              <input className="block text-black w-full lg:bg-transparent p-4 text-lg rounded-md placeholder-orange-600 focus:outline-orange-500 border-2 border-orange-500" type="password" name="password" id="password" placeholder="Ingrese Contraseña" />
            </div>
            {/*<div className="text-right text-black hover:underline">
              <a href="#">Olvidastes tu contraseña?</a>
            </div>*/}
            <div className="px-4 pb-2 pt-4">
              <Link href={'/home'} className="uppercase block w-full p-4 text-lg rounded-full bg-orange-600 hover:bg-orange-500 focus:outline-none transition-colors duration-300 font-bold">Iniciar Sesión</Link>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}