import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import AnimatedSection from "@/components/AnimatedSection";
import ImageGallery from "@/components/ImageGallery";
import FloatingImage from "@/components/FloatingImage";
import FloatingCamera from "@/components/FloatingCamera";
import FloatingPhotoFrame from "@/components/FloatingPhotoFrame";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Weddings", "Editorial", "Branding", "Lifestyle"];

  // All gallery images - imágenes reales
  const allImages = [
    "/images/imagen2.jpeg",
    "/images/imagen3.jpeg",
    "/images/imagen4.jpeg",
    "/images/imagen5.jpeg",
    "/images/imagen6.jpeg",
    "/images/imagen7.jpeg",
    "/images/imagen8.jpeg",
    "/images/imagen9.jpeg",
    "/images/imagen10.jpeg",
    "/images/imagen11.jpeg",
    "/images/imagen12.jpeg",
    "/images/imagen13.jpeg",
    "/images/imagen14.jpeg",
    "/images/imagen15.jpeg",
    "/images/imagen16.jpeg",
    "/images/imagen17.jpeg",
    "/images/imagen18.jpeg",
    "/images/imagen19.jpeg",
  ];

  const categoryImages: Record<string, string[]> = {
    All: allImages,
    Weddings: [
      "/images/imagen2.jpeg",
      "/images/imagen3.jpeg",
      "/images/imagen4.jpeg",
      "/images/imagen5.jpeg",
      "/images/imagen6.jpeg",
      "/images/imagen7.jpeg",
      "/images/imagen9.jpeg",
      "/images/imagen10.jpeg",
      "/images/imagen11.jpeg",
    ],
    Editorial: [
      "/images/imagen12.jpeg",
      "/images/imagen13.jpeg",
      "/images/imagen14.jpeg",
      "/images/imagen15.jpeg",
    ],
    Branding: [
      "/images/imagen16.jpeg",
      "/images/imagen17.jpeg",
    ],
    Lifestyle: [
      "/images/imagen8.jpeg",
      "/images/imagen18.jpeg",
      "/images/imagen19.jpeg",
    ],
  };

  const filteredImages = categoryImages[selectedCategory] || allImages;

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative py-40 overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0} position={{ x: 10, y: 18 }} size={48} rotation={-20} />
        <FloatingCamera delay={0.8} position={{ x: 87, y: 22 }} size={42} rotation={28} />
        <FloatingCamera delay={0.5} position={{ x: 16, y: 72 }} size={40} rotation={-12} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen2.jpeg"
          delay={1}
          position={{ x: 5, y: 28 }}
          size={{ width: 165, height: 205 }}
          rotation={-9}
        />
        <FloatingPhotoFrame
          image="/images/imagen9.jpeg"
          delay={0.9}
          position={{ x: 89, y: 58 }}
          size={{ width: 155, height: 195 }}
          rotation={11}
        />

        {/* Floating background elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('/images/imagen3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs mb-8 text-muted-foreground font-light">
              Portfolio
            </p>
          </AnimatedSection>

          <motion.h1
            className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] font-normal uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RECENT WORK
          </motion.h1>

          <AnimatedSection delay={0.3}>
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto font-light tracking-wide text-lowercase-first">
              a collection of moments captured with intention, emotion, and
              timeless elegance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-12 sticky top-20 z-40 backdrop-blur-sm" style={{ backgroundColor: 'hsl(35 18% 97% / 0.95)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category, idx) => (
              <AnimatedSection key={category} delay={0.05 * idx}>
                <motion.button
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-xs uppercase tracking-[0.2em] border transition-all font-light ${
                    selectedCategory === category
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ImageGallery images={filteredImages} columns={3} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'hsl(35 18% 97%)' }}>
        {/* Floating cameras */}
        <FloatingCamera delay={0.3} position={{ x: 12, y: 20 }} size={45} rotation={-18} />
        <FloatingCamera delay={1} position={{ x: 85, y: 25 }} size={38} rotation={22} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen4.jpeg"
          delay={1.5}
          position={{ x: 4, y: 35 }}
          size={{ width: 150, height: 190 }}
          rotation={-7}
        />
        <FloatingPhotoFrame
          image="/images/imagen8.jpeg"
          delay={0.8}
          position={{ x: 91, y: 62 }}
          size={{ width: 140, height: 180 }}
          rotation={10}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight uppercase">
                FEATURED PROJECTS
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Selected works that showcase the depth and range of our
                photography
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Intimate Wedding",
                category: "Weddings",
                description:
                  "A beautiful celebration of love captured with authentic emotion and timeless elegance.",
                image: "/images/imagen6.jpeg",
              },
              {
                title: "Editorial Portrait",
                category: "Editorial",
                description:
                  "Creative editorial work that tells a story through composition and light.",
                image: "/images/imagen13.jpeg",
              },
            ].map((project, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden mb-6">
                    <FloatingImage
                      src={project.image}
                      alt={project.title}
                      className="h-[400px]"
                      delay={0.1 * idx}
                      floatIntensity={15}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                      initial={false}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif mb-3 font-normal uppercase">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-background text-center relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-border opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 font-normal leading-tight uppercase">
              READY TO CREATE TOGETHER?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground mb-12 max-w-xl mx-auto font-light">
              Let's discuss your vision and create something beautiful together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/inquire"
                className="inline-flex items-center px-12 py-4 border uppercase tracking-[0.2em] text-xs transition-all hover:bg-foreground hover:text-background"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                Inquire Now
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
