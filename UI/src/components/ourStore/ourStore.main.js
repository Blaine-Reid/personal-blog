import React from 'react';
import StorePost from './ourStore.post'

export default
  function OurStore(props) {

  let posts = props.displayPosts.map((post, index) => {

    return <StorePost
      id={post._id}
      index={index}
      title={post.title}
      date={post.date ? post.date : null}
      body={post.body}
      link={post.link}
      price={post.price}
      images={post.images}
      key={post._id}
    />

  })


  return (
    <div>
      <h1 className="page-header cursive">Our Store</h1>
      <div className="flex">
        {/* MAPPED DOCUMENTS FROM DATABASE */}
        {posts}
      </div>
    </div>

  );
}
