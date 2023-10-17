import React from "react";
import "./PaperShow.scss";

export default function PaperShow({ data }) {
    return (
		<div className="Paper_Show">
			<div className="Paper_Show-Info">
				<div className="Paper_Show-Info-Description">
					<p>{data.description}</p>
				</div>
				<div className="Paper_Show-Info-Main_Info_Show">
					<img
						className="Paper_Show-Info-Main_Info_Show-Img"
						src={data.img}
						alt=""
					/>
					<img
						className="Paper_Show-Info-Main_Info_Show-Img"
						src={data.img}
						alt=""
					/>
					<img
						className="Paper_Show-Info-Main_Info_Show-Img"
						src={data.img}
						alt=""
					/>
				</div>
				<div className="Paper_Show-Info-Buy">
					<p className="Bubble_Show-Info-Buy-Price">{data.price}</p>
					<div
						className='Paper_Show-Info-Buy-Button'
					>Заказать</div>
				</div>
			</div>
		</div>
    );
}
