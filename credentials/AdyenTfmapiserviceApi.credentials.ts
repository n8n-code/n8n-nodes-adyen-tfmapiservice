import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenTfmapiserviceApi implements ICredentialType {
        name = 'N8nDevAdyenTfmapiserviceApi';

        displayName = 'Adyen Tfmapiservice API';

        icon: Icon = { light: 'file:../nodes/AdyenTfmapiservice/adyen-tfmapiservice.svg', dark: 'file:../nodes/AdyenTfmapiservice/adyen-tfmapiservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://postfmapi-test.adyen.com/postfmapi/terminal/v1',
                        required: true,
                        placeholder: 'https://postfmapi-test.adyen.com/postfmapi/terminal/v1',
                        description: 'The base URL of your Adyen Tfmapiservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
