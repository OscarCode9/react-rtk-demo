import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const userSliceView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="user-view">
      <h2> Users </h2>
      {user.loading && <p>Loading...</p>}
      {user.error && <p>Error: {user.error}</p>}
      <ul>
        {user.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default userSliceView;
