import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Dashboard | SPN"
};

export default function Home() {

  redirect('/auth/signin')

}
