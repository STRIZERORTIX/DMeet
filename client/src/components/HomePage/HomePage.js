import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Come Out Of Stress , Depression And Any Other Mental Health Related Issues...Today!</h2>
            <p>
              We Have Designed This Personalised Web-App Just For You..And It's Free! So What Are You Waiting For?
            </p>
            <div className="action-btn">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
          <img src="https://image.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4614.jpg" alt="Meet" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
