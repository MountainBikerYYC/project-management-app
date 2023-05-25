import { FaIdBadge, FaEnvelope, FaPhone } from "react-icons/fa";
import { ClientInterface } from "../interfaces/ClientInterface";
interface ClientInterfaceInfo {
  client: ClientInterface;
}

const ClientInfo = ({ client }: ClientInterfaceInfo) => {
  if (!client) {
    return <div>No client data available</div>;
  }

  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
