import React from 'react';
import './MessageBox.scss';
import {IoMdCheckmark} from 'react-icons/io';
import {MdErrorOutline, MdInfoOutline} from 'react-icons/md';

export type MessageType = 'info' | 'success' | 'error';

type MessageBoxProps = {
  type?: MessageType;
  message: string;
}
const MessageBox = ({ type, message }: MessageBoxProps) => {
  let icon;

  switch (type) {
    case 'info':
      icon = <MdInfoOutline />;
      break;
    case 'success':
      icon = <IoMdCheckmark /> ;
      break;
    case 'error':
      icon = <MdErrorOutline />;
      break;
    default:
      icon = <MdInfoOutline />;
  }

  return (
    <div className="messageBox" >
      <span className="icon">{icon}</span>
      <h3>{message}</h3>
    </div>
  );
};

export default MessageBox;