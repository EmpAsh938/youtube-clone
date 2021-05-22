import Avatar from "@material-ui/core/Avatar";
import "./Search.css";

const Search = ({ searchTerm, searchVideos, showMenu, isLoading }) => {
  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  return (
    <section className={showMenu ? "search content__menu-active " : "search"}>
      <p className="search__text">
        Search results for <span>{searchTerm}</span>:
      </p>
      {searchVideos.map((item) => {
        const {
          id: { videoId },
          snippet: {
            channelId,
            description,
            channelTitle,
            title,
            thumbnails: {
              medium: { url },
            },
          },
        } = item;
        return (
          <div className="search__wrapper" key={videoId}>
            <div className="search__thumbnail">
              <img src={url} alt={title} />
              <span>length</span>
            </div>
            <div className="search__info">
              <p>{description}</p>
              <div className="search__channelImage">
                <Avatar />
                <h4>{channelTitle}</h4>
              </div>
              <div className="search__details">
                <h3>{title}</h3>
                Views
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Search;
