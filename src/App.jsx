import { useState } from "react";
//import { useEffect } from "react";
import "./App.css";
import Followers from "./components/Followers/Followers";
import Engagement from "./components/Engagement/Engagement";

function App() {
  const [pagemode, setpagemode] = useState(false);
  const [Arrayoffollowers] = useState([{"id":1,
    "platform": "public/images/icon-facebook.svg",
    "username": "@nathanf",
    "metric": "Followers",
    "value": 1987,
    "icon":"public/images/icon-up.svg",
    "change": "12 Today"
},
{"id":2,
    "platform": "public/images/icon-twitter.svg",
    "username": "@nathanf",
    "metric": "Followers",
    "value": 1044,
    "icon":"public/images/icon-up.svg",
    "change": "99 Today"
},
{"id":3,
    "platform": "public/images/icon-instagram.svg",
    "username": "@realnathanf",
    "metric": "Followers",
    "value": 11000,
    "icon":"public/images/icon-up.svg",
    "change": "1099 Today"
},
{"id":4,
    "platform": "public/images/icon-youtube.svg",
    "username": "Nathan F.",
    "metric": "Subscribers",
    "value": 8239,
    "icon":"public/images/icon-down.svg",
    "change": "144 Today"
}]);
 /*const [pagemode, setpagemode] = useState(false);
  const [Arrayoffollowers, setArrayoffollowers] = useState([]);
  useEffect(() => {
    function CallApi() {
      fetch("http://localhost:3000/followers")
        .then((response) => {
          return response.json();
        })
        .then((finalresult) => {
          setArrayoffollowers(finalresult);
        });
    }
    CallApi();
  }, []);*/
  const [Arrayofengagement ]= useState([{"id":1,
    "platform": "public/images/icon-facebook.svg",
    "metric": "Page Views",
    "value": 87,
    "icon":"public/images/icon-up.svg",
    "change": "3%"
},
{"id":2,
    "platform": "public/images/icon-facebook.svg",
    "metric": "Likes",
    "value": 52,
    "icon":"public/images/icon-down.svg",
    "change": "2%"
},
{"id":3,
    "platform": "public/images/icon-instagram.svg",
    "metric": "Likes",
    "value": 5462,
    "icon":"public/images/icon-up.svg",
    "change": "2257%"
},
{"id":4,
    "platform": "public/images/icon-instagram.svg",
    "metric": "Profile Views",
    "value": 52000,
    "icon":"public/images/icon-up.svg",
    "change": "1375%"
},
{"id":5,
    "platform": "public/images/icon-twitter.svg",
    "metric": "Retweets",
    "value": 117,
    "icon":"public/images/icon-up.svg",
    "change": "303%"
},
{"id":6,
    "platform": "public/images/icon-twitter.svg",
    "metric": "Likes",
    "value": 507,
    "icon":"public/images/icon-up.svg",
    "change": "553%"
},
{"id":7,
    "platform": "public/images/icon-youtube.svg",
    "metric": "Likes",
    "value": 107,
    "icon":"public/images/icon-down.svg",
    "change": "19%"
},
{"id":8,
    "platform": "public/images/icon-youtube.svg",
    "metric": "Total Views",
    "value": 1407,
    "icon":"public/images/icon-down.svg",
    "change": "12%"
}]);
  /*const [pagemode, setpagemode] = useState(false);
  const [Arrayoffollowers, setArrayoffollowers] = useState([]);
  useEffect(() => {
    function CallApi() {
      fetch("http://localhost:3000/engagement")
        .then((response) => {
          return response.json();
        })
        .then((finalresult) => {
          setArrayofengagement(finalresult);
        });
    }
    CallApi();
  }, []);*/

  function handleonchange(event) {
    let bodyElements = document.querySelector("section");
    !pagemode
      ? bodyElements.classList.add("DarkMode")
      : bodyElements.classList.remove("DarkMode");
    setpagemode(event.target.checked);
  }

  return (
    <section>
      <div className="HeaderDiv">
        <div className="TitleDiv">
          <h2>Social Media Dashboard</h2>
          <span>Total Followers :23,004</span>
        </div>
        <div className="ModeDiv">
          <span>Dark Mode</span>
          <label className="switch">
            <input type="checkbox" onChange={handleonchange}></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="Followers">
        {Arrayoffollowers.map((follower) => {
          return (
            <Followers
              key={follower.id}
              id={follower.id}
              platform={follower.platform}
              username={follower.username}
              value={follower.value}
              metric={follower.metric}
              icon={follower.icon}
              change={follower.change}
            ></Followers>
          );
        })}
      </div>
      <div>
        <h2>Overview-Today</h2>
      </div>
      <div className="Engagement">
        {Arrayofengagement.map((engagement) => {
          return (
            <Engagement
              key={engagement.id}
              platform={engagement.platform}
              value={engagement.value}
              metric={engagement.metric}
              icon={engagement.icon}
              change={engagement.change}
            ></Engagement>
          );
        })}
      </div>
    </section>
  );
}

export default App;
