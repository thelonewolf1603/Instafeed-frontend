export const Post = ({data}) => {

    return (
        <div className="Post">
            <div className="PostContent">{data.content}</div>
            <div className="PostAuthor">Posted by {data.author}</div>
            <div className="PostDate">posted on {new Date(data.created).toLocaleString()}</div>
        </div>
    )

}