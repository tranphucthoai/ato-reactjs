import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataApi } from "../../../api";
import { PaginationNormal, PostOverlayNormal } from "../../../components";

function ListPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const location = useLocation();
  const params = queryString.parse(location.search);
  const navigate = useNavigate();

  const queryParams = useMemo(() => {
    return {
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 17,
    };
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await dataApi.getAll(queryParams);
        setData(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch data api");
      }
    })();
  }, [queryParams]);

  const { _totalRows: total, _limit: limit, _page: page } = pagination;

  const handlePaginChange = (pageChange) => {
    const filters = {
      ...queryParams,
      _page: pageChange,
    };

    navigate({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  console.log("OPA", pagination);

  return (
    <section className="section-block list-page">
      <div className="container">
        <div className="section-inner container-fullwidth">
          <ul className="posts-list flex-box flex-box-3i flex-space-30">
            {data?.map((item, index) => (
              <li key={item.id || index} className="posts-item">
                <PostOverlayNormal data={item} />
              </li>
            ))}
          </ul>

          <PaginationNormal
            handleChange={handlePaginChange}
            itemCount={Math.ceil(total / limit)}
            index={Number.parseInt(page)}
          />
        </div>
      </div>
    </section>
  );
}

export default ListPage;
