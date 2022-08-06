import React from "react";
import { PropTypes } from "prop-types";

// hooks
import { useActions } from "hooks/actionHooks/useActions";
import { useEntityContainerPost } from "hooks/queryHooks";

// settings
import {
  userSettings,
  adminSetting,
  userLogOutSetting,
} from "settings/user-account_settings";

// components
import UserAccountOptionsItem from "./UserAccountOptionsItem";
import { toast } from "react-toastify";

const UserAccountOptions = ({ userRole }) => {
  const { mutateAsync } = useEntityContainerPost({
    url: "/api/v1/logout",
  });

  const { userLogOut } = useActions();

  const userLogOutHandler = async () => {
    try {
      const data = await mutateAsync();
      userLogOut();

      toast.success(data.message, {
        position: "top-right",
      });
    } catch (error) {
      toast.error(error?.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <ul
        className="my-6"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        }}
      >
        {userSettings.map((setting) => (
          <UserAccountOptionsItem key={setting.id} setting={setting} />
        ))}
        {userRole === "admin" ? (
          <UserAccountOptionsItem
            key={adminSetting.id}
            setting={adminSetting}
          />
        ) : null}
        <UserAccountOptionsItem
          key={userLogOutSetting.id}
          setting={userLogOutSetting}
          onClick={userLogOutHandler}
        />
      </ul>
    </div>
  );
};

UserAccountOptions.propTypes = {
  userRole: PropTypes.string,
};

export default UserAccountOptions;
