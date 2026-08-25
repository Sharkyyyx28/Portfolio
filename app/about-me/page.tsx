import Navbar from "@/components/Navbar";
import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";

export default function About() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sharkyyyx28.space/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://sharkyyyx28.space/about-me" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
