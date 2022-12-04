const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// 全ての情報を取得する
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// 全ての情報のidを取得する
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// キーとなるidから情報を取得する
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
