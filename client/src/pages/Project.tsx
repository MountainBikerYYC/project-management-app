import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/ProjectQueries";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT);
  return <div>{id}</div>;
};

export default Project;
