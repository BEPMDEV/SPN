import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Dasboard | SPN"
};

export default function Home() {

  redirect('/auth/signin')

}
