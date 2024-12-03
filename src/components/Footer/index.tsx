import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-pink-500 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-sm leading-relaxed">
              En proceso
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-pink-500 mb-4">
              Enlaces Rápidos
            </h2>
            En proceso
            {/* <ul className="space-y-2">
              <li>
                <a
                  href="/home"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul> */}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-pink-500 mb-4">
              Sigueme
            </h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/ihswt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/iska1234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors duration-300"
                >
                  <i className="fab fa-instagram"></i> Github
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            © 2024 Todos los derechos reservados. | Diseñado con mucho{" "}
            <span className="text-pink-500">❤</span> por iskadev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
