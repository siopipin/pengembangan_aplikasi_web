import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, [userId]); 

  // Fungsi untuk fetch data dari API
  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
        <label>User ID (1-10): </label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          min="1"
          max="10"
        />
      </div>

      {loading && <p>Memuat data...</p>}

      {error && <p>Error: {error}</p>}

      {userData && !loading && (
        <div>
          <h3>Data User:</h3>
          <p>
            <strong>Nama:</strong> {userData.name}
          </p>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Kota:</strong> {userData.address?.city}
          </p>
          <p>
            <strong>Website:</strong> {userData.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
