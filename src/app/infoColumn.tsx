import React, {ReactElement} from "react";
import {IconWrapper} from "@/app/iconWrapper";

export function InfoColumn({icon}: { icon: ReactElement }): ReactElement {
    return <div>
        <div className={"flex flex-col items-center justify-center mb-5"}>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <h2>Examples</h2>
        </div>

        <div className={"space-y-2"}>
            <p className={"infoText"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry</p>
            <p className={"infoText"}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p className={"infoText"}>It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout</p>
        </div>
    </div>;
}