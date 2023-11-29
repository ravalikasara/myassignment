
const getUsersWithPosts=async()=>{
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();

    const usersWithPosts = await Promise.all(
      users.map(async (user) => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();
        return { ...user, posts };
      })
      
    );
    console.log(usersWithPosts)
    return usersWithPosts
   
}
 getUsersWithPosts()
