import React, { Component, Fragment } from "react";
import Item from "./Item";
// import newsJSON from "../../../news.json";
// const newsLen = newsJSON.length;
class List extends Component {
  constructor(props) {
    super(props);
    const { newsFromList } = this.props;
    this.state = {
      startId: 0,
      maxId: newsFromList.length,
      len: 2
    };
    this.newsShow = this.newsShow.bind(this);
    this.smaller = this.smaller.bind(this);
    this.more = this.more.bind(this);
    this.pageUp = this.pageUp.bind(this);
    this.pageDn = this.pageDn.bind(this);

  }
  newsShow() {
    const { startId, len, maxId } = this.state;
    const { newsFromList } = this.props;
    if (len < 0) this.setState({ len: 2 });
    else if (len > maxId) this.setState({ len: maxId });
    return newsFromList
      .slice(startId, startId + len)
      .map(({ id, news_title, text }) => {
        return (
          <Fragment key={id}>
            <Item news_title={news_title} news={text} />
          </Fragment>
        );
      });
  }
  smaller(){
    const { len, startId} = this.state;
    this.setState({ 
      len: len - 2 >= 2 ? len - 2 : 2
    });
  }
  more(){
    const { len, maxId} = this.state;
    this.setState({ 
      len: len + 2 <= maxId ? len + 2 : maxId
    });
  }

  pageUp() {
    const { len, startId } = this.state;
    this.setState({
      startId: startId - len >= 0 ? startId - len : 0
    });
  }
  pageDn() {
    const { len, startId, maxId } = this.state;
    this.setState({
      startId: startId + len < maxId ? startId + len : maxId - len
    });
  }
  render() {
    return (
      <>
        {this.newsShow()}
        <div className="novigation">
          <button
            onClick={this.smaller}
            className="button"
          >
            smaller
          </button>
          <button
            onClick={this.more}
            className="button"
          >
            more
          </button>
        </div>
        <div className="novigation">
          <button onClick={this.pageUp} className="button">
            Up
          </button>
          <button onClick={this.pageDn} className="button">
            Down
          </button>
        </div>
      </>
    );
  }
}

export default List;
