import Form from "@/components/form/Mainform";
import Image from "next/image";
export default function FormPage() {
  return (
    <div className="">
      <Form />
      <div className="mt-5 ml-3" >
      <Image src={"/asstes/icons/mlsa.png"} alt="mlsa logo" height={200} width={200}/></div>
    </div>
  );
}
