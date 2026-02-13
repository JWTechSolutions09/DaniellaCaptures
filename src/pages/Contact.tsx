import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    projectType: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const projectTypes = [
    "Wedding / Elopement",
    "Editorial",
    "Personal Brand",
    "Lifestyle / Portrait",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1200));

    toast({
      title: "Inquiry sent",
      description: "I'll be in touch soon. Thank you for reaching out.",
    });

    setFormData({
      name: "",
      email: "",
      location: "",
      projectType: "",
      date: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative py-40 overflow-hidden">
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
            backgroundImage: "url('/images/Daniella.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection delay={0.1}>
            <p className="uppercase tracking-[0.2em] text-xs mb-8 text-muted-foreground font-light">
              Inquire
            </p>
          </AnimatedSection>

          <motion.h1
            className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] font-normal uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LET'S TELL YOUR STORY
          </motion.h1>

          <AnimatedSection delay={0.3}>
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto font-light tracking-wide text-lowercase-first">
              i'd love to learn more about you and what you're dreaming up.
              please fill out the form below and i'll be in touch shortly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FORM & CONTACT INFO */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* FORM */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border p-8" style={{ 
                backgroundColor: 'hsl(35 20% 99%)',
                borderColor: 'hsl(35 15% 85%)'
              }}>
                <h2 className="text-3xl font-serif mb-6 font-normal uppercase">
                  INQUIRY FORM
                </h2>
                <p className="text-muted-foreground mb-8 font-light">
                  Please share as much detail as you'd like.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] font-light">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] font-light">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@email.com"
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-xs uppercase tracking-[0.2em] font-light">
                        Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City / State"
                        className="border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-xs uppercase tracking-[0.2em] font-light">
                        Event / Project Date
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-xs uppercase tracking-[0.2em] font-light">
                      Project Type
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 font-light"
                    >
                      <option value="">Select one</option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-[0.2em] font-light">
                      Tell me about your vision *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="What are you envisioning? What matters most to you?"
                      className="border-border font-light"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full border uppercase tracking-[0.2em] text-xs font-light"
                      style={{
                        borderColor: brand.theme.accent,
                        color: brand.theme.accent,
                        backgroundColor: "transparent",
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <div className="flex items-center justify-center text-sm text-muted-foreground gap-2 pt-4 font-light">
                    <CheckCircle className="h-4 w-4" />
                    I typically respond within 24–48 hours.
                  </div>
                </form>
              </div>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl font-serif mb-6 font-normal uppercase">GET IN TOUCH</h3>
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-1">
                        Email
                      </p>
                      <p className="font-light">{brand.email}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`https://www.instagram.com/${brand.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-1">
                        Instagram
                      </p>
                      <p className="font-light">{brand.instagram}</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-border flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-light mb-1">
                        Location
                      </p>
                      <p className="font-light">{brand.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Based in {brand.location}, available for travel. Let's create
                  something beautiful together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
