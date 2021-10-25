import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useListLogic = (url) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [canPrevPage, setCanPrevPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notifyErorr = (msg) =>
    toast.error(msg, {
      autoClose: 2000,
    });

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setIsLoading(false);
        if (data.detail) {
          notifyErorr(data.detail);
        }
        if (data.next) setCanNextPage(true);
        else setCanNextPage(false);

        if (data.previous) setCanPrevPage(true);
        else setCanPrevPage(false);

        setData(data.results);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [page, url]);

  return {
    data,
    prevPage,
    nextPage,
    isLoading,
    canNextPage,
    canPrevPage,
  };
};

export default useListLogic;
