import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {useHistory, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Video from "./Video";
import * as Services from './Services'


type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Params{
  id: string
}

export const VideoForm = () => {
    
    const history = useHistory()
    const params = useParams<Params>()

    const initialState = {
        title: "",
        url: "",
        description: "" 
    }

    const [video, setVideo] = useState<Video>(initialState)    

    const handleChanges = (e: InputChange ) =>{
        setVideo( {...video, [ e.target.name ]: e.target.value } )
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!params.id){
          await Services.addVideos(video)        
          toast.success('New Video added')
        }else{
          await Services.updateVideo(params.id, video )
          toast.info('Video has been updated')
        }
        setVideo(initialState)
        //history.push('/')
    }

    const getVideo = async (id: string ) =>{
      const res = await Services.getVideo(id)
      const { title, url, description } = res.data

      setVideo( {title, url, description } )
    } 

    useEffect( () => {
      if ( params.id ) getVideo(params.id)
    }, [])


  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {
              params.id ? <h3 className="text-center">Update Video</h3>
              :
              <h3 className="text-center">New Video</h3>
            }
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="form-control"
                  onChange={handleChanges}
                  value = { video.title }
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://www.example.com"
                  onChange={handleChanges}
                  value = { video.url }
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  onChange={handleChanges}
                  value = { video.description }
                  placeholder="Video Description"
                ></textarea>
              </div>

              {
                   
                  params.id ? <button className="btn btn-info offset-md-4">Update Video</button>
                  :
                  <button className="btn btn-primary offset-md-4">Add Video</button>   
              }

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
