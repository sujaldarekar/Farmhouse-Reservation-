const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-white/60 ml-1 block">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-white/5 border rounded-2xl px-5 py-4 outline-none transition-all duration-300
          ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-rose-500 focus:bg-white/10'}
          placeholder:text-white/20`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 ml-1 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
