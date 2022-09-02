import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>{

  //useState hook
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)

    const updateNews = async ()=>{
      props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
      updateNews();
      // eslint-disable-next-line 
    }, [props.apiKey])

    const fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);    
      };

    return (
      <>
        <h1 className="text-center" style={{margin: '30px 0px', marginTop:"90px"}} >{props.title}</h1>
        {loading && <Spinner></Spinner>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner></Spinner>} >
        
        <div className="container">
          <div className="row">
              {articles.map((element, index)=>{
                  return(
                      <div className="col-md-4" key={index}>
                      <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                      </div>
                  )
              })}
          </div>
        </div>
        
        </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general',
}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category: PropTypes.string,
}

export default News
