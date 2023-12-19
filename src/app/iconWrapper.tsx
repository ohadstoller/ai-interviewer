import React, {ReactElement} from "react";

export function IconWrapper({children}: { children: ReactElement }): ReactElement {
    return <div className={"h-6 w-6 text-blue-500"}>
        {children}
    </div>;
}