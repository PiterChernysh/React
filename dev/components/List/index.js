import React, { Component, Fragment } from "react";
import Item from "./Item";
import newsJSON from "../../../news.json";
const newsLen = newsJSON.length;
class List extends Component {
  constructor() {
    super();
    this.state = {
      startId: 0,
      maxId: newsLen,
      len: 2
    };
    this.newsShow = this.newsShow.bind(this);
  }
  newsShow() {
    const { startId, len } = this.state;
    return newsJSON
      .slice(startId, startId + len)
      .map(({ news_title, text }) => {
        return (
          <Fragment key={news_title}>
            <Item news_title={news_title} news={text} />
          </Fragment>
        );
      });
  }
  newsLength(num){
    const { len, startId, maxId } = this.state;
    num > 0 ?
    this.setState({
      len: len + num <= maxId ? len + num : maxId
    }) :
    this.setState({
      len: len + num >= startId - num ? len + num : 2
    });
  }

  pageMove(n){
    const { len, startId, maxId } = this.state;
    n>0 ?
    this.setState({
      startId: startId - len >= 0 ? startId -len : startId
    }) :
    this.setState({
      startId: startId + len < maxId ? startId + len : maxId - len
    });
  }
  render() {
    return (
      <>
        {this.newsShow()}
        <div className="novigation">
          <button onClick={()=>this.newsLength(-2)} className="button">
            smaller
          </button>
          <button onClick={()=>this.newsLength(2)} className="button">
            more
          </button>
        </div>
        <div className="novigation">
          <button onClick={()=>this.pageMove(1)} className="button">
            Up
          </button>
          <button onClick={()=>this.pageMove(-1)} className="button">
            Down
          </button>
        </div>
      </>
    );
  }
}

export default List;
