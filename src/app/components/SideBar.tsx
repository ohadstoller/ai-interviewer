import React from "react";
import NewChat from "@/app/components/NewChat";

function SideBar() {
    return (
        <div className={"p-2 flex flex-col h-screen"}>
            <div className={"flex-1"}>
                <div>
                        <NewChat/>

                    <div>
                        {/*MODEL SELECTION*/}
                    </div>

                    {/*MAP THROUGH THE CHATS*/}
                </div>

            </div>
        </div>
    )
}

export default SideBar;