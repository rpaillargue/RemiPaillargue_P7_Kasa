import "../Tag/Tag.css";

function Tag(props) {
  return (
    <div className="tag-container">
      <span className="tag">{props.tag}</span>
    </div>
  );
}

export default Tag;
