import React, { useEffect, useState } from 'react';

interface PortStatus {
  port: number;
  status: string;
}

const PortChecker: React.FC = () => {
  const [portStatuses, setPortStatuses] = useState<PortStatus[]>([]);

  useEffect(() => {
    const portsToCheck = [8000, 3000];
    const checkPorts = async () => {
      const results: PortStatus[] = await Promise.all(
        portsToCheck.map(async (port) => {
          try {
            const response = await fetch(`http://localhost:${port}/`, {
              method: 'GET',
              mode: 'cors',
            });
            if (response.ok) {
              return { port, status: 'Running' };
            } else {
              return { port, status: 'Not Responding' };
            }
          } catch (error) {
            return { port, status: 'Not Running' };
          }
        }),
      );
      setPortStatuses(results);
    };

    checkPorts();
  }, []);

  return (
    <div>
      <h1>Port Status Checker</h1>
      <table>
        <thead>
          <tr>
            <th>Port</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {portStatuses.map((portStatus) => (
            <tr key={portStatus.port}>
              <td>{portStatus.port}</td>
              <td>{portStatus.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortChecker;
