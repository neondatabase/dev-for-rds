const IconContainer = ({ children }) => {
  return (
    <div className='flex items-center justify-center w-8 h-8 rounded-full border border-brand-border/40'>
      {children}
    </div>
  );
};

export default IconContainer;
