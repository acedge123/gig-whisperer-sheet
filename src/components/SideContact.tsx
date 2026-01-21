const SideContact = () => {
  return (
    <a
      href="#contact"
      className="fixed left-0 z-40 hidden lg:flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200"
      style={{
        bottom: '15vh',
        transformOrigin: 'left bottom',
        transform: 'rotate(-90deg) translateX(-100%)',
      }}
    >
      <span className="font-display text-sm font-bold italic uppercase tracking-wider">
        Contact Us
      </span>
      <div className="w-16 h-px bg-foreground" />
    </a>
  );
};

export default SideContact;
