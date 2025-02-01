import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Footer from "./components/landing/Footer";
export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect('/conversations');
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
