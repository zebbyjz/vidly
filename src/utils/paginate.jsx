

export default paginate

function paginate(items,currentPage,pageSize){
    
/*      if page1 => 0,1,2,3

        if page2 => 4,5,6,7

        if page3=> 8 
        
        So, startIndex should be (currentPage-1) *pageSize */

    let startIndex= (currentPage-1)*pageSize;
    let endIndex= startIndex+pageSize;
    let paginatedItems= items.slice(startIndex,endIndex);
    
    return paginatedItems;

}