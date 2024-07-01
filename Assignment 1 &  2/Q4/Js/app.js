async function fetchUserProfileFromWebsite1(userId) {
    try {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      const userProfile = await response.json();
      return userProfile;
    } catch (error) {
      console.error(`Error fetching user profile from Website 1: ${error.message}`);
      return null;
    }
  }
  
  async function fetchUserPostsFromWebsite2(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const userPosts = await response.json();
      return userPosts;
    } catch (error) {
      console.error(`Error fetching user posts from Website 2: ${error.message}`);
      return null;
    }
  }
  
  async function getUserData(userId) {
    try {
      const [userProfile, userPosts] = await Promise.all([
        fetchUserProfileFromWebsite1(userId),
        fetchUserPostsFromWebsite2(userId)
      ]);
      return { userProfile, userPosts };
    } catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
      return null;
    }
  }
  
  const userId = 1; // single user ID
  
  getUserData(userId)
   .then((userData) => {
      const userDataElement = document.getElementById('user-data');
      userDataElement.innerHTML = `
        <div class="user-data-box">
          <h2>User ${userId} Profile</h2>
          <div class="user-profile">
            <img src="${userData.userProfile.avatar_url}" class="user-profile-picture">
            <div>
              <span class="user-profile-label">Name:</span>
              <span>${userData.userProfile.name}</span>
            </div>
            <div>
              <span class="user-profile-label">Username:</span>
              <span>${userData.userProfile.login}</span>
            </div>
            <div>
              <span class="user-profile-label">Location:</span>
              <span>${userData.userProfile.location}</span>
            </div>
          </div>
          <h2>User ${userId} Posts</h2>
          <div class="user-posts">
            ${userData.userPosts.map((post) => `
              <div class="user-post">
                <img src="https://picsum.photos/200/300" class="user-post-image">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    })
   .catch((error) => {
      console.error(`Error: ${error.message}`);
    });