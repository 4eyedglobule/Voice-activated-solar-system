import './DisplayBox.css';

function DisplayBox({ text, image_source, image_scale, top_margin,font_size }) {
  return <div className="displayBox">
    <div style={{ display: "flex", justifyContent: "center", fontSize:font_size }}>
      {text}
    </div>
    <div style={{ marginTop: top_margin, transform: `scale(${image_scale})`, transformOrigin: 'center' }}>
      <img src={image_source} alt="NO IMAGE" />
    </div>
  </div>;
}

export default DisplayBox;