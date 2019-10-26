import React, { Component, Fragment } from "react";
import Item from "./Item";
class List extends Component {
  constructor(props) {
    super(props);
    const newsFromList = JSON.parse(localStorage.getItem("newsList"));
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
    const newsFromList = JSON.parse(localStorage.getItem("newsList"));
    if (len < 0) this.setState({ len: 2 });
    else if (len > maxId) this.setState({ len: maxId });
    console.log(newsFromList);
    return newsFromList
      .slice(startId, startId + len)
      .map(item => {
        const { removeFromProps, updateFromProps } = this.props;
        return (
            <Item 
            key={item.id}
            removeFromList={removeFromProps}
						updateFromList={updateFromProps} 
            item = {item} />
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
      startId: startId + len >= maxId ? maxId : startId + len 
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
