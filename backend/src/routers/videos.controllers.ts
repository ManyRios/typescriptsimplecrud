import { RequestHandler } from "express";

import Video from "./Video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    if (videos) {
      res.json(videos);
    } else {
      res.json("no videos to show");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  // console.log( req.params.id );
  try {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json();

    res.json(videoFound);
  } catch (error) {}
};

export const setVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    console.log(req.body);
    if (videoFound)
      return res.status(303).json({ message: "the url already exists" });

    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
  } catch (error) {
    console.log("No Hubo Respuesta");
  }
};

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    if (!videoFound) return res.status(204).json();

    return res.status(204).json();
  } catch (error) {}
};

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    if (!req.params.id) return res.status(200).json();
    const updateVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateVideo);
  } catch (error) {}
};
