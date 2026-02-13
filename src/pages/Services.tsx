import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingImage from "@/components/FloatingImage";
import FloatingCamera from "@/components/FloatingCamera";
import FloatingPhotoFrame from "@/components/FloatingPhotoFrame";

const Services = () => {
  const services = [
    {
      title: "Weddings",
      description:
        "Emotion-led wedding photography focused on genuine moments, connection, and timeless storytelling.",
      features: [
        "Full day coverage",
        "Intentional storytelling",
        "Timeless editing",
        "Personal experience",
      ],
      image: "/images/imagen2.jpeg",
    },
    {
      title: "Editorial Photography",
      description:
        "Editorial imagery for creatives, publications, and brands looking for elevated visual storytelling.",
      features: [
        "Creative direction",
        "Concept development",
        "High-end visuals",
        "Brand alignment",
      ],
      image: "/images/imagen12.jpeg",
    },
    {
      title: "Personal Branding",
      description:
        "Visual storytelling for entrepreneurs and creatives who want imagery that reflects who they truly are.",
      features: [
        "Brand-focused sessions",
        "Authentic portraits",
        "Content-ready imagery",
        "Creative guidance",
      ],
      image: "/images/imagen8.jpeg",
    },
    {
      title: "Lifestyle Sessions",
      description:
        "Relaxed lifestyle sessions capturing real moments, emotion, and connection.",
      features: [
        "Natural direction",
        "Comfortable experience",
        "Authentic moments",
        "Timeless edits",
      ],
      image: "/images/imagen19.jpeg",
    },
  ];

  const processSteps = brand.processSteps || [
    {
      step: "01",
      title: "Inquire",
      description: "Reach out and tell me about your vision and story.",
    },
    {
      step: "02",
      title: "Connect",
      description:
        "We'll align on your goals, style, and creative direction.",
    },
    {
      step: "03",
      title: "Create",
      description: "Your session is photographed with intention and care.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "You receive a timeless gallery crafted to last.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative py-40 overflow-hidden">
        {/* Floating cameras */}
        <FloatingCamera delay={0} position={{ x: 12, y: 20 }} size={50} rotation={-22} />
        <FloatingCamera delay={0.7} position={{ x: 86, y: 24 }} size={44} rotation={26} />
        <FloatingCamera delay={0.4} position={{ x: 18, y: 68 }} size={41} rotation={-14} />

        {/* Floating photo frames */}
        <FloatingPhotoFrame
          image="/images/imagen6.jpeg"
          delay={0.4}
          position={{ x: 6, y: 32 }}
          size={{ width: 170, height: 210 }}
          rotation={-11}
        />
        <FloatingPhotoFrame
          image="/images/imagen11.jpeg"
          delay={0.8}
          position={{ x: 88, y: 60 }}
          size={{ width: 160, height: 200 }}
          rotation={13}
        />

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
            backgroundImage: "url('/images/imagen9.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs mb-8 text-muted-foreground font-light">
              Services
            </p>
          </AnimatedSection>

          <motion.h1
            className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] font-normal uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WHAT I OFFER
          </motion.h1>

          <AnimatedSection delay={0.3}>
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto font-light tracking-wide text-lowercase-first">
              emotion-driven photography services tailored to your unique story
              and vision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden mb-6 h-[400px]" style={{ backgroundColor: 'hsl(35 18% 96%)' }}>
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * idx }}
                      whileHover={{ scale: 1.05 }}
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                      initial={false}
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-3xl font-serif mb-4 font-normal uppercase">
                      {service.title.toUpperCase()}
                    </h3>
                    <p className="text-foreground leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {(service.features || []).map((feature, fIdx) => (
                      <motion.li
                        key={fIdx}
                        className="flex items-center text-sm text-foreground font-light"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * fIdx }}
                      >
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/inquire"
                      className="inline-flex items-center gap-2 px-8 py-3 border uppercase tracking-[0.2em] text-xs transition-all hover:bg-foreground hover:text-background font-light"
                      style={{
                        borderColor: brand.theme.accent,
                        color: brand.theme.accent,
                      }}
                    >
                      Inquire About This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32" style={{ backgroundColor: 'hsl(35 18% 97%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight uppercase">
                THE PROCESS
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Simple steps to create something meaningful together
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx}>
                <motion.div
                  className="text-center p-8 border h-full"
                  style={{ 
                    backgroundColor: 'hsl(35 20% 99%)',
                    borderColor: 'hsl(35 15% 85%)'
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-serif mb-4 font-normal uppercase">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-foreground leading-relaxed font-light text-sm">
                    {step.description}
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
          className="absolute bottom-20 right-20 w-24 h-24 border border-border opacity-10"
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
              READY TO GET STARTED?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground mb-12 max-w-xl mx-auto font-light">
              Let's discuss your vision and create something beautiful together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/inquire"
                className="inline-flex items-center gap-3 px-12 py-4 border uppercase tracking-[0.2em] text-xs transition-all hover:bg-foreground hover:text-background"
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
    </div>
  );
};

export default Services;
