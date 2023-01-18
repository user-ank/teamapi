import React from 'react'
import "./post.css"
// import { useStateValue } from '../../StateProvider'


function Post({ id, title, description, writtenby,posttime,noOfLike,noOfDislike}) {

    // const [{ basket }, dispatch] = useStateValue();
    // console.log("This is basket  ",basket);

    // const AddToBasket = () => {
    //     //  dispatch the item into data layer 
    //     dispatch({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //             rating: rating,
    //             NoOfRater: NoOfRater
    //         },
    //     })
    // }

    return (
        <div className='Posts'>
            <div className="Posts_info">
                <p><h3>{title}</h3></p>
                <p className="Posts_description">{description}</p>      
            <div className="post_stat">
            <div className="post_writtenby details">{writtenby}</div>
            <div className="post_time details">{posttime}</div>
            <div className="noOfLike details">{noOfLike}</div>
            <div className="noOfDislike details">{noOfDislike}</div>
            </div>
            </div>
            <button className='like'>Like</button>
            <button className='dislike'>Dislike</button>

        </div>
    )
}

export default Post