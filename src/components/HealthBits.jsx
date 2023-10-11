import React, { useEffect, useState } from 'react';
import '../styles/FacebookPosts.css';

const FacebookPosts = () => {
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
        window.FB && window.FB.XFBML.parse();
      })
      .catch(error => console.error('Error fetching Facebook posts:', error));
  }, [pageId, accessToken]); // Include pageId and accessToken as dependencies

  return (
    <>
      <div className='facebook-posts'>
        <div className='healthbits__info'>
          <div>
            <h1><span>Health Bits is more than a brand...</span></h1>
            <p>It's a holistic approach to health and wellness 
              that we're passionate about sharing with you. At Health Bits, we believe in empowering 
              individuals to embrace a lifestyle focused on well-being, nutrition, and fitness. Our mission 
              is to guide and educate, providing insights on healthy diets, the importance of proper 
              nutrition, and the best practices for achieving overall wellness. Whether you're a mom 
              seeking helpful tips or anyone looking to prioritize health in your daily routine, 
              Health Bits is here to support your journey towards a healthier, happier you.
            </p>
          </div>
          <a className='btn healthbits__btn' href="https://www.facebook.com/healthbitspskw">Explore more</a>
        </div>
        <div className='healthbits__updates'>
          {postIds.map((postId, index) => (
            <div key={index} className="fb-post" data-href={`https://www.facebook.com/${pageId}/posts/${postId}`} data-width="350"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FacebookPosts;
