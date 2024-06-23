interface MenuItemProps {
  text: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  return (
    <div className="text-white font-poppins cursor-pointer menu-item ">
      {text}
      {/* <div className="active"></div> */}
    </div>
  );
};

export default MenuItem;
