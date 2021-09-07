import './Post.css';

const Post = ({
    content,
    author
}) => {

    return (
        <div className='Post'>
            <img src='../public/bird_blue.png' />
            <p className='description'>{content}</p>
                <div>
                    <span>
                        <small>Author:</small> {author}
                    </span>
                </div>
        </div>
    )

}

export default Post;