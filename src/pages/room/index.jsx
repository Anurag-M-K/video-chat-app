import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function index() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 2116028587;
    const serverSecret = "a488c05a73239efb4643a2124537711c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Anurag MK"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
      container: element,
      sharedLinks :[
        {
          name: "Copy Link",
          url :`https://snazzy-conkies-a7eab9.netlify.app/room/${roomId}`
        }
      ],
      scenario :{
        mode:ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton : false,
    })
  };
  return <div>
    <div ref={myMeeting} />
  </div>;
}

export default index;
