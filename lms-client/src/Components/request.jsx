import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Navbar from './navbar';
import RequestForm from './request_form'; // Assuming you have a request_form.jsx file
import './request.css';

const Requests = ({ hide }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [editRequest, setEditRequest] = useState(null);

  useEffect(() => {
    async function loadRequests() {
      try {
        const response = await fetch("http://localhost:3000/requests");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const sortedRequests = [...data].sort((a, b) => b.id - a.id);

        setRequests(sortedRequests);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    loadRequests();
  }, []);

  const handleEdit = (request) => {
    setVisible(true);
    setEditRequest(request);
  };

  const handleDelete = async (requestId) => {
    try {
      const response = await fetch(`http://localhost:3000/requests/${requestId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete request");
      }

      setRequests(requests.filter((request) => request.id !== requestId));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {hide ? null : visible ? (
        <RequestForm editRequest={editRequest} handleEdit={handleEdit} />
      ) : (
        <button className="add-request-button" onClick={() => setVisible(true)}>
          Add Request
        </button>
      )}
      <h3 className="recently_added">Recently Added Requests</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Publisher</th>
            <th>Author</th>
            <th>Email</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.title}</td>
              <td>{request.publisher}</td>
              <td>{request.author}</td>
              <td>{request.user.email}</td>
              <td>{request.isbn}</td>
              <button
                className="btn"
                style={{ display: hide ? "none" : "block" }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#71c72e" }}
                  onClick={() => handleEdit(request)}
                />
              </button>
              <button
                className="btn"
                style={{ display: hide ? "none" : "block" }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "#71c72e" }}
                  onClick={() => handleDelete(request.id)}
                />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
