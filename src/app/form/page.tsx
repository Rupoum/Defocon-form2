import Form from "@/components/form/Mainform";
import Image from "next/image";
export default function FormPage() {
  return (
    <div className="">
      <Form />
      <div className="mt-5 ml-3" >
      <Image src={"/asstes/icons/mlsa.png"} alt="mlsa logo" height={60} width={60}/></div>
    </div>
  );
}
