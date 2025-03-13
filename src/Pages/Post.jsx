import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import { Button, Button1, Container } from "../Components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
const Post = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
            else{
                console.log("nhi hu idelte")
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 h-100">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6 ">
                                <Button1 text="Edit" link={`/edit-post/${post.$id}`}  className="mr-3 w-20 mb-6"/>
                                  
                                
                           
                            <Button1 text="Delete"  className="w-20" onClick={deletePost}/>
            
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-white">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="text-white">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}

export default Post