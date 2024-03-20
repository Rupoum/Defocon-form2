

import Link from "next/link";
export default function Page() {
  return (
    <div className="h-screen text-white">
      <section >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
        provident veniam eos debitis laboriosam nesciunt excepturi rerum,
        delectus ipsa, facilis sit corporis voluptates, eveniet ad nobis.
        Repellat, eum architecto.
      </section>
    
      <div className="absolute w-screen h-24  flex justify-center bottom-0">
        <Link href="/form">Register</Link>
      </div>
    </div>
  );
}
