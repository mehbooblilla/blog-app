import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  content: string;
}

const fetchBlogs = async (): Promise<Blog[]> => {
  const querySnapshot = await getDocs(collection(db, 'blog-app-test'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];
};

const BlogPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog List</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className="mb-4">
            <Link href={`/blog/${blog.id}`}>
              <span className="text-xl text-blue-500">{blog.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;