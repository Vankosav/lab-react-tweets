import User from "./User";
import Message from "./Message";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";

function Tweet({name, handle, timestamp, message, image}) {
  
  return (
    <div className="tweet">
    <ProfileImage userImage={image} />

      <div className="body">
        <div className="top">
          <User userName={name} userHandle={handle} />

          <Timestamp timestamp={timestamp}/>
        </div>

        <p className="message">
          <Message message={message}/>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
