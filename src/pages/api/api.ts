export async function fetchPosts() {
    try {
      const response = await fetch('https://demo.ghost.io/ghost/api/content/posts/?key=22444f78447824223cefc48062');
      
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Ensure the 'posts' property exists in the response
      if (!data || !Array.isArray(data.posts)) {
        throw new Error("API response is missing 'posts' property or it's not an array");
      }
  
      return data.posts;  // Return the posts array
  
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];  // Return an empty array in case of error
    }
  }
  