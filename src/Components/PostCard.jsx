import React from 'react'
import appwriteService from "../appwrite/conf"
import {Link} from 'react-router-dom'
const PostCard = ({$id, title,featuredImage}) => {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-40 h-40 bg-gray-100 rounded-xl p-4  '>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard