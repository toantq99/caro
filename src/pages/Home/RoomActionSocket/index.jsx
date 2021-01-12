import { joinRoomSuccess } from "@/actions/room";
import { SOCKET_TYPES } from "@/constants/socketTypes";
import useSocket from "@/hooks/useSocket";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const RoomActionSocket = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const { replace } = useHistory();

  useEffect(() => {
    const handleJoinRoomSuccess = (roomInfo) => {
      console.log("join-room-quick-success");
      console.log(roomInfo);
      dispatch(joinRoomSuccess(roomInfo));
      replace("/room", { roomInfo });
    };
    if (socket) {
      socket
        .off(SOCKET_TYPES.JOIN_ROOM_SUCCESS)
        .off("join-room-quick-success")
        .on(SOCKET_TYPES.JOIN_ROOM_SUCCESS, handleJoinRoomSuccess)
        .on("join-room-quick-success", handleJoinRoomSuccess);
    }
    return () => {
    };
  }, [dispatch, replace, socket]);

  return <></>;
};

export default RoomActionSocket;
