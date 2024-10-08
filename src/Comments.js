import'./Comments.css';
import Comment from './Comment';

function Comments () {
    let commentsData = [
        { creator: "Ava", comments: "YAY", likedCount: 1 },
        { creator: "Bov", comments: "GOOD", likedCount: 10 },
        { creator: "Celine", comments: "NICE", likedCount: 2 },
    ];

    return (
        <div className='comments'>
        {commentsData.map((comment)=> {
            return (
                <Comment comment={comment} />
            )
        })}
        </div>
    )
}
export default Comments;