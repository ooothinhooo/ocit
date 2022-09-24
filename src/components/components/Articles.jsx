import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase.config';
import DeleteArticle from './DeleteArticle';
import { useAuthState } from 'react-firebase-hooks/auth';
import LikeArticle from './LikeArticle';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { AiOutlineLike } from 'react-icons/ai';
import Article from './Article';
import Comment from './Comment';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function Articles({ colDB }) {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();

    const [articles, setArticles] = useState([]);
    // console.log(articles);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, colDB);
        const q = query(articleRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);

    return (
        <>
            <div className="mb-14">
                {articles.length === 0 ? (
                    <p>No articles found!</p>
                ) : (
                    articles.map(
                        ({
                            id,
                            title,
                            userPhotoURL,
                            description,
                            imageUrl,
                            createdAt,
                            createdBy,
                            userId,
                            likes,
                            comments,
                        }) => (
                            <div className=" my-1 md:p-3 bg-light md:min-w-[799px] w-[93%] " key={id}>
                                <div
                                    class={`flex-col w-full py-4 md:mx-auto mt-1 bg-chat px-2 mr-1
                                    border-gray-200 sm:px-4 sm:py-4 md:px-4 rounded-lg  md:w-2/3
                                    ${user && user.uid === userId ? 'bg-[#4D4545]' : 'bg-[#283149]'}
                                    `}
                                >
                                    <div class="flex flex-row md-10">
                                        <img
                                            class="md:w-12 md:h-12 w-10 h-10 border-2 border-gray-300 rounded-full"
                                            alt="Anonymous's avatar"
                                            src={userPhotoURL}
                                        />
                                        <div class="flex-col mt-1">
                                            <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                                                <span class="text-blue-400">{createdBy}</span>
                                                <span class="ml-2 text-xs font-normal text-gray-500">
                                                    {createdAt.toDate().toDateString()}
                                                </span>
                                            </div>
                                            <div class="flex-1 px-2 ml-2 text-sm md:font-medium leading-loose text-gray-50">
                                                {description}
                                            </div>
                                            {/* <Link to={`/${colDB}/${id}`}> */}
                                            <div className="flex  w-fit py-1 px-3 mr-2">
                                                <span className="flex shadow-lg px-2 py-[2px]">
                                                    <span
                                                        className={` text-lg text-blue-300  ${
                                                            likes?.length == 0 ? 'hidden' : ''
                                                        }`}
                                                    >
                                                        {user && user ? (
                                                            <span>{likes?.length}</span>
                                                        ) : (
                                                            <span className=" flex justify-center items-center">
                                                                <span> {likes?.length}</span>
                                                                <AiOutlineLike className="text-xl" />
                                                            </span>
                                                        )}
                                                    </span>
                                                    <span className="">
                                                        {user && <LikeArticle id={id} likes={likes} colDB={colDB} />}
                                                    </span>
                                                </span>

                                                {comments && comments.length > 0 && (
                                                    <span className="text-gray-200 text-sm ml-2 flex shadow-lg px-2 py-[2px]">
                                                        <span>{comments?.length} comments</span>
                                                    </span>
                                                )}
                                                <span>
                                                    {user && user.uid === userId && (
                                                        <DeleteArticle id={id} imageUrl={userPhotoURL} colDB={colDB} />
                                                    )}
                                                </span>
                                            </div>

                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="row">
                            <div className="col-3">
                                <Link to={`/article/${id}`}>
                                    <img src={imageUrl} alt="title" style={{ height: 180, width: 180 }} />
                                </Link>
                            </div>
                            <div className="col-9 ps-3">
                                <div className="row">
                                    <div className="col-6">
                                        {createdBy && <span className="badge bg-primary">{createdBy}</span>}
                                    </div>
                                    <div className="col-6 d-flex flex-row-reverse">
                                        {user && user.uid === userId && <DeleteArticle id={id} imageUrl={imageUrl} />}
                                    </div>
                                </div>
                                <h3>{title}</h3>
                                <p>{createdAt.toDate().toDateString()}</p>
                                <h5>{description}</h5>

                                <div className="d-flex flex-row-reverse">
                                    {user && <LikeArticle id={id} likes={likes} />}
                                    <div className="pe-2">
                                        <p>{likes?.length} likes</p>
                                    </div>
                                    {comments && comments.length > 0 && (
                                        <div className="pe-2">
                                            <p>{comments?.length} comments</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div> */}

                                <Accordion allowZeroExpanded className="bg-primary  md:m-auto md:w-[60%] w-full">
                                    <AccordionItem key={id} className="  bg-primary">
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="bg-[#00454A] mt-1 p-1 rounded-md text-gray-300">
                                                Rep Comment {createdBy}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            {' '}
                                            <div className={``}>
                                                <Comment id={id} colDB={colDB} />
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        ),
                    )
                )}
            </div>
            {/* <Article colDB={colDB} /> */}
        </>
    );
}