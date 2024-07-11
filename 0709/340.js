// 1번 유저의 게시글 목록과 댓글을 리턴하는 getPosts 함수를 작성하시오.
// 아직 푸는 중
async function getPosts(userNum) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userNum}`
  );
  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
  );
  const post = await postResponse.json();
  const comment = await commentResponse.json();

  return { ...post, ...comment };
}

// 예시 사용
console.log(getPosts(1));
