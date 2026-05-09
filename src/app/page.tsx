import Navbar from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-bold text-center">
          VeriBid Marketplace
        </h1>
      </section>
    </main>
  );
}