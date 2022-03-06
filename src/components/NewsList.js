import React, {useState, useEffect} from "react";
import NewsItem from './NewsItem';
import styled from "styled-components";
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sample = { 
    title: 'title', 
    desc: 'story',
    url: 'https://google.com',
    urlToImg: 'https://via.placeholder.com/160',
}


const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=&{category}`;
        const url = 'https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94'
        return axios.get(url)
    }, [category]);

    const [setArticles] = useState(null);
    const [setLoading] = useState(false); 

    // useEffect(() => { 
    //     setLoading(true); 
    //     const query = category === 'all' ? '' : `&category=${category}`; 
    //     const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=838d21ec33504cf3b37412459147ae94`;

    //     axios.get(url) 
    //     .then(res => { 
    //             console.log(res.data.articles); 
    //             setArticles(res.data.articles) 
    //         }) 
    //         .catch(err => console.log(err)) 
    //     setLoading(false); 
    // }, [category]);

    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>error!</NewsListBlock>
    }

    const { articles } = response.data;

    return (
        <div>
            <NewsListBlock>
                <NewsItem article={sample} />
                <NewsItem article={sample} />
                <NewsItem article={sample} />
            </NewsListBlock>

            {articles ? <NewsListBlock>
                {articles.map(item => <NewsItem article={item} />)}
            </NewsListBlock> : null}
        </div>
    );
};

export default NewsList;