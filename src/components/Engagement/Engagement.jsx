import "./Engagement.css";
function Engagement(props) {
  return (
    <div className="ViewsDiv">
      <div className="Subdiv1">
        <span>{props.metric}</span>
        <img src={props.platform}></img>
      </div>

      <div className="Subdiv1">
        <h1>{props.value}</h1>
        <div>
          <img src={props.icon}></img>
          <label>{props.change}</label>
        </div>
      </div>
    </div>
  );
}
export default Engagement;
