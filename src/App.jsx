import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import RegistrationForm from './components/RegistrationForm';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8"
            animate={{ 
              boxShadow: ['0 0 20px #00f2fe', '0 0 40px #4726f2', '0 0 20px #00f2fe'],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <img
              src="https://owasp.org/assets/images/logo.png"
              alt="OWASP Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-transparent bg-clip-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{textAlign:"center"}}

          >
            Secure the Future
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{textAlign:"center"}}

          >
            Join the OWASP Tech Revolution
          </motion.p>
        </motion.div>

        <RegistrationForm />

        <footer className="text-center mt-16">
          <SocialLinks />
          <p className="text-gray-400 mt-4">
            © {new Date().getFullYear()} OWASP Tech Club. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;