import { notFound } from 'next/navigation';
import { db } from '../../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

interface Blog {
  title: string;
  content: string;
}

const fetchBlog = async (id: string): Promise<Blog | null> => {
  const docRef = doc(db, 'blog-app-test', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return docSnap.data() as Blog;
};

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = await fetchBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;