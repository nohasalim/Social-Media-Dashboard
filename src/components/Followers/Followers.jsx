import "./Followers.css";
function Followers(props) {
  let labelItems = document.querySelector("label");
  if(props.icon==="public/images/icon-down.svg")
    {labelItems.classList.add("RedLabel")}
    else{labelItems.classList.remove("RedLabel");} 

  return (
    <div className="UsersDiv">
      <div className="Subdiv2">
        <img src={props.platform}></img>
        <span>{props.username}</span>
      </div>
      <div>
        <h1>{props.value}</h1>
        <span>{props.metric}</span>
      </div>

      <div className="Subdiv2">
        <img src={props.icon}></img>
        <label>{props.change}</label>
      </div>
    </div>
  );
}
export default Followers;
