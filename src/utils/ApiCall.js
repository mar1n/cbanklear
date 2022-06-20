import axios from "axios";

const ApiCall = async  (page) => {
  let query_params = {
    limit: 3,
    order: "DESC",
    page: page,
  };

  const { data: ourResult, headers, } = await axios.get(
    "https://api.thecatapi.com/v1/images/search",
    {
      params: query_params,
      headers: {
        "x-api-key": "972da10d-ef46-4937-9b57-6aca9a67fae0",
      },
    }
  );

  const currentPage = headers["pagination-page"]


  // const [result] = ourResult;
  // console.log('result', result);
  // const { url } = result;
  // console.log('url', url);
  return {ourResult, currentPage};
};

export default ApiCall;
