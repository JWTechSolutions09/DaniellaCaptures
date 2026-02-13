import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingImage from "@/components/FloatingImage";
import ParallaxSection from "@/components/ParallaxSection";
import FloatingCamera from "@/components/FloatingCamera";
import FloatingPhotoFrame from "@/components/FloatingPhotoFrame";

const About = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Listen",
      description:
        "Every project begins with understanding your vision, your story, and what matters most to you.",
    },
    {
      number: "02",
      title: "Guide",
      description:
        "I don't believe in forcing moments. Instead, I guide gently — creating space for real emotion to unfold naturally.",
    },
    {
      number: "03",
      title: "Capture",
      description:
        "The result is imagery that feels elevated, timeless, and deeply personal — moments frozen in time.",
    },
  ];

  const services = [
    {
      title: "Love Stories",
      description:
        "Wedding and engagement photography that captures the essence of your unique love story.",
      image: "/images/imagen6.jpeg",
    },
    {
      title: "Editorial Work",
      description:
        "Creative editorial photography for publications, brands, and artistic projects.",
      image: "/images/imagen13.jpeg",
    },
    {
      title: "Personal Brands",
      description:
        "Authentic brand photography that tells your story and connects with your ideal audience.",
      image: "/images/imagen17.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* HERO with animated text */}
      <section className="relative py-40 overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0} position={{ x: 12, y: 20 }} size={45} rotation={-18} />
        <FloatingCamera delay={0.6} position={{ x: 88, y: 25 }} size={38} rotation={22} />
        <FloatingCamera delay={1.2} position={{ x: 18, y: 70 }} size={42} rotation={-12} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen3.jpeg"
          delay={0.3}
          position={{ x: 6, y: 30 }}
          size={{ width: 160, height: 200 }}
          rotation={-10}
        />
        <FloatingPhotoFrame
          image="/images/imagen11.jpeg"
          delay={0.8}
          position={{ x: 85, y: 60 }}
          size={{ width: 150, height: 190 }}
          rotation={12}
        />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('/images/Daniella.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs mb-8 text-muted-foreground font-light">
              Behind the Lens
            </p>
          </AnimatedSection>

          <motion.h1
            className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] font-normal uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I SEE STORIES <br /> IN THE IN-BETWEEN
          </motion.h1>

          <AnimatedSection delay={0.3}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light tracking-wide text-lowercase-first">
              photographer · storyteller · creative observer
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STORY with parallax image */}
      <section className="py-32 relative">
        <ParallaxSection speed={0.4}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
            {/* Text */}
            <AnimatedSection direction="right" delay={0.1}>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-6 text-muted-foreground font-light">
                  Hi There
                </p>

                <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight uppercase">
                  I'M DANIELLA
                </h2>

                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8 font-light">
                  YOUR PHOTOGRAPHER AND FELLOW CREATIVE
                </p>

                <motion.p
                  className="text-base md:text-lg text-foreground leading-relaxed mb-6 font-light text-lowercase-first"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I believe photography is the art of telling your story. it's not just about posing and smiling at a camera—it's about capturing real life, candid moments, including the little moments in between.
                </motion.p>

                <motion.p
                  className="text-base md:text-lg text-foreground leading-relaxed font-light text-lowercase-first"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Each photograph tells a story, carefully preserved, allowing you to return to these memories long after the moment has passed. here to capture your most precious moments.
                </motion.p>
              </div>
            </AnimatedSection>

            {/* Image with floating effect */}
            <AnimatedSection direction="left" delay={0.2}>
              <FloatingImage
                src="/images/Daniella.jpeg"
                alt="Daniella Captures portrait"
                className="h-[600px]"
                delay={0.1}
                floatIntensity={25}
              />
            </AnimatedSection>
          </div>
        </ParallaxSection>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'hsl(35 18% 97%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* MISSION */}
            <AnimatedSection delay={0.1}>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-6 text-muted-foreground font-light">
                  Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6 font-normal leading-tight uppercase">
                  MY MISSION
                </h2>
                <p className="text-lg text-foreground leading-relaxed font-light text-lowercase-first">
                  my mission is to document real moments with intention and heart, transforming them into timeless stories you can cherish for a lifetime.
                </p>
              </div>
            </AnimatedSection>

            {/* VISION */}
            <AnimatedSection delay={0.2}>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs mb-6 text-muted-foreground font-light">
                  Vision
                </p>
                <h2 className="text-3xl md:text-4xl font-serif mb-6 font-normal leading-tight uppercase">
                  MY VISION
                </h2>
                <p className="text-lg text-foreground leading-relaxed font-light text-lowercase-first">
                  creating photographs that feel like memories you can step back into.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* APPROACH with animated steps */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'hsl(35 18% 96%)' }}>
        {/* Floating cameras */}
        <FloatingCamera delay={0.3} position={{ x: 10, y: 15 }} size={40} rotation={-15} />
        <FloatingCamera delay={1.2} position={{ x: 90, y: 20 }} size={35} rotation={25} />
        <FloatingCamera delay={0.6} position={{ x: 15, y: 80 }} size={38} rotation={10} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen5.jpeg"
          delay={0.5}
          position={{ x: 3, y: 25 }}
          size={{ width: 140, height: 180 }}
          rotation={-8}
        />
        <FloatingPhotoFrame
          image="/images/imagen10.jpeg"
          delay={0.3}
          position={{ x: 92, y: 65 }}
          size={{ width: 130, height: 170 }}
          rotation={9}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight uppercase">
                MY APPROACH
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto font-light text-lowercase-first">
                every project begins with listening.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="p-8 border h-full"
                  style={{
                    backgroundColor: 'hsl(35 20% 99%)',
                    borderColor: 'hsl(35 15% 85%)'
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px hsl(35 15% 20% / 0.1)",
                    backgroundColor: 'hsl(35 20% 100%)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-6xl font-serif text-muted-foreground/30 mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * idx }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-2xl font-serif mb-4 font-normal uppercase">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-foreground leading-relaxed font-light text-lowercase-first">
                    {step.description.toLowerCase()}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I SHOOT with floating service cards */}
      <section className="py-32 relative overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0.2} position={{ x: 8, y: 18 }} size={45} rotation={-20} />
        <FloatingCamera delay={0.8} position={{ x: 88, y: 22 }} size={40} rotation={18} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen7.jpeg"
          delay={0.4}
          position={{ x: 4, y: 30 }}
          size={{ width: 155, height: 195 }}
          rotation={-12}
        />
        <FloatingPhotoFrame
          image="/images/imagen12.jpeg"
          delay={0.9}
          position={{ x: 90, y: 68 }}
          size={{ width: 145, height: 185 }}
          rotation={11}
        />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight uppercase">
                MORE THAN ONE STORY TO TELL
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto font-light text-lowercase-first">
                love stories, editorial projects, and personal brands all
                deserve the same level of care and intention.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden mb-6">
                    <FloatingImage
                      src={service.image}
                      alt={service.title}
                      className="h-[300px]"
                      delay={0.1 * idx}
                      floatIntensity={15}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                      initial={false}
                    />
                  </div>
                  <h3 className="text-2xl font-serif mb-3 font-normal uppercase">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-foreground leading-relaxed font-light text-sm text-lowercase-first">
                    {service.description.toLowerCase()}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION with animated numbers */}
      <section className="py-32" style={{ backgroundColor: 'hsl(35 18% 97%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Years Experience" },
              { number: "150+", label: "Stories Captured" },
              { number: "5★", label: "Client Reviews" },
              { number: "FL", label: "Based in Florida" },
            ].map((stat, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl font-serif mb-4 font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * idx }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
                    {stat.label}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with animated elements */}
      <section className="py-40 text-center relative overflow-hidden" style={{ backgroundColor: 'hsl(35 18% 96%)' }}>
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 border border-border opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 border border-border opacity-10"
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 font-normal leading-tight uppercase">
              LET'S CREATE SOMETHING MEANINGFUL
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground mb-12 max-w-xl mx-auto font-light text-lowercase-first">
              if you're drawn to intentional imagery and a calm, collaborative
              experience, i'd love to hear your story.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/inquire"
                className="inline-flex items-center px-12 py-4 border uppercase tracking-[0.2em] text-xs transition-all hover:bg-foreground hover:text-background"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                Inquire Now
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
