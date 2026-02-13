import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, X, Trash2, Check, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { brand } from "@/config/brand";

interface GalleryImage {
  id: string;
  url: string;
  name: string;
  uploadedAt: string;
  accessCode: string;
}

const AdminGallery = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<GalleryImage[]>([]);
  const [error, setError] = useState("");

  // Contraseña de admin (en producción esto vendría de un backend seguro)
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
      loadAllImages();
    }
  }, []);

  const loadAllImages = () => {
    // Cargar todas las imágenes guardadas
    const allCodes = ["WEDDING2024", "PORTRAIT2024", "EVENT2024"];
    const allImages: GalleryImage[] = [];
    
    allCodes.forEach((code) => {
      const saved = localStorage.getItem(`gallery_${code}`);
      if (saved) {
        const images = JSON.parse(saved);
        allImages.push(...images);
      }
    });
    
    setUploadedImages(allImages);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      loadAllImages();
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  const handleUpload = async () => {
    if (!accessCode || selectedFiles.length === 0) {
      setError("Please select files and enter an access code.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const newImages: GalleryImage[] = [];

      for (const file of selectedFiles) {
        // Convertir archivo a URL local (en producción subirías a un servidor)
        const reader = new FileReader();
        const imageUrl = await new Promise<string>((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        });

        const newImage: GalleryImage = {
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          url: imageUrl,
          name: file.name,
          uploadedAt: new Date().toISOString(),
          accessCode: accessCode.toUpperCase(),
        };

        newImages.push(newImage);
      }

      // Guardar en localStorage (en producción guardarías en un backend)
      const existingImages = localStorage.getItem(`gallery_${accessCode.toUpperCase()}`);
      const currentImages = existingImages ? JSON.parse(existingImages) : [];
      const updatedImages = [...currentImages, ...newImages];
      localStorage.setItem(`gallery_${accessCode.toUpperCase()}`, JSON.stringify(updatedImages));

      setUploadedImages([...uploadedImages, ...newImages]);
      setSelectedFiles([]);
      setAccessCode("");
      
      alert(`Successfully uploaded ${newImages.length} photo(s)!`);
    } catch (err) {
      setError("Error uploading files. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (imageId: string, code: string) => {
    if (confirm("Are you sure you want to delete this photo?")) {
      const existingImages = localStorage.getItem(`gallery_${code}`);
      if (existingImages) {
        const images = JSON.parse(existingImages);
        const filtered = images.filter((img: GalleryImage) => img.id !== imageId);
        localStorage.setItem(`gallery_${code}`, JSON.stringify(filtered));
        setUploadedImages(uploadedImages.filter((img) => img.id !== imageId));
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminPassword("");
    localStorage.removeItem("adminAuth");
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
                ADMIN PORTAL
              </h1>
              <p className="text-lg text-muted-foreground mb-12 font-light text-lowercase-first">
                Enter admin password to upload photos
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <form onSubmit={handleAdminLogin} className="max-w-md mx-auto">
                <div className="mb-6">
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-6 py-4 border text-center focus:outline-none focus:ring-2 focus:ring-foreground/20 font-light"
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
                  Access Admin
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
                  UPLOAD PHOTOS
                </h1>
                <p className="text-lg text-muted-foreground font-light text-lowercase-first">
                  Upload photos for your clients to download
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

          {/* Upload Section */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16 p-8 border" style={{ 
              backgroundColor: 'hsl(35 20% 99%)',
              borderColor: 'hsl(35 15% 85%)'
            }}>
              <h2 className="text-2xl font-serif mb-6 font-normal uppercase">
                UPLOAD NEW PHOTOS
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
                    Access Code
                  </label>
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                    placeholder="WEDDING2024, PORTRAIT2024, etc."
                    className="w-full px-4 py-3 border uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-foreground/20 font-light"
                    style={{
                      borderColor: brand.theme.border,
                      backgroundColor: "hsl(35 20% 100%)",
                    }}
                  />
                  <p className="mt-2 text-xs text-muted-foreground font-light text-lowercase-first">
                    Enter the access code your client will use to view these photos
                  </p>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-light">
                    Select Photos
                  </label>
                  <div className="border-2 border-dashed p-8 text-center" style={{
                    borderColor: brand.theme.border,
                    backgroundColor: 'hsl(35 18% 97%)'
                  }}>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center gap-4"
                    >
                      <Upload className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] font-light mb-2">
                          Click to select photos
                        </p>
                        <p className="text-xs text-muted-foreground font-light text-lowercase-first">
                          {selectedFiles.length > 0
                            ? `${selectedFiles.length} file(s) selected`
                            : "Select multiple images"}
                        </p>
                      </div>
                    </label>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {selectedFiles.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 border text-sm"
                          style={{
                            borderColor: brand.theme.border,
                            backgroundColor: "hsl(35 20% 99%)",
                          }}
                        >
                          <span className="font-light">{file.name}</span>
                          <button
                            onClick={() =>
                              setSelectedFiles(selectedFiles.filter((_, i) => i !== idx))
                            }
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  onClick={handleUpload}
                  disabled={uploading || selectedFiles.length === 0 || !accessCode}
                  whileHover={{ scale: uploading ? 1 : 1.05 }}
                  whileTap={{ scale: uploading ? 1 : 0.95 }}
                  className="w-full px-8 py-4 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background font-light flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    borderColor: brand.theme.accent,
                    color: brand.theme.accent,
                  }}
                >
                  {uploading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Upload className="h-4 w-4" />
                      </motion.div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Upload Photos
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </AnimatedSection>

          {/* Uploaded Images */}
          <AnimatedSection delay={0.3}>
            <h2 className="text-2xl font-serif mb-6 font-normal uppercase">
              UPLOADED PHOTOS ({uploadedImages.length})
            </h2>

            {uploadedImages.length === 0 ? (
              <p className="text-muted-foreground font-light text-lowercase-first">
                No photos uploaded yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {uploadedImages.map((image, idx) => (
                  <AnimatedSection key={image.id} delay={0.05 * idx}>
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
                        />
                        <motion.div
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-2"
                          initial={false}
                        >
                          <motion.button
                            onClick={() => handleDelete(image.id, image.accessCode)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-red-500/90 text-white text-xs uppercase tracking-[0.2em] transition-all font-light flex items-center gap-2"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </motion.button>
                        </motion.div>
                      </div>
                      <div className="mt-3 text-sm">
                        <p className="font-light truncate">{image.name}</p>
                        <p className="text-muted-foreground text-xs font-light">
                          Code: {image.accessCode}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AdminGallery;
