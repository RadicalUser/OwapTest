import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function Input({
  label,
  type = 'text',
  name,
  register,
  error,
  icon: Icon,
  ...props
}) {
  return (
    <div className="relative mb-6">
      <label className="block text-cyber-blue text-sm font-medium mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          {...register(name)}
          type={type}
          className={clsx(
            "w-full bg-black/20 border-2 rounded-lg py-2.5",
            Icon ? "pl-10 pr-3" : "px-3",
            "text-white placeholder-gray-400",
            "focus:ring-2 focus:ring-cyber-blue focus:border-transparent",
            "transition-all duration-200",
            "backdrop-blur-sm",
            error ? "border-red-500" : "border-gray-600"
          )}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
}