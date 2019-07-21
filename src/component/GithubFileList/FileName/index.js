import React from "react";
import FolderIcon from "../../../assets/icons/folder-icon.svg";
import FileIcon from "../../../assets/icons/file-icon.svg";
import "./style.css";

const FileName = ({ name, type }) => {
  return (
    <td className="file-name-container">
      <img
        src={type === "folder" ? FolderIcon : FileIcon}
        alt="thumbnail"
        className="thumbnail"
      />
      <p className="text">{name}</p>
    </td>
  );
};

export default FileName;
