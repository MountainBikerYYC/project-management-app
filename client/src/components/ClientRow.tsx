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

  //   const handleDelete = () => {
  //     deleteClient({
  //       variables: { id: client.id },
  //       //refetch queries is not best method
  //     //   refetchQueries: [{ query: GET_CLIENTS }],
  //         update(cache, {data: {deleteClient}}){
  //           const {existingClients} = cache.readQuery<{ clients: ClientInterface[] }>({
  //               query: GET_CLIENTS });

  //               const updatedClients = existingClients?.clients.filter((c) => c.id !== client.id);

  //               cache.writeQuery({
  //                   query: GET_CLIENTS,
  //                   data: {clients: updatedClients.filter(updatedClients =>client.id !=== deleteClient.id)},
  //               });
  //           }
  //     });
  //   };

  const handleDelete = async () => {
    const { data } = await deleteClient({
      variables: { id: client.id },
      update(cache) {
        const existingClients = cache.readQuery<{ clients: ClientInterface[] }>(
          {
            query: GET_CLIENTS,
          }
        );

        const updatedClients = existingClients?.clients.filter(
          (c) => c.id !== client.id
        );

        cache.writeQuery({
          query: GET_CLIENTS,
          data: { clients: updatedClients },
        });
      },
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
