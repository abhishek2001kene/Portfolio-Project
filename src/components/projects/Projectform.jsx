import React,{useEffect, useState} from 'react'
import {useDispatch } from "react-redux"
import { addPro } from '../../feature/projectsSlice'

function Projectform() {

const [Title, setTitle] = useState('')
const [Features, setFeatures] = useState('')
const [proUrl, setproUrl] = useState('')
const [imgUrl, setimgUrl] = useState('')
const [srcUrl, setsrcUrl] = useState('')

const dispatch = useDispatch()

const AddProHandeller = (e) =>{
            e.preventDefault()
            dispatch(addPro(
                                {
                                    Title:Title, 
                                    Features:Features,
                                    imgUrl:imgUrl,
                                    proUrl:proUrl,
                                    srcUrl:srcUrl

                                }
                            )
                    )

                setFeatures('')
                setTitle('')
                setimgUrl('')
                setproUrl('')
                setsrcUrl('')
}





  return (
    <div className='bg-slate-400'>
        
        <form onSubmit={AddProHandeller} className='flex flex-col py-32 gap-8 items-center '>
            <input 
            type="text"
            value={Title}
            placeholder='Project Title'
            onChange={(e) => setTitle(e.target.value)}
            />

           <textarea
            value={Features}
            placeholder='Mention features'
            onChange={(e)=> setFeatures(e.target.value)}
           />
           <input
            value={imgUrl}
            placeholder='Image url'
            onChange={(e)=> setimgUrl(e.target.value)}
           />
           <input
            value={proUrl}
            placeholder='Project link'
            onChange={(e)=> setproUrl(e.target.value)}
           />
           <input
            value={srcUrl}
            placeholder='Source link'
            onChange={(e)=> setsrcUrl(e.target.value)}
           />
            <button type="submit" className='bg-slate-800 text-white p-3 rounded-xl'>Add Project</button>

        </form>
    </div>
  )
}

export default Projectform