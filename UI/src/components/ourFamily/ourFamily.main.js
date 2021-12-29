import React from 'react';
import FamilyPostRight from './ourFamily.post.right'
import FamilyPostLeft from './ourFamily.post.left'


export default
  function OurFamily(props) {
  let posts = props.displayPosts.map((post, index) => {
    //LEFT HAND IMAGE DISPLAY
    if (index % 2 === 0) {
      return <FamilyPostRight
        id={post._id}
        index={index}
        title={post.title}
        body={post.body}
        images={post.images}
        key={post._id}
        link={post.link}
      />
      //RIGHT HAND IMAGE DISPLAY
    } else {

      return <FamilyPostLeft
        id={post._id}
        index={index}
        title={post.title}
        body={post.body}
        images={post.images}
        key={post._id}
        link={post.link}
      />
    }

  })

  return (
    <div>
      <h1 className="page-header cursive">Our Family</h1>
      <div className="">
        {/* MAPPED DOCUMENTS FROM DATABASE */}
        {posts}
      </div>
    </div>

  );
}


