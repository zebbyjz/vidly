import React from 'react';

const Pagination = (props) => {

    const {itemsCount,pageSize}=props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    if (pagesCount===1) return null;
    const pages=[];
    
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }


    return (  

        <React.Fragment><nav>
            <ul className="pagination">
                {pages.map( (c)=> <li className="page-item"><a href="" className="page-link">{c}</a></li>)}
            </ul>
        </nav>

        
        
        </React.Fragment>
    );
}
 
export default Pagination;