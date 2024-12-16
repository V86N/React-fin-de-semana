import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ListNews.scss"


const ListNews = () => {
    const [news, setNews] = useState([])

    const getNews = async () => {
        try {
            const res = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=SkmhEFv64arsaUK9xd8lBVUT180nzhTL")
            setNews(res.data.results)
        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        getNews();
    }, [])


    return (
        <div>
            {news.map((newItem) => {
                return (
            <div className='newslist'>
                
                {newItem.title}
                {newItem.source}
            </div>
            )

})

}


        </div>
    )
}

export default ListNews