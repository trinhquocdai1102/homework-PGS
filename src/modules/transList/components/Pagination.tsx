import React from 'react';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

interface Props {
  totalPage: number;
  itemPerPage: number;
  currentPage: number;
  handleChangePage(num: number): void;
}

const Pagination = (props: Props) => {
  const lastPage = Math.ceil(props.totalPage);
  const [displayPage, setDisplayPage] = React.useState({ start: 0, end: 4 });
  const totalPage = Array.from(Array(lastPage).keys()).slice(displayPage.start, displayPage.end);
  const changeDisplayPage = React.useCallback(() => {
    if (lastPage < 4) return;
    if (props.currentPage === 1) {
      setDisplayPage({ start: 0, end: 4 });
    }
    if (props.currentPage === displayPage.end) {
      setDisplayPage((prev) => {
        return { start: prev.start + 3, end: prev.end + 3 };
      });
    }
    if (props.currentPage === displayPage.start && props.currentPage !== 1) {
      setDisplayPage((prev) => {
        return { start: prev.start - 3, end: prev.end - 3 };
      });
    }
    return;
  }, [props.currentPage, lastPage, displayPage.end, displayPage.start]);

  React.useEffect(() => {
    changeDisplayPage();
  }, [changeDisplayPage]);
  return (
    <div className="pagination">
      <div className="pagination-left">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'blue' }}>Rows per page:</span>
          <select name="rowsPerPage" id="rowsPerPage" form="rowsPerPage" defaultValue="10">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <p>
          {(props.currentPage - 1) * 10 + 1}-{props.currentPage * 10} of {props.totalPage * props.itemPerPage}
        </p>
      </div>
      <ul className="pagination-right">
        <li
          className={`${props.currentPage === 1 ? 'displayNone' : ''} pagination-list`}
          onClick={() => {
            if (props.currentPage === 1) return;
            props.handleChangePage(props.currentPage - 1);
          }}
        >
          <p className="pagination-item" aria-label="Previous">
            <GrPrevious />
          </p>
        </li>
        {totalPage.map((num) => {
          return (
            <li key={num} className={`${num + 1 === props.currentPage ? 'active' : ''} pagination-list`}>
              <p
                className="pagination-item"
                onClick={() => {
                  props.handleChangePage(num + 1);
                }}
              >
                {+num + 1}
              </p>
            </li>
          );
        })}
        <li
          className={`${props.currentPage === lastPage ? 'displayNone' : ''} pagination-list`}
          onClick={() => {
            if (props.currentPage === lastPage) return;
            props.handleChangePage(props.currentPage + 1);
          }}
        >
          <p className="pagination-item" aria-label="Next">
            <GrNext />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
