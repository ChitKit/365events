import React from "react";
import "./PaperShow.scss";

export default function PaperShow({ data }) {
    return (
        <div className="Papper_Show">
			<div className="Papper_Show-Info">
				<div className="Papper_Show-Info-Description">
					<p>{data.description}</p>
				</div>
				<div className="Papper_Show-Info-Main_Info_Show">
					<img className="Papper_Show-Info-Main_Info_Show-Img" src={data.img} alt="" />
				</div>
			</div>
        </div>
    );
}
