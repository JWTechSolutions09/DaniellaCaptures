import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/config/brand";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className="z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      style={{ 
        position: 'relative',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="font-serif text-lg tracking-wide text-foreground font-normal uppercase"
            >
              {brand.name}
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
              >
                <Link
                  to={item.path}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors font-light relative ${
                    isActive(item.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/inquire"
                className="ml-6 inline-flex items-center gap-2 px-6 py-2 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background font-light"
                style={{
                  borderColor: brand.theme.accent,
                  color: brand.theme.accent,
                }}
              >
                Inquire
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm uppercase tracking-[0.2em] font-light ${
                        isActive(item.path)
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link
                    to="/inquire"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 inline-flex items-center gap-2 px-8 py-3 text-xs uppercase tracking-[0.2em] border transition-all hover:bg-foreground hover:text-background font-light"
                    style={{
                      borderColor: brand.theme.accent,
                      color: brand.theme.accent,
                    }}
                  >
                    Inquire
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
