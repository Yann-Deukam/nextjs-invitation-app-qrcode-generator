"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/Invitation"); // Change to the actual page
    }, 2000);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:px-4 md:px-24 py-10">
      <Image
        src="/bg.png"
        alt="Background Image"
        width={400}
        height={400}
        objectFit="cover"
        className="absolute z-0 m-50 opacity-50"
      />

      <h1 className="text-4xl font-bold text-amber-600 m-2">
        Invitation à mon mariage
      </h1>
      <section className="relative z-10 py-24 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {/* Text Section */}
            <div className="flex flex-col">
              <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold leading-8 sm:leading-10">
                Générer une invitation
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mt-4">
                Veuillez remplir le formulaire pour générer une invitation
                personnelisée.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-11 rounded-2xl">
              <h2 className="text-gray-400 text-sm font-semibold leading-8 sm:leading-10 mb-6 sm:mb-8">
                <span className="text-red-500">* </span> Toutes les entrées
                doivent être remplis
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm sm:text-base font-medium mb-1"
                    >
                      Votre nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full h-10 sm:h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-sm sm:text-lg rounded-sm border outline-none ring-0 border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-4 focus:transition-all ease-in-out duration-300"
                      placeholder="Veuillez saisir votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-gray-700 text-sm sm:text-base font-medium mb-1"
                    >
                      Votre prénom
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      className="w-full h-10 sm:h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-sm sm:text-lg rounded-sm border outline-none ring-0 border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-4 focus:transition-all ease-in-out duration-300"
                      placeholder="Veuillez saisir votre prénom"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm sm:text-base font-medium mb-1"
                  >
                    Numéro de téléphone{" "}
                    <span className="text-green-600">Whatsapp</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full h-10 sm:h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-white text-sm sm:text-lg rounded-sm border outline-none ring-0 border-gray-300 focus:ring-amber-500 focus:border-amber-500 px-4 focus:transition-all ease-in-out duration-300"
                    placeholder="+237 XXX XXX XXX"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-10 sm:h-12 text-white text-sm sm:text-base font-semibold rounded-lg bg-amber-600 hover:bg-amber-800 transition-all duration-300 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Recevoir mon invitation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
