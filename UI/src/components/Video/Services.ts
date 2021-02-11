import config from './config'
import axios from 'axios'
import Video from './Video';


export const getVideos = async () => {
    return await axios.get<Video[]>( `${config.API_ADDRESS}/videos`);
}

export const getVideo = async (id: string) => {
    return await axios.get<Video>( `${config.API_ADDRESS}/videos/${id}`);
}

export const addVideos = async (video: Video) => {
    return await axios.post( `${config.API_ADDRESS}/videos`, video);
}

export const updateVideo = async (id: string, video: Video) => {
    return await axios.put<Video>( `${config.API_ADDRESS}/videos/${id}`, video);
}

export const deleteVideo = async (id: string ) =>{
    return await axios.delete<Video>(`${config}/videos/${id}`)
}