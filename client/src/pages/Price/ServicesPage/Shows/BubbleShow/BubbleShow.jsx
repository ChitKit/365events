import React from "react";
import "./BubbleShow.scss";

export default function BubbleShow({ data }) {
    return (
        <div className="Bubble_Show">
            <div className="Bubble_Show-Info">
                <div className="Bubble_Show-Info-Description">
                    <p>{data.description}</p>
                </div>
                <div className="Bubble_Show-Info-Main_Info_Show">
                    <img
                        className="Bubble_Show-Info-Main_Info_Show-Img"
                        src={data.img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
