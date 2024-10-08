function Comment (props) {
    const comment = props.comment;
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
}

export default Comment
