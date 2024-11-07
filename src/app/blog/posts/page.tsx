import {posts} from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function BlogPostsPage() {
  return (
    <div>
        <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}