import IconBox from "./ui/IconBox/IconBox";

type IconItem = {
  icon: JSX.Element;
  text?: string;
};

type IconContainerProps = {
  items: IconItem[];
};

const IconContainer = ({ items }: IconContainerProps) => {
  return (
    <div className="icon-container">
      {items.map((item, index) => (
        <IconBox key={index}>
          {item.icon}
          {item.text && <p className="icon-text">{item.text}</p>}
        </IconBox>
      ))}
    </div>
  );
};

export default IconContainer;
