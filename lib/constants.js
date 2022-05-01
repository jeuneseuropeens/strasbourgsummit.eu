export const richTextConfig = {
	p: (children) => <p className="mt-4">{children}</p>,
	bold: (children) => <span className="font-medium text-primary-500">{children}</span>,
	br: () => <br/>,
	ul: (children) => <ul className="list-disc">{children}</ul>,
	li: (children) => <li className="ml-4 pl-2">{children}</li>,
}
