import React from "react";
import classes from "./ChatBody.module.css";
import ChatList from "../ChatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import UserProfile from "../UserProfile/UserProfile";

function ChatBody(props) {
  return (
    <div className={classes.main__chatbody}>
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
}

export default ChatBody;
