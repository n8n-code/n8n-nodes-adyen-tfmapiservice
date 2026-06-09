import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenTfmapiservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Adyen Tfmapiservice',
		name: 'N8nDevAdyenTfmapiservice',
		icon: { light: 'file:./adyen-tfmapiservice.svg', dark: 'file:./adyen-tfmapiservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API manages POS terminals: retrieve terminal info and overviews.',
		defaults: { name: 'Adyen Tfmapiservice' },
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
