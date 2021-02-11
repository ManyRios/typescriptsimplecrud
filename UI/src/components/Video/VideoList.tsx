import React, { useEffect, useState } from 'react'
import Video from './Video'
import * as Services from './Services'
import { VideoItem } from './VideoItem'

export const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([])

    const LoadVideos = async () => {
        const res = await Services.getVideos()

        const formatedVideos = res.data.map( video => {
            return{
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
            }
        })
        .sort( (a, b ) => b.createdAt.getDate() - a.createdAt.getDate() )
        setVideos(formatedVideos)
     }
 
     useEffect(  () => {
         LoadVideos()
     }, [])


    return (
        <div className="row">
            {
                videos.map((video) => {
                    return <VideoItem video={ video } key={ video._id } loadVideos={LoadVideos}/>
                })
            }
        </div>
    )
}
