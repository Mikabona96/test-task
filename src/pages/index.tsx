import { Filter } from "@/components/Filter";
import { Vehicles } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fonts = `${geistSans.variable} ${geistMono.variable}`

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
  const vehicles: Vehicles = await res.json()
  // Pass data to the page via props
  return { props: { vehicles } }
}) satisfies GetServerSideProps<{ vehicles: Vehicles }>

export default function Home({vehicles}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("🚀 ~ Home ~ vehilce:", vehicles)
  return (
    <div
      className={`${fonts} font-geist-mono mt-4 flex justify-between w-full h-full`}
    >
     <Filter vehicles={vehicles.Results} />
    </div>
  );
}
