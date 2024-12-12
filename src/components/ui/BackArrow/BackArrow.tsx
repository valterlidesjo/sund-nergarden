import "./_BackArrow.scss";

type BackArrowProps = {
    size?: string; 
  };

const BackArrow: React.FC<BackArrowProps> = ({size =  "3rem"}) => {
  return (
    <>
    <i className="fa-solid fa-arrow-left" style={{fontSize: size}}></i>
    </>
  )
}

export default BackArrow