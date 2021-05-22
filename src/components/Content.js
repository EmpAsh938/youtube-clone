import numeral from "numeral";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import Search from "./Search";
import "./Content.css";

const Content = ({
  showMenu,
  popularVideos,
  isLoading,
  searchTerm,
  searchVideos,
}) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {searchTerm === "" ? (
        <section
          className={showMenu ? "content content__menu-active" : "content"}
        >
          {popularVideos.map((item) => {
            const {
              id,
              snippet: {
                channelTitle,
                localized: { title },
                thumbnails: {
                  medium: { url },
                },
              },
              contentDetails: { duration },
              statistics: { viewCount },
            } = item;
            const seconds = moment.duration(duration).asSeconds();
            const length = moment.utc(seconds * 1000).format("mm:ss");
            return (
              <div className="content__wrapper" key={id}>
                <div className="content__thumbnail">
                  <img src={url} alt={title} />
                  <span>{length}</span>
                </div>
                <div className="content__info">
                  <div className="content__channelImage">
                    <Avatar />
                  </div>
                  <div className="content__details">
                    <h3>{title}</h3>
                    <h4>{channelTitle}</h4>
                    <p>{numeral(Number(viewCount)).format("0a")} views</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="loader"></div>
        </section>
      ) : (
        <Search
          searchTerm={searchTerm}
          isLoading={isLoading}
          showMenu={showMenu}
          searchVideos={searchVideos}
        />
      )}
    </>
  );
};

export default Content;
