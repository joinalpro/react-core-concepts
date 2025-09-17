export default function Post({ post }) {
  console.log(post);
  const { userId, title } = post;
  return (
    <div className="card">
      <h4>Single Post: {userId}</h4>
      <h4>Title: {title}</h4>
    </div>
  );
}
