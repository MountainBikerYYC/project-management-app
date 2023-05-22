import { ClientInterface } from "../interfaces/ClientInterface";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "./mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";

interface ClientRowProps {
  client: ClientInterface;
}

const ClientRow = ({ client }: ClientRowProps) => {
  const [deleteClient] = useMutation(DELETE_CLIENT);

  const handleDelete = () => {
    deleteClient({
      variables: { id: client.id },
      //refetch queries is not best method
      refetchQueries: [{ query: GET_CLIENTS }],
      //Fix this tommorow
      //   update(cache, {data: {deleteClient}}){
      //     const {clients} = cache.readQuery<{ clients: ClientInterface[] }>({
      //         query: GET_CLIENTS });
      //         cache.writeQuery({
      //             query: GET_CLIENTS,
      //             data: {clients: clients.filter(client =>client.id !=== deleteClient.id)},
      //         });
      //     }
    });
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
