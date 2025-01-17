interface DisplayItemsProps {
	items: any[];
	isProjects: boolean;
}

function DisplayItem({ items, isProjects }: DisplayItemsProps) {
	return (
		<div>
			{items.map((item: any) => (
				<div key={item.title} className="displayItem">
					<img src={item.imageURL} alt={item.title} />
					<div className="displayItemText">
						<h2>{item.title}</h2>
						<div className="displayItemInfoText">
							<h3>{item.date}</h3>
							<p style={{ color: item.statusColor }}>{item.status}</p>
						</div>
						<p>{item.description}</p>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<a
							href={item.linkURL}
							target="_blank"
							className="callToActionButton"
						>
							{isProjects ? "Visit" : "View"}
						</a>
						{isProjects && (
							<a
								href={item.githubURL}
								target="_blank"
								className="actionButton"
							>
								Github
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default DisplayItem;
