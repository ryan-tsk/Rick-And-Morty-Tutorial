import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import Info from "../../interface/Info";

const Pagination = ({pageNumber, info, updatePageNumber, refetch}: 
  {pageNumber:number, 
   info:Info, 
   updatePageNumber: (value:number) => void,
   refetch: ()=> void}) => {
  
    const pageChange = (data  : {selected:number}) => {
      updatePageNumber(data.selected+1)
      refetch()
    };

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
      setWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
      <>
        <style jsx>
          {`
            @media (max-width: 768px) {
              .pagination {
                font-size: 12px;
              }
              .next,
              .prev {
                display: none;
              }
            }
            @media (max-width: 768px) {
              .pagination {
                font-size: 14px;
              }
            }
          `}
        </style>
        <ReactPaginate
          className="pagination justify-content-center my-4 gap-4"
          nextLabel="Next"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="Prev"
          previousClassName="btn btn-outline-primary fs-5 prev"
          nextClassName="btn btn-outline-primary fs-5 next"
          activeClassName="active"
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          pageCount={info?.pages}
          onPageChange={pageChange}
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </>
    );
}

export default Pagination