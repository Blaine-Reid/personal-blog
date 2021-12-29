import React from 'react';
// import TeaserPost from './TeaserPost'
import TeaserPostLeft from './ourJourney.teaser.left'
import TeaserPostRight from './ourJourney.teaser.right'
import './Post.css'


export default
  function OurJourney(props) {
let posts

//if screen width is greater than 600px then alternate image placement
//else place only on left to keep image on top of text in mobile mode
  if (window.screen.width > 600) {

     posts = props.displayPosts.map((post, index) => {

      if (index % 2 === 0) {
        return <TeaserPostLeft
          id={post._id}
          title={post.title}
          date={post.date ? post.date : null}
          locationName={post.locationName ? post.locationName : null}
          locationLongLat={post.locationLongLat ? post.locationLongLat : null}
          body={post.body}
          images={post.images}
          index={index}
          key={post._id}
          selectPost={props.selectPost}
        />
      } else {
        return <TeaserPostRight
          id={post._id}
          index={index}
          title={post.title}
          date={post.date ? post.date : null}
          locationName={post.locationName ? post.locationName : null}
          locationLongLat={post.locationLongLat ? post.locationLongLat : null}
          body={post.body}
          images={post.images}
          key={post._id}
          selectPost={props.selectPost}
        />
      }
    })

    } else {
       posts = props.displayPosts.map((post, index) => {
        return <TeaserPostLeft
          id={post._id}
          title={post.title}
          date={post.date ? post.date : null}
          locationName={post.locationName ? post.locationName : null}
          locationLongLat={post.locationLongLat ? post.locationLongLat : null}
          body={post.body}
          images={post.images}
          index={index}
          key={post._id}
          selectPost={props.selectPost}
        />

      })
    }

  return (
    <div>
      <h1 className="page-header cursive">Our Journey</h1>
      <div className="">
        {/* MAPPED DOCUMENTS FROM DATABASE */}
        {posts}
      </div>
    </div>

  );
}