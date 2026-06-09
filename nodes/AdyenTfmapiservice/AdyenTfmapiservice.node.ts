import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenTfmapiservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-tfmapiservice',
		name: 'N8nDevAdyenTfmapiservice',
		icon: { light: 'file:./adyen-tfmapiservice.svg', dark: 'file:./adyen-tfmapiservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This API provides endpoints for managing your point-of-sale (POS) payment terminals. You can use the API to obtain information about a specific terminal, retrieve overviews of your terminals and st..',
		defaults: { name: 'adyen-tfmapiservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenTfmapiserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...generalDescription
		],
	};
}
