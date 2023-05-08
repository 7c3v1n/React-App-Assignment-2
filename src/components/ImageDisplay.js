import mainpic from "../images/placeholderpic.jpg"

const ImageDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        felxDirection: "column"
      }}
      >
      <img src={mainpic} alt="profile" height={250} width={250}/>
    </div>
  )
}

export default ImageDisplay;