import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/conf"
import { Container,FadeInWrapper,PostCard} from '../Components/index'
import TiltedCard from '../Components/Animation/TitledCard'
import ShinyText from '../Components/Animation/ShinyText'
const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [Loading,setLoading] = useState(true);
    useEffect(() => {
        appwriteService.getPosts([]).then((Posts) => {
            if(posts){
                setPosts(Posts.documents)
            }
        })
        .finally(() => setLoading(false))
    },[])
    
  return !Loading ? (
    <FadeInWrapper>
    <div className=' w-full py-8 bg-[#ebebe8] min-h-screen'>
        <Container>
            <div className='flex flex-wrap gap-6'>
                {[...posts].reverse().map((post) => (
                    <div key={post.$id} className=''>
                        <TiltedCard {...post}
                        />
                    </div>
                ))}
            </div>
        </Container>
    </div>
    </FadeInWrapper>
  ): 
  <div className='flex items-center justify-center min-h-screen bg-black'>
  <ShinyText text="THE DEV DEN" disabled={false} speed={3} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt "/>
  </div>
}

export default AllPosts