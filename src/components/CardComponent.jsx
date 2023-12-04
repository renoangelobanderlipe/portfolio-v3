export const CardComponent = ({ children, sx }) => {
  return (
    <div className={`${sx} flex gap-[80px] w-full`}>
      {children}
    </div>
  );
}