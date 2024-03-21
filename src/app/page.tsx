import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/asstes/icons/mlsa.png";
import { Form_Details } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="h-screen text-white flex flex-col pt-12 px-4 gap-4 items-center">
      <Image src={Icon} alt="Icon" />

      <h1 className="text-5xl font-bold ">{Form_Details.title}</h1>

      <section className="text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
        provident veniam eos debitis laboriosam nesciunt excepturi rerum,
        delectus ipsa, facilis sit corporis voluptates, eveniet ad nobis.
        Repellat, eum architecto.
      </section>

      <div className="absolute w-screen h-24  flex justify-center bottom-0">
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "text-3xl bg-green-600 w-64 h-12"
          )}
          href="/form"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
