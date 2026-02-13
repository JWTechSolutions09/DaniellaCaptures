import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingImage from "@/components/FloatingImage";
import ImageGallery from "@/components/ImageGallery";
import ParallaxSection from "@/components/ParallaxSection";
import FloatingCamera from "@/components/FloatingCamera";
import FloatingPhotoFrame from "@/components/FloatingPhotoFrame";

const Index = () => {
  // Gallery images - todas las imágenes reales
  const galleryImages = [
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

  const featuredImages = [
    "/images/imagen6.jpeg",
    "/images/imagen9.jpeg",
    "/images/imagen11.jpeg",
  ];

  const floatingImages = [
    { src: "/images/imagen3.jpeg", delay: 0.1 },
    { src: "/images/imagen7.jpeg", delay: 0.3 },
    { src: "/images/imagen10.jpeg", delay: 0.5 },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* HERO with animated text and floating images */}
      <section className="relative py-40 bg-background overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0} position={{ x: 10, y: 15 }} size={50} rotation={-15} />
        <FloatingCamera delay={0.6} position={{ x: 85, y: 20 }} size={35} rotation={25} />
        <FloatingCamera delay={1.2} position={{ x: 20, y: 70 }} size={40} rotation={-10} />
        <FloatingCamera delay={0.3} position={{ x: 75, y: 65 }} size={45} rotation={20} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen2.jpeg"
          delay={0.2}
          position={{ x: 5, y: 25 }}
          size={{ width: 180, height: 220 }}
          rotation={-8}
        />
        <FloatingPhotoFrame
          image="/images/imagen5.jpeg"
          delay={0.8}
          position={{ x: 88, y: 30 }}
          size={{ width: 160, height: 200 }}
          rotation={12}
        />
        <FloatingPhotoFrame
          image="/images/imagen8.jpeg"
          delay={0.5}
          position={{ x: 15, y: 75 }}
          size={{ width: 150, height: 190 }}
          rotation={-5}
        />

        {/* Floating background images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute opacity-5"
              style={{
                left: `${20 + idx * 30}%`,
                top: `${10 + idx * 20}%`,
                width: "300px",
                height: "400px",
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8 + idx * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover blur-sm"
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-8 font-light">
              Florida Based Photographer
            </p>
          </AnimatedSection>

          <motion.h1
            className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12 text-foreground font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Capturing Stories
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              That Feel Timeless
            </motion.span>
          </motion.h1>

          <AnimatedSection delay={0.3}>
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-14 font-light tracking-wide">
              Emotion-driven photography for love stories, editorial work,
              and personal brands.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/inquire"
                className="inline-flex items-center gap-3 px-12 py-4 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                Inquire Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO with parallax image */}
      <section className="py-32 relative">
        <ParallaxSection speed={0.3}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" delay={0.1}>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-6 text-muted-foreground font-light">
                  Welcome
                </p>
                <h2 className="text-4xl md:text-5xl font-serif mb-10 font-normal leading-tight">
                  I'm Daniella
                </h2>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                  I document stories with intention, emotion, and a timeless
                  editorial approach. My work is rooted in connection —
                  capturing moments that feel honest, effortless, and deeply
                  personal.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <FloatingImage
                src="/images/Daniella.jpeg"
                alt="Daniella"
                className="h-[600px]"
                delay={0.1}
                floatIntensity={15}
              />
            </AnimatedSection>
          </div>
        </ParallaxSection>
      </section>

      {/* FEATURED WORK - Gallery with floating images */}
      <section className="py-32 bg-muted/50 relative overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0.2} position={{ x: 8, y: 20 }} size={40} rotation={-20} />
        <FloatingCamera delay={1} position={{ x: 92, y: 25 }} size={35} rotation={15} />
        <FloatingCamera delay={0.5} position={{ x: 12, y: 75 }} size={45} rotation={10} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen4.jpeg"
          delay={1}
          position={{ x: 3, y: 15 }}
          size={{ width: 140, height: 180 }}
          rotation={-12}
        />
        <FloatingPhotoFrame
          image="/images/imagen7.jpeg"
          delay={0.6}
          position={{ x: 90, y: 70 }}
          size={{ width: 130, height: 170 }}
          rotation={8}
        />

        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight">
              Featured Stories
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              A glimpse into the moments I've been honored to capture
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredImages.map((img, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <FloatingImage
                  src={img}
                  alt={`Featured work ${idx + 1}`}
                  className="h-[500px] cursor-pointer"
                  delay={0.1 * idx}
                  floatIntensity={20}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="text-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                View Full Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FULL GALLERY SECTION */}
      <section className="py-32">
        <AnimatedSection delay={0.2}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight">
                Recent Work
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Explore the complete collection of captured moments
              </p>
            </div>
            <ImageGallery images={galleryImages} columns={3} />
          </div>
        </AnimatedSection>
      </section>

      {/* EXPERIENCE with animated cards */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 font-normal leading-tight">
                The Experience
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.15}>
              <motion.div
                className="p-8 bg-background border border-border"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 font-normal">
                  Every project begins with listening
                </h3>
                <p className="text-foreground leading-relaxed font-light">
                  I take time to understand your vision, your story, and what
                  matters most to you.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <motion.div
                className="p-8 bg-background border border-border"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-serif mb-4 font-normal">
                  A calm, guided experience
                </h3>
                <p className="text-foreground leading-relaxed font-light">
                  The result is a calm, guided experience that allows real
                  moments to unfold naturally.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL with animated quote */}
      <section className="py-32 bg-muted/50 relative overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0} position={{ x: 15, y: 30 }} size={50} rotation={-25} />
        <FloatingCamera delay={0.8} position={{ x: 80, y: 60 }} size={40} rotation={30} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen6.jpeg"
          delay={0.5}
          position={{ x: 88, y: 20 }}
          size={{ width: 170, height: 210 }}
          rotation={15}
        />
        <FloatingPhotoFrame
          image="/images/imagen9.jpeg"
          delay={0.4}
          position={{ x: 5, y: 65 }}
          size={{ width: 150, height: 190 }}
          rotation={-10}
        />

        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('/images/imagen3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.3}>
            <motion.p
              className="text-xl md:text-2xl italic text-foreground mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              "She captured moments we didn't even realize were happening.
              Every image feels like a memory frozen in time."
            </motion.p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
              — Client Love
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA with animated button */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Subtle floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-border opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-border opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-8 font-light">
              Let's Connect
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 text-foreground font-normal">
              Ready to tell your story?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg md:text-xl text-foreground max-w-xl mx-auto mb-14 font-light">
              I'd love to hear about your vision and create something
              meaningful, intentional, and timeless together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/inquire"
                className="inline-flex items-center gap-3 px-12 py-4 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                Inquire
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
