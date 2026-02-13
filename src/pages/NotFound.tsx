import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <motion.div
              className="text-9xl md:text-[12rem] font-serif mb-8 font-normal text-muted-foreground/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 font-normal leading-tight">
              Page Not Found
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-flex items-center gap-3 px-12 py-4 border uppercase tracking-[0.2em] text-xs transition-all hover:bg-foreground hover:text-background font-light"
                style={{
                  borderColor: "hsl(0 0% 20%)",
                  color: "hsl(0 0% 20%)",
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                Return Home
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
