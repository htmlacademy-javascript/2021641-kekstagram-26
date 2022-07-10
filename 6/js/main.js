import {createPost, COUNT} from './mock.js';
import {renderPosts, bindPostClickListener} from './render-posts';
import {openBigPicture} from './full-screen';

const posts = createPost(COUNT);
renderPosts(posts);

bindPostClickListener((postId) => {
  const selectedPost = posts.find((post) => post.id === +postId);
  openBigPicture(selectedPost);
});

