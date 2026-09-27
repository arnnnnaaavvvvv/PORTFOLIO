import Hero from "@/components/Hero";
import MarqueeDivider from "@/components/MarqueeDivider";
import ProjectStack from "@/components/ProjectStack";
import AboutManifesto from "@/components/AboutManifesto";
import ProcessSticky from "@/components/ProcessSticky";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Marquee Ticker 1 */}
      <MarqueeDivider
        items={[
          "DISTRIBUTED SYSTEMS",
          "CAUSAL AI REASONING",
          "HIGH-THROUGHPUT BACKENDS",
          "TREE-SITTER AST PARSING",
          "GEOSPATIAL ROUTING ENGINES",
          "POSTGRESQL + PGVECTOR",
          "DETERMINISTIC VERIFICATION",
        ]}
        speedSeconds={26}
      />

      {/* Featured Projects Stack */}
      <ProjectStack />

      {/* Secondary Reverse Marquee */}
      <MarqueeDivider
        items={[
          "CLUDE ENGINE",
          "IGNITE GIS ROUTING",
          "SIRUS QUANT DMA",
          "TALENT INTELLIGENCE",
          "CHANDIGARH UNIVERSITY",
          "FASTAPI + NEXT.JS 14",
          "REDIS STREAMS EVENT BUS",
        ]}
        speedSeconds={32}
        reverse={true}
      />

      {/* About & Systems Manifesto */}
      <AboutManifesto />

      {/* Engineering Lifecycle Process */}
      <ProcessSticky />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
