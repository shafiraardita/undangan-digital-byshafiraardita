export default function Home() {
  const guest = "Rekan TI Karyawan";

  return (
    <main className="bg-[#f8f3ed] text-zinc-800">

      {/* OPENING */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-amber-700 mb-5">
            The Wedding Of
          </p>

          <h1 className="text-6xl md:text-8xl font-serif">
            Teddy
          </h1>

          <div className="text-3xl my-4 text-amber-600">
            &
          </div>

          <h1 className="text-6xl md:text-8xl font-serif">
            Pasangan
          </h1>

          <p className="mt-10 text-sm uppercase tracking-[4px]">
            Kepada
          </p>

          <h3 className="text-2xl mt-3">
            {guest}
          </h3>

          <button className="mt-10 rounded-full bg-amber-700 px-8 py-4 text-white">
            Buka Undangan
          </button>

        </div>

      </section>

      {/* COUNTDOWN */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4 px-6">

          {["Hari","Jam","Menit","Detik"].map((item)=>(
            <div
              key={item}
              className="bg-white rounded-3xl p-8 text-center shadow"
            >
              <h2 className="text-4xl font-bold">
                00
              </h2>

              <p className="mt-2">
                {item}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* EVENT */}
      <section className="py-20 px-6">

        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-10 shadow-lg">

          <h2 className="text-4xl text-center mb-8">
            Wedding Day
          </h2>

          <p className="text-center">
            Selasa, 29 September 2026
          </p>

          <p className="text-center mt-4">
            Rumah Mempelai Wanita
          </p>

          <div className="text-center mt-8">

            <button className="bg-amber-700 text-white px-6 py-3 rounded-full">
              Buka Maps
            </button>

          </div>

        </div>

      </section>

      {/* LOVE STORY */}
      <section className="py-24 text-center px-6">

        <h2 className="text-5xl mb-8">
          Our Story
        </h2>

        <p className="max-w-2xl mx-auto">
          Dipertemukan oleh takdir,
          dipersatukan dalam cinta,
          dan diikat dalam pernikahan.
        </p>

      </section>

    </main>
  );
}