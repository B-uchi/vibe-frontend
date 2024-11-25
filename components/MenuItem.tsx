interface MenuItemProps {
  text: string;
  bold?: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({ text, bold }) => {
  return (
    <div className={`font-poppins cursor-pointer menu-item ${ bold ? 'font-bold' : ''}`}>
      {text}
      {/* <div className="active"></div> */}
    </div>
  );
};

export default MenuItem;
