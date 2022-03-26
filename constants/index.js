export const richTextConfig = {
	p: (children) => <p className="mt-4">{children}</p>,
	bold: (children) => <span className="font-medium text-primary-500">{children}</span>,
	br: () => <br/>
}
