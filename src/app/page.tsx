import Link from "next/link";
import Icon from "../../public/asstes/icons/mlsa.png";
import { Form_Details } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Example from "@/components/ui/button2";
import Form from "@/components/form/Mainform";
import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <Form />
      <div className="mt-5 ml-3">
        <Image
          src={"/asstes/icons/mlsa.png"}
          alt="mlsa logo"
          height={200}
          width={200}
        />
      </div>
    </div>
    //TODO: LANDING PAGE
    // <div className="h-screen text-white flex flex-col pt-12 px-4 gap-4 items-center">
    //   <Image src={Icon} alt="Icon" />

    //   <h1 className="text-3xl md:text-5xl font-bold mt-10">{Form_Details.title}</h1>

    //   <section className="text-center mt-4">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
    //     provident veniam eos debitis laboriosam nesciunt excepturi rerum,
    //     delectus ipsa, facilis sit corporis voluptates, eveniet ad nobis.
    //     Repellat, eum architecto.
    //   </section>

    //   <div className="absolute w-screen h-24  flex justify-center bottom-0">
    //     <Link
    //       className={cn(
    //         buttonVariants({ variant: "default" }),
    //         "text-2xl md:text-3xl bg-primary-color w-64 h-12"
    //       )}
    //       href="/form"
    //     >
    //       Register
    //     </Link>

    //   </div>

    // </div>
  );
}
