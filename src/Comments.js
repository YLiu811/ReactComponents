import'./Comments.css';

function Comments () {
    let commentsData = [
        { creator: "Ava", comments: "YAY", likedCount: 1 },
        { creator: "Bov", comments: "GOOD", likedCount: 10 },
        { creator: "Celine", comments: "NICE", likedCount: 2 },
    ];
    <div className='comments'>
    {commentsData.map((comment)=> {
    return (
        <div className='comment'>
            <h3 classname='comment-header'>{ comment.creator }</h3>
            <p className='comment-body'>{ comment.comment }</p>
            <div className='comment-actions'>
                <button>Like</button>
                <span> {comment.likedCount }</span>
            </div>
        </div>
    )  
    })}
    </div>
}
export default Comments;