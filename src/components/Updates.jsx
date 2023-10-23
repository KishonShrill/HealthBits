import React, { useEffect, useState } from 'react';
import { FacebookEmbed } from 'react-social-media-embed';
import '../styles/Updates.css';

export default function Updates() {
  return (
    <section className='updates'>
      <RenderFacebookPosts />
    </section>
  );
};

function RenderFacebookPosts() {
  const [postIds, setPostIds] = useState([]);
  const pageId = '100730185648196'; // Replace with your actual Facebook page ID
  const accessToken = 'EAAMf6nhAb3YBO2eptMqRX4NX21SmdZBZCnIvVZBUIHAU7fdJcCPiZAaKIFLe2oBVsAFgrJ1yAGJpKs8JbUZAfJ4wy3t1G0myZCy76KpliF9DCXy5c8vIExbvKNNmhSrfGdUdRwMi7psghqCBMZCtlnJwMYzzV8ZAZBpfEOHTCPi0VyzCV7Trxe5wYXLWDWs8qBvAZD'; // Replace with your actual Facebook Access Token

  useEffect(() => {
    // Fetch the top 4 posts from the Facebook Graph API
    fetch(`https://graph.facebook.com/${pageId}/feed?access_token=${accessToken}&limit=4`)
      .then(response => response.json())
      .then(data => {
        const extractedPostIds = data.data.map(post => {
          // Extract the actual post ID after the underscore
          const postId = post.id.split('_')[1];
          return postId;
        });
        console.log('Fetched post IDs:', extractedPostIds); // Log the fetched post IDs
        setPostIds(extractedPostIds);
        // Load Facebook SDK and parse embedded elements
      })
      .catch(error => console.error('Error fetching Facebook posts:', error));
  }, [pageId, accessToken]); // Include pageId and accessToken as dependencies

  return (
    <>
      {postIds.map((postId, index) => (
        <FacebookEmbed 
          key={index} 
          className="embeds"
          url={`https://www.facebook.com/${pageId}/posts/${postId}`} 
          width="100%" />
      ))}
    </>
  );
}