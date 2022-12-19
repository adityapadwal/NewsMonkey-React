import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2022/08/09/1600x900/ygy_1637905928669_1660031330208_1660031330208.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className ="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read more </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem