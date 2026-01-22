

const SideBar = () => {
  return (
    <div className="fixed left-6 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center justify-center">
      {/* Contact Us with vertical line */}
      <div className="flex flex-col items-center">
        <a
          href="#contact"
          className="font-display text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-200"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          Contact Us
        </a>
        <div className="w-px h-20 bg-foreground mt-4" />
      </div>
    </div>
  );
};

export default SideBar;
