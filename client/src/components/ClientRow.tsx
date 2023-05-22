import { ClientInterface } from "../interfaces/ClientInterface";
import { FaTrash } from "react-icons/fa";

interface ClientRowProps {
  client: ClientInterface;
}

const ClientRow = ({ client }: ClientRowProps) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
