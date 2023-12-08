function Logo({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src="./components/logo/nuit.jpg"
      alt="Logo"
      width="62"
      height="62"
    />
  );
}

export default Logo;
