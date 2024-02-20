const ArticleCard = (props) => {

    return (
        <>
            <h3>{props.props.article_name}</h3>
            <br />
            <div>tags:
                {props.props.tags ? props.props.tags.map((tag, key) => {
                    return <p key={key}>{tag}</p>
                }) : ""}</div>

            <br />

            <p>{props.props.update_time}</p>
            <br />
            <p>{props.props.abstract}</p>
        </>
    )
}
export { ArticleCard }