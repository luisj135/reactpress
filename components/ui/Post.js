import AuthorList from "../ui/AuthorList";
import TermList from "../ui/TermList";
import moment from "moment";

const Post = ({ post }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <p>
      <em>
        by <AuthorList authors={post._embedded.author} /> -{" "}
        {moment(post.date).format("LLL")}
      </em>
    </p>
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    {post._embedded["wp:term"][0].length > 0 && (
      <p>
        <em>
          Catégories: <TermList terms={post._embedded["wp:term"][0]} />
        </em>
      </p>
    )}
    {post._embedded["wp:term"][1].length > 0 && (
      <p>
        <em>
          Tags: <TermList terms={post._embedded["wp:term"][1]} />
        </em>
      </p>
    )}
  </div>
);

export default Post;