import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Lock, X, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { brand } from "@/config/brand";

interface GalleryImage {
  id: string;
  url: string;
  name: string;
  uploadedAt: string;
}

const ClientGallery = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState<string | null>(null);

  // Códigos de acceso válidos (en producción esto vendría de un backend)
  const validCodes = ["WEDDING2024", "PORTRAIT2024", "EVENT2024"];

  useEffect(() => {
    // Verificar si ya está autenticado
    const savedAuth = localStorage.getItem("clientGalleryAuth");
    if (savedAuth) {
      setIsAuthenticated(true);
      loadGallery(savedAuth);
    }
  }, []);

  const loadGallery = (code: string) => {
    // Cargar imágenes del localStorage (en producción vendría de un backend)
    const savedImages = localStorage.getItem(`gallery_${code}`);
    if (savedImages) {
      setGalleryImages(JSON.parse(savedImages));
    } else {
      setGalleryImages([]);
    }
  };

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (validCodes.includes(accessCode.toUpperCase())) {
      setIsAuthenticated(true);
      localStorage.setItem("clientGalleryAuth", accessCode.toUpperCase());
      loadGallery(accessCode.toUpperCase());
    } else {
      setError("Invalid access code. Please check and try again.");
    }
  };

  const handleDownload = async (image: GalleryImage) => {
    setDownloading(image.id);
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = image.name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Download error:", err);
    } finally {
      setTimeout(() => setDownloading(null), 1000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessCode("");
    setGalleryImages([]);
    localStorage.removeItem("clientGalleryAuth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background overflow-hidden">
        <Navbar />

        <section className="py-40 relative">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <AnimatedSection delay={0.1}>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Lock className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 font-normal uppercase">
                CLIENT GALLERY
              </h1>
              <p className="text-lg text-muted-foreground mb-12 font-light text-lowercase-first">
                Enter your access code to view and download your photos
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <form onSubmit={handleAccess} className="max-w-md mx-auto">
                <div className="mb-6">
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter access code"
                    className="w-full px-6 py-4 border text-center uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-foreground/20 font-light"
                    style={{
                      borderColor: brand.theme.border,
                      backgroundColor: "hsl(35 20% 99%)",
                    }}
                    autoFocus
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mb-4"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background font-light"
                  style={{
                    borderColor: brand.theme.accent,
                    color: brand.theme.accent,
                  }}
                >
                  Access Gallery
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif mb-4 font-normal uppercase">
                  YOUR GALLERY
                </h1>
                <p className="text-lg text-muted-foreground font-light text-lowercase-first">
                  {galleryImages.length} {galleryImages.length === 1 ? "photo" : "photos"} available
                </p>
              </div>
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background font-light flex items-center gap-2"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                <X className="h-4 w-4" />
                Logout
              </motion.button>
            </div>
          </AnimatedSection>

          {galleryImages.length === 0 ? (
            <AnimatedSection delay={0.2}>
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground font-light text-lowercase-first">
                  No photos available yet. Your photographer will upload them soon.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, idx) => (
                <AnimatedSection key={image.id} delay={0.1 * idx}>
                  <motion.div
                    className="group relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[3/4] bg-muted/30 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
                        initial={false}
                      >
                        <motion.button
                          onClick={() => handleDownload(image)}
                          disabled={downloading === image.id}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-background/95 backdrop-blur-sm border text-xs uppercase tracking-[0.2em] transition-all font-light flex items-center gap-2"
                          style={{
                            borderColor: brand.theme.border,
                          }}
                        >
                          {downloading === image.id ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <Download className="h-4 w-4" />
                              </motion.div>
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4" />
                              Download
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground font-light text-center truncate">
                      {image.name}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClientGallery;
