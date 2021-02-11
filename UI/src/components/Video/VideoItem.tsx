import React from "react";
import Video from "./Video";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import * as Services from './Services'
import "./videoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

export const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleDelete = async(id: string ) => {
     await Services.deleteVideo(id);   
     loadVideos()
  }

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h3
            onClick={() => {
              history.push(`/update-video/${video._id}`);
            }}
          >
            {video.title}
          </h3>
          <span className="text-danger" onClick={ ()=>{ video._id && handleDelete( video._id ) } }>
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};
